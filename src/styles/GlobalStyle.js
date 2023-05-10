import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --white: #FFFFFF;
    --linen: #F3E6DD;
    --raisin-black: #241D1F;
    --sage: #B1BE90;
    --cambridge-blue: #9AC3AA;
    --beaver: #BA8C75;
    --blush: #CD6C79;

  html{
    font-size: 40px;
    font-family: 'BoltonLight';
    background-color: var(--beaver);
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
    color: var(--blush);
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--sage);
    .scroll-content {
      background-color: var(--beaver);
    }
    .scrollbar-track.scrollbar-track-y {
      background: var(--blush);
      .scrollbar-thumb-y {
        background: var(--sage);
      }
    }
  }
`;

export default GlobalStyles;
