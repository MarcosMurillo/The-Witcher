import React, { useState } from 'react';
import {
  Sidebar, Logout, Content, MovieList, LoadMore,
} from './styles';
import { Background } from '../../styles/components';
import Logo from '../../assets/logo_dark.png';
import Player from '../../components/Player';
import movies from '../../mocks/movies';

function Trailers() {
  const [id, setId] = useState('');
  const [visible, setVisible] = useState(false);
  const [count, setcount] = useState(5);

  async function HandleClickImage(movie) {
    setId(movie);
    setVisible(true);
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
            .map((movie, index) => (
              <img
                key={Math.random()}
                className="trailer-card"
                onClick={() => HandleClickImage(movie)}
                src={`https://i.ytimg.com/vi/${movie}/sddefault.jpg`}
                alt={`Thumbnail do ${index + 1}º trailer`}
              />
            ))
            .slice(0, count)}
          {count < movies.length && (
            <LoadMore onClick={() => HandleClickButton(count)}>LOAD MORE</LoadMore>
          )}
        </MovieList>
      </Content>
      <Player id={id} isVisible={visible} />
    </Background>
  );
}

export default Trailers;
