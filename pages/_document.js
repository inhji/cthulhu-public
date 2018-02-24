import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static async getInitialProps ({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render () {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="me" href="https://github.com/inhji" />

          <link rel="authorization_endpoint" href="https://indieauth.com/auth" />
          <link rel="token_endpoint" href="https://tokens.indieauth.com/token" />

          <link rel="micropub" href="https://api.inhji.de/micropub" />

          <link rel="pingback" href="https://webmention.io/inhji.de/xmlrpc" />
          <link rel="webmention" href="https://webmention.io/inhji.de/webmention" />

          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300|Playfair+Display"
            rel="stylesheet"
          />
        </Head>
        <body className="h-feed">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
