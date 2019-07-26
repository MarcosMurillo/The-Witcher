import { createGlobalStyle } from 'styled-components';

// import 'rc-slider/assets/index.css';

const GlobalStyle = createGlobalStyle`
* {
  margin:0;
  padding:0;
  box-sizing:border-box;
}

html,body, #root {
  height:100%;
}

body {
  background: #181818;
  background-image:("../assets/background.png");
  background-repeat:no-repeat;
  text-rendering:optimizeLegibility !important;
  -webkit-font-smoothing:antialised !important;
  font-family: 'Montserrat',sans-serif;
  color:#fafafa
}
`;

export default GlobalStyle;
