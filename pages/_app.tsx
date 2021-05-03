import { AppProps } from 'next/app';
import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalReset = createGlobalStyle`
    @font-face {
      font-family: 'Chlakh Regular';
      src: url('/Font/Chlakh Regular.ttf') format('truetype');
      font-style: normal;
      font-display: auto;
    }
    body {
      margin: 0;
      font-family: 'Chlakh Regular';
      overflow-x: hidden;
    }
    ::-webkit-scrollbar {
      display: none;
    }
    div{
      white-space: pre-wrap;
    }
    html {
      scroll-behavior: smooth;
    }
    button{
      font-family: 'Chlakh Regular';
    }
`;

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
    <GlobalReset />
  </>
);

export default App;