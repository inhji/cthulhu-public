import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'
import query from '../queries/header'
import Header from '../components/header'
import { execQuery } from '../lib/graphql'

export default class MyDocument extends Document {
  static async getInitialProps ({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    const { tracks } = await execQuery(query)
    return { html, head, errorHtml, chunks, styles, tracks }
  }

  render () {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="me" href="https://github.com/inhji" />
          <link
            rel="authorization_endpoint"
            href="https://indieauth.com/auth"
          />
          <link
            rel="token_endpoint"
            href="https://tokens.indieauth.com/token"
          />
          <link rel="micropub" href="https://api.inhji.de/micropub" />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300|Playfair+Display"
            rel="stylesheet"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `__TRACKS__ = ${JSON.stringify(this.props.tracks)}`
            }}
          />
        </Head>
        <body>
          <header id="site-header">
            <div className="wrapper">
              <Header tracks={this.props.tracks} />
            </div>
          </header>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
