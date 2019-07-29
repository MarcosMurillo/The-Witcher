import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;

  .fade-out {
    opacity: 0;
    width: 0;
    height: 0;
    transition: width 0.5s 0.5s, height 0.5s 0.5s, opacity 0.5s;
  }
`;
