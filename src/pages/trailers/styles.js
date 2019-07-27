import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Sidebar = styled.aside`
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.65);

  padding-top: 150px;

  display: flex;

  align-items: center;
  flex-direction: column;

  width: 500px;
  height: 100%;

  border-right: 1px solid #4c4c4c;

  img {
    height: 150px;
    width: auto;
  }
`;

export const Logout = styled(Link)`
  font-family: Roboto;
  margin-top: 50px;
  color: #babaca;
  cursor: pointer;
`;

export const Content = styled.div`
  background: rgb(0, 0, 0);
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.65) 100%);

  height: 100%;
  width: 100%;
`;
