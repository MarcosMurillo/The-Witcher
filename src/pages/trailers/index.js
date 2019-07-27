import React from 'react';
import YouTube from 'react-youtube';
import {
  Sidebar, Logout, Content, MovieList,
} from './styles';
import { Background } from '../../styles/components';
import Logo from '../../assets/logo_dark.png';

function Trailers() {
  const opts = {
    height: '271', // 360 // 130 // 65
    width: '480', // 640 //320 // 160
    border: '#fff',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      showinfo: 0,
    },
  };

  const videos = [
    'cCXgQ7-Y9ps',
    '2T_DG1xnVPg',
    'aIbPBnvGSnc',
    '7T91vrI8hGA',
    '1ke3zayKKm8',
    'jd8YQ8pu908',
    'mS7O2V0xLqA',
    '_RDeZGEOSV8',
    '9aG3_klrV_4',
    'HcBQrhyBdlU',
    '4VnYYW-rTfw',
    'AB25zTR8sCw',
    'qjRQoz8XyHk',
    'hiKo8U_6T9Y',
    'l7X__uWBxI0',
    'DYUUYWdza1s',
    'z6dIH5uJJhI',
    'rt3bjsyYN3A',
    'Ua56VmcWnXY',
    'F-SOv4lJuCY',
    'pWPrna3tlH0',
    'zLOW8y6vh3U',
    's_Dfo6RO028',
    'W26bR_jtv9M',
    'vsSos0Co4W4',
    'JqUV2KYF7iU',
    'ce_yGDzP7DQ',
  ];
  return (
    <Background>
      <Sidebar>
        <img src={Logo} alt="logo" />
        <Logout to="/">LOGOUT</Logout>
      </Sidebar>

      <Content>
        <MovieList>
          {videos.map((video, index) => (
            <img
              key={Math.random()}
              className="trailer-card"
              onClick={() => alert('Hello Img')}
              src={`https://i.ytimg.com/vi/${video}/sddefault.jpg`}
              alt={`Thumbnail do ${index + 1}º vídeo`}
            />
          ))}
        </MovieList>
      </Content>
    </Background>
  );
}

export default Trailers;
