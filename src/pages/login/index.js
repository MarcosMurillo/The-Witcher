import React, { Component } from 'react';
import BackgroundImg from '../../assets/background.png';
import { Container } from './styles';

class Login extends Component {
  state = {};

  render() {
    return (
      <Container>
        <img src={BackgroundImg} alt="Backgroung" />
      </Container>
    );
  }
}

export default Login;
