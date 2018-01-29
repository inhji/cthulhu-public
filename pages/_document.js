import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="me" href="https://github.com/inhji" />
          <link rel="authorization_endpoint" href="https://indieauth.com/auth" />
          <link rel="token_endpoint" href="https://tokens.indieauth.com/token" />
          <link rel="micropub" href="https://api.inhji.de/micropub" />
          <title>Inhji.de</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
