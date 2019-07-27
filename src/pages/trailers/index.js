import React from 'react';
import { Container, Sidebar, Logout } from './styles';
import Logo from '../../assets/logo_dark.png';

function Trailers() {
  return (
    <Container>
      <Sidebar>
        <img src={Logo} alt="logo" />
        <Logout to="/">
          <strong>LOGOUT</strong>
        </Logout>
      </Sidebar>
    </Container>
  );
}

export default Trailers;
