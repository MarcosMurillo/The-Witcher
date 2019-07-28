import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Sidebar, Logout, Content, MovieList, LoadMore,
} from './styles';
import { Background } from '../../styles/components';
import Logo from '../../assets/logo_dark.png';
import Player from '../../components/Player';
import movies from '../../mocks/movies';

export default function Trailers() {
  const [id, setId] = useState('');
  const [count, setcount] = useState(5);

  const visible = useSelector(state => state.isVisible);
  const dispatch = useDispatch();

  async function HandleClickImage(movie) {
    setId(movie);
    dispatch({ type: 'TOGGLE_MODAL', isVisible: true });
  }

  function HandleClickButton(valueCountState) {
    if (valueCountState <= movies.length) {
      setcount(valueCountState + 5);
    }
  }

  return (
    <Background>
      <Sidebar>
        <img src={Logo} alt="logo" />
        <Logout to="/">LOGOUT</Logout>
      </Sidebar>
      <Content>
        <MovieList>
          {movies
            .map(movie => (
              <img
                key={movie}
                className="trailer-card"
                onClick={() => HandleClickImage(movie)}
                src={`https://i.ytimg.com/vi/${movie}/sddefault.jpg`}
                alt="Thumnails"
              />
            ))
            .slice(0, count)}
          {count < movies.length && (
            <LoadMore onClick={() => HandleClickButton(count)}>LOAD MORE</LoadMore>
          )}
        </MovieList>
      </Content>
      <Player id={id} visible={visible} />
    </Background>
  );
}
