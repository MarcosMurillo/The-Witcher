import React from 'react';
import { Container, Content } from './styles';
import Logo from '../../assets/logo_dark.png';

function Main() {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="logo" />
        <input type="text" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <button type="button">LOGIN</button>
      </Content>
    </Container>
  );
}

export default Main;
