import styled from 'styled-components';
import backgroundImage from '../../assets/background.png';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${backgroundImage});
  background-size: cover;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    background-position-x: -60rem;
  }
  @media (max-height: 768px) {
    background-position-x: -60rem;
  }
`;
export const Content = styled.div`
  margin: 30vh auto auto auto;
  display: flex;
  flex-direction: column;

  img {
    display: flex;
    width: 250px;
  }

  input {
    margin-top: 10px;
    border: 0;
    background-color: transparent;
  }
`;
