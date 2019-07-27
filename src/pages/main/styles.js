import styled from 'styled-components';
import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/background.png';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(rgba(13, 13, 13, 0.6), rgba(13, 13, 13, 0.7)),
    url(${backgroundImage});
  background-size: cover;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    background-position-x: -64rem;
  }
`;

export const Content = styled.div`
  margin: 30vh auto auto auto;
  display: flex;
  flex-direction: column;

  img {
    width: 274px;
    height: 137px;
  }

  input {
    width: 285px;
    height: 17px;
    color: #fff;
    margin-top: 40px;
    background: transparent;
    border: 0;
    border-bottom: 1px solid #a99e7e;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
  }

  }
`;
export const Login = styled(Link)`
  width: 106px;
  height: 39px;
  text-align: center;
  align-self: center;
  text-decoration: none;

  margin-top: 50px;

  border: 1px solid #a99e7e;
  background-color: transparent;
  color: #a99e7e;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  &:hover {
    opacity: 0.5;
    background: #a99e7e;
    color: #fafafa;
  }

  span {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    margin: auto;
  }
`;
