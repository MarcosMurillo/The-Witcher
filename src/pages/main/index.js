import React from 'react';
import { Container, Content, Login } from './styles';
import Logo from '../../assets/logo_dark.png';

function Main() {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="logo" />
        <input type="text" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <Login to="/trailers">
          <span>LOGIN</span>
        </Login>
      </Content>
    </Container>
  );
}

export default Main;
