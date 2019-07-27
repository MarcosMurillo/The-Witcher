import styled from 'styled-components';
import backgroundImage from '../../assets/background.png';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8)),
    url(${backgroundImage});
  background-size: cover;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  position: relative;
  display: flex;
  align-items: center;
`;

export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;

  height: 100%;
  width: 400px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage});
  color: #b3b3b3;

  border-right: 1px solid #4c4c4c;

  img {
    width: 274px;
    height: 137px;
    display: block;
  }

  button {
    width: 254px;
    height: 39px;
    align-self: center;

    font-family: Roboto Condensed;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: center;

    margin-top: 50px;

    border: 1px solid #a99e7e;
    background-color: transparent;
    color: #a99e7e;

    outline: 0;

    cursor: pointer;
    &:hover {
      opacity: 0.5;
      background: #a99e7e;
      color: #fafafa;
    }
  }
`;
