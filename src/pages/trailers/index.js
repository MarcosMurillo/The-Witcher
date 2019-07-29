import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Sidebar, Logout, Content, MovieList, LoadMore, CloseModal,
} from './styles';
import { Background } from '../../styles/components';
import Logo from '../../assets/logo_dark.png';
import Player from '../../components/Player';
import movies from '../../mocks/movies';

function toggleModal() {
  return { type: 'TOGGLE_MODAL' };
}

export default function Trailers() {
  const [id, setId] = useState('');
  const [count, setcount] = useState(5);

  const visible = useSelector(state => state.isVisible);
  const dispatch = useDispatch();

  async function handleClickImage(movie) {
    await setId(movie);

    dispatch(toggleModal());
  }

  function handleLoadMore(valueCountState) {
    if (valueCountState <= movies.length) {
      setcount(valueCountState + 5);
    }
  }

  function handleCloseModal() {
    dispatch(toggleModal());
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
            .map((movie, index) => (
              <img
                key={Math.random()}
                className="trailer-card"
                onClick={() => handleClickImage(movie)}
                src={`https://i.ytimg.com/vi/${movie}/sddefault.jpg`}
                alt={`Thumbnail do ${index + 1}º trailer`}
              />
            ))
            .slice(0, count)}
          {count < movies.length && (
            <LoadMore onClick={() => handleLoadMore(count)}>LOAD MORE</LoadMore>
          )}
        </MovieList>
      </Content>

      {visible && (
        <CloseModal type="button" onClick={() => handleCloseModal()}>
          CLOSE
        </CloseModal>
      )}

      <Player id={id} />
    </Background>
  );
}
