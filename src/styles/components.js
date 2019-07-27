import styled from 'styled-components';
import backgroundImage from '../assets/background.png';

export const Background = styled.div`
  display: flex;

  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
`;
