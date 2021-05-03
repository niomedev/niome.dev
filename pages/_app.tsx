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
    * {
      background: #000 !important;
      color: #0f0 !important;
      outline: solid #f00 1px !important;
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