import styled from 'styled-components';
import Colors from '../../styles/common/Colors';

export interface LoginInputProps {
  label: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  width: 100%;
`;

const LoginTitleP = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${Colors.orange400};
`;

const LoginInputBox = styled.input`
  width: 100%;
  height: 4.6rem;
  border-radius: 0.5rem;
  border: 0.1rem solid ${Colors.gray100};
  padding: 1.3rem 0.8rem;
  font-size: 1.5rem;
  font-weight: 400;
  color: ${Colors.gray300};

  &::placeholder {
    color: ${Colors.gray300};
  }
`;

const LoginInput = ({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
}: LoginInputProps) => {
  return (
    <LoginInputContainer>
      <LoginTitleP>{label}</LoginTitleP>
      <LoginInputBox
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </LoginInputContainer>
  );
};

export default LoginInput;
