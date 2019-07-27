import React from 'react';
import { Sidebar, Logout, Content } from './styles';
import { Background } from '../../styles/components';
import Logo from '../../assets/logo_dark.png';

function Trailers() {
  return (
    <Background>
      <Sidebar>
        <img src={Logo} alt="logo" />
        <Logout to="/">LOGOUT</Logout>
      </Sidebar>
      <Content>
        <div />
      </Content>
    </Background>
  );
}

export default Trailers;
