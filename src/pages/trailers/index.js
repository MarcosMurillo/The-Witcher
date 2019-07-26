import React from 'react';
import { Container, Content, Sidebar } from './styles';
import Logo from '../../assets/logo_dark.png';

const Trailers = () => (
  <Container>
    <Content>
      <Sidebar>
        <img src={Logo} alt="logo" />
        <button type="button">TRAILERS</button>
        <button type="button">LOGOUT</button>
      </Sidebar>
    </Content>
  </Container>
);

export default Trailers;
