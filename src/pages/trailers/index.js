import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Sidebar,
  Logout,
  Content,
  MovieList,
  LoadMore,
  CloseModal,
  TrailersButton,
  Message,
  YouLink,
} from './styles';
import { Background } from '../../styles/components';
import Logo from '../../assets/logo_dark.png';
import Player from '../../components/Player';
import movies from '../../mocks/movies';
import { logout } from '../../auth';

function toggleModal() {
  return { type: 'TOGGLE_MODAL' };
}

export default function Trailers({ history }) {
  const [id, setId] = useState('');
  const [count, setcount] = useState(6);
  const [msg, setMsg] = useState(false);

  const visible = useSelector(state => state.isVisible);
  const dispatch = useDispatch();

  async function handleClickImage(movie) {
    await setId(movie);

    dispatch(toggleModal());
  }

  function handleLoadMore(valueCountState) {
    if (valueCountState <= movies.length) {
      setcount(valueCountState + 6);
    }
  }

  function handleCloseModal() {
    dispatch(toggleModal());
  }

  function handleClickTrailers() {
    setMsg(true);
    setTimeout(() => {
      setMsg(false);
    }, 2000);
  }

  function handleClickLogout() {
    logout();
    return history.push('/');
  }

  return (
    <Background>
      <Sidebar>
        <img src={Logo} alt="logo" />
        <TrailersButton onClick={() => handleClickTrailers()}>TRAILERS</TrailersButton>
        <Message hidden={!msg}>Esta é a página de trailers clique em um para assistir.</Message>
        <Logout onClick={() => handleClickLogout()}>LOGOUT</Logout>
        <YouLink
          href="https://www.youtube.com/playlist?list=PL6t93nUFQQ1ZiXMfhPyhjb0PX3LgEVMcF"
          target="_blank"
        >
          Acessar Playlist no Youtube
        </YouLink>
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
