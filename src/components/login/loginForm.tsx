import styled from 'styled-components';
import { useState } from 'react';
import LoginInput from './loginInput';
import { usePostMutation } from '../../hooks/usePostMutation';
import { useNavigate } from 'react-router-dom';
import type {
  LoginRequest,
  LoginResponse,
} from '../../types/login/login.types';

const LoginFormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 4.6rem;
  border-radius: 0.5rem;
  background: #f9a326;
  font-size: 1.6rem;
  font-weight: 600;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 6.1rem;
`;

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const mutation = usePostMutation<LoginRequest, LoginResponse>('/users', {
    onSuccess: (data) => {
      console.log(data);
      alert('로그인 되었습니다.');
      localStorage.setItem('accessToken', data.data.accessToken);
      navigate('/');
    },
    onError: (error) => {
      console.error(error);
      alert('이메일 또는 비밀번호를 다시 확인해주세요.');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ email, password });
  };

  return (
    <LoginFormContainer onSubmit={handleSubmit}>
      <LoginInput
        label="이메일"
        placeholder="이메일을 입력하세요"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <LoginInput
        label="비밀번호"
        placeholder="비밀번호를 입력하세요"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <SubmitButton type="submit">로그인</SubmitButton>
    </LoginFormContainer>
  );
};

export default LoginForm;
