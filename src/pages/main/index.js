import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Content, Form, Button } from './styles';
import { Background } from '../../styles/components';
import Logo from '../../assets/logo_dark.png';

class Main extends PureComponent {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
  };

  handleSubmit = (e) => {
    const { history } = this.props;

    e.preventDefault();

    history.push('/trailers');
  };

  render() {
    return (
      <>
        <Background>
          <Content>
            <Form onSubmit={this.handleSubmit}>
              <img className="login-logomarca" src={Logo} alt="Logomarca The Witcher" />
              <input className="login-input" type="text" placeholder="E-mail" />
              <input className="login-input" type="password" placeholder="Senha" />
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
