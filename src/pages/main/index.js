import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Content, Form, Button } from './styles';
import { Background } from '../../styles/components';
import Logo from '../../assets/logo_dark.png';

class Main extends PureComponent {
  state = {
    valueEmailInput: '',
    valuePasswordInput: '',
  };

  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { valueEmailInput, valuePasswordInput } = this.state;
    if (valueEmailInput === '' || valuePasswordInput === '') {
      return alert('Email ou senha invalidos');
    }

    const { history } = this.props;
    return history.push('/protected/trailers');
  };

  render() {
    const { valueEmailInput, valuePasswordInput } = this.state;
    return (
      <>
        <Background>
          <Content>
            <Form onSubmit={this.handleSubmit}>
              <img className="login-logomarca" src={Logo} alt="Logomarca The Witcher" />
              <input
                className="login-input"
                type="text"
                placeholder="E-mail"
                value={valueEmailInput}
                onChange={e => this.setState({ valueEmailInput: e.target.value })}
              />
              <input
                className="login-input"
                type="password"
                placeholder="Senha"
                value={valuePasswordInput}
                onChange={e => this.setState({ valuePasswordInput: e.target.value })}
              />
              <Button className="login-button" type="submit">
                LOGIN
              </Button>
            </Form>
          </Content>
        </Background>
      </>
    );
  }
}

export default Main;
