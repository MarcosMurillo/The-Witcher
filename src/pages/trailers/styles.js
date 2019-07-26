import styled from 'styled-components';
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
`;

export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;

  height: 100%;
  width: 500px;
  background-image: linear-gradient(rgba(13, 13, 13, 0.6), rgba(13, 13, 13, 0.7)),
    url(${backgroundImage});
  color: #b3b3b3;

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
export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #414141 0%, #181818 20%), transparent;
  background-size: 100% 250%, 100%;
  background-repeat: no-repeat;
  background-position: top;
  padding: 0 20px;
`;
