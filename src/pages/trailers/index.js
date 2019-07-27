import React from 'react';
import { Container, Sidebar } from './styles';
import Logo from '../../assets/logo_dark.png';

function Trailers() {
  return (
    <Container>
      <Sidebar>
        <img src={Logo} alt="logo" />
        <button type="button">TRAILERS</button>
        <button type="button">LOGOUT</button>
      </Sidebar>
    </Container>
  );
}

export default Trailers;
