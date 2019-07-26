import React from 'react';
import { Container, Content } from './styles';
import Logo from '../../assets/logo_dark.png';

function Login() {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="logo" />
        <input type="text" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
      </Content>
    </Container>
  );
}

export default Login;
