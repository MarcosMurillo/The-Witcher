import styled from 'styled-components';

export const Content = styled.div`
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.65);

  display: flex;
  flex: 1;

  justify-content: center;
  align-items: center;

  height: 100%;

  .login-logomarca {
    height: 200px;
    width: auto;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  .login-input {
    background: transparent;
    margin-top: 35px;

    padding: 2px;

    border: 0;
    border-bottom: 1px solid #a99e7e;
    color: #babaca;
    font-family: Roboto;
    font-size: 22px;
  }

  .login-input + .login-input {
    margin-top: 20px;
  }
`;

export const Button = styled.button`
  width: 150px;
  height: 40px;
  align-self: center;

  text-align: center;
  vertical-align: baseline;

  font-family: Roboto Condensed;
  font-size: 14px;

  margin-top: 30px;

  border: 1px solid #a99e7e;
  background-color: transparent;
  color: #a99e7e;

  cursor: pointer;
  &:hover {
    opacity: 0.5;
    background: #a99e7e;
    color: #fafafa;
  }
`;
