import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${normalize()};

  html {
    line-height: 1;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
  }

  li, ul, ol, dl {
    list-style: none;
    padding: 0;
    margin: 0;
  }


  body {
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }

  [data-rsbs-overlay] {
    max-width: 480px !important;
    margin: 0 auto !important;
  }
 `;

export default GlobalStyle;