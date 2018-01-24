import Head from 'next/head'
import Footer from './footer'
import Header from './header'

function pageTitle(title) {
  const siteTitle = 'Inhji.de'
  return [title, siteTitle].join(' - ')
}

export default ({ children, title = 'Home' }) => (
  <div>
    <Head>
      <title>{pageTitle(title)}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="me" href="https://github.com/inhji" />
    </Head>

    <Header />

    <main id="site-content">
      <div className="wrapper">{children}</div>
    </main>

    <Footer />

    <style global jsx>{`
      body {
        margin: 0;
        padding: 0;
        font-size: 16px;
        font-family: Helvetica, Arial, sans-serif;
      }

      a {
        text-decoration: none;
        color: #d34;
      }
      a:hover {
        color: #111111;
        text-decoration: underline;
      }

      .wrapper {
        max-width: 800px;
        margin: 0 auto;
      }

      #site-content {
        padding: 30px 0;
      }
    `}</style>
  </div>
)
