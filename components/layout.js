import Head from 'next/head'
import Nav from './header/nav'
import Footer from './footer'
import Sidebar from './sidebar'
import '../styles/style.scss'

function pageTitle (title) {
  const siteTitle = 'Inhji.de'
  return [title, siteTitle].join(' - ')
}

export default ({ children, title = 'Home' }) => (
  <div>
    <Head>
      <title>{pageTitle(title)}</title>
    </Head>

    <div className="wrapper">
      <Nav />

      <div className="section">
        <div className="container">
          <div className="columns">
            <main id="content" className="column is-four-fifths">
              {children}
            </main>

            <div className="column is-one-fifth">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  </div>
)
