import { createGlobalStyle } from 'styled-components';
import Bolton from '../assets/fonts/Bolton.ttf';
import BoltonLight from '../assets/fonts/BoltonLight.ttf';
import BoltonTitling from '../assets/fonts/BoltonTitling.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Bolton';
    src: url(${Bolton});
    font-style: normal;
  }
  @font-face {
    font-family: 'BoltonLight';
    src: url(${BoltonLight});
    font-style: normal;
  }
  @font-face {
    font-family: 'BoltonTitling';
    src: url(${BoltonTitling});
    font-style: normal;
  }
  html{
    font-family: 'BoltonLight';
    color: var(--raisin-black);
  }
  *{
    font-family: 'BoltonLight';
    color: var(--white);
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'BoltonLight';
    color: var(--raisin-black);
  }
`;

export default Typography;
