import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
        <Html lang="en">
          <Head>
              <meta name="title" content="Niome"/>
              <meta name="description" content="Junior level Developer & Animator.
              Nodejs, Python, & Typescript as a Developer.
              After Effects, Photoshop, & Live2D as an Animator."/>

              <meta property="og:type" content="website"/>
              <meta property="og:url" content="https://niome.dev/"/>
              <meta property="og:title" content="Niome"/>
              <meta property="og:description" content="Junior level Developer & Animator.
              Nodejs, Python, & Typescript as a Developer.
              After Effects, Photoshop, & Live2D as an Animator."/>
              <meta property="og:image" content="https://niome.dev/Assets/Rie-base.png"/>
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
    );
  }
}