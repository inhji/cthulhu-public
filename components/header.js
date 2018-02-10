import Link from 'next/link'
import Nav from './nav'

export default () => (
  <header>
    <div className="header">
      <div className="wrapper">
        <Link href="/">
          <a className="site-title">Inhji.de</a>
        </Link>

        <Nav />
      </div>
    </div>

    <style jsx>{`
      .header {
        border-top: 5px solid #d34;
        border-bottom: 1px solid #e8e8e8;
        min-height: 56px;
      }

      .site-title {
        color: #333;
        font-size: 26px;
        line-height: 56px;
        letter-spacing: -1px;
        margin-bottom: 0;
        float: left;
      }
    `}</style>
  </header>
)
