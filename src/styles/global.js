import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

html, body, #root {
  height:100%;
}

body {
  background: #181818;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialised !important;
  font-family: 'Montserrat',sans-serif;
  color: #fafafa;

  .fade-out {
    opacity: 0;
    width: 0;
    height: 0;
    transition: width 0.5s 0.5s, height 0.5s 0.5s, opacity 0.5s;
  }
  .fade-in{
    opacity:1;
    width:100px;
    height:100px;
    transition: width 0.5s, height 0.5s, opacity 0.5s 0.5s;
}
}
`;

export default GlobalStyle;
