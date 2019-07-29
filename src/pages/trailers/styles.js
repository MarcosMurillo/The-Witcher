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

  text-decoration: none;

  color: #babaca;
  cursor: pointer;

  &:hover {
    color: #a99e7e;
  }
`;

export const Content = styled.div`
  background: rgb(0, 0, 0);
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.65) 100%);

  height: 100%;
  width: 100%;
  display: flex;

  padding: 0px 40px 40px 40px;
`;

export const MovieList = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-evenly;

  padding: 0px 40px;

  overflow-y: scroll;

  .trailer-card {
    height: 300px;
    width: auto;

    border: 1px solid #a99e7e;
    margin: 40px 20px 0px 0px;
    padding: 0px;

    cursor: pointer;
  }

  ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-track {
    background: #8e825e;
    border: 5px solid transparent;
    background-clip: content-box;
    margin: 45px 25px;
  }

  ::-webkit-scrollbar-thumb {
    background: #a99e7e;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #72684b;
  }
`;

export const LoadMore = styled.button`
  width: 150px;
  height: 40px;
  align-self: center;

  text-align: center;
  vertical-align: baseline;

  font-family: Roboto;
  font-size: 14px;

  margin-top: 30px;

  border: 1px solid #a99e7e;
  background-color: transparent;
  color: #a99e7e;
  cursor: pointer;

  &:hover {
    background-color: #a99e7e;
    color: #babaca;
  }
`;

export const CloseModal = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 5;

  font-family: Roboto;
  font-size: 18px;
  color: #babaca;
  cursor: pointer;

  &:hover {
    color: #a99e7e;
  }

  border: none;
  background-color: transparent;
`;
