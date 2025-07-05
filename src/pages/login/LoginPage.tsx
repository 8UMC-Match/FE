import styled from 'styled-components';
import Logo from '../../assets/images/login/logo.png';
import LoginForm from '../../components/login/loginForm';

const LoginPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 18.79rem;
  height: 12.164rem;
  margin: 16.3rem 0 14.5rem 0;
`;

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <LogoImg src={Logo} alt="logo" />

      <LoginForm />
    </LoginPageContainer>
  );
};

export default LoginPage;
