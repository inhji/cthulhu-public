import Head from 'next/head'
import Header from './header'
import Nav from './header/nav'
import Footer from './footer'
import '../styles/style.scss'

function pageTitle (title) {
  const siteTitle = 'Inhji.de'
  return [title, siteTitle].join(' - ')
}

export default ({ children, title = 'Home', tracks = [] }) => (
  <div>
    <Head>
      <title>{pageTitle(title)}</title>
    </Head>

    <div className="wrapper">
      {tracks.length > 0 ? (
        <div>
          <Header tracks={tracks} />
        </div>
      ) : (
        <Nav />
      )}
    </div>

    <div className="line" />

    <main id="site-content">
      <div className="wrapper">{children}</div>
    </main>

    <div className="line" />

    <div className="wrapper">
      <Footer />
    </div>
  </div>
)
