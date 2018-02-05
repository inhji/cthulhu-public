import Link from 'next/link'

export default () => (
  <header>
    <div className="header">
      <div className="wrapper">
        <Link href="/">
          <a className="site-title">Inhji.de</a>
        </Link>

        <nav className="site-nav">
          <ul>
            <li>
              <Link href="/">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </nav>
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

      .site-nav {
        float: right;
      }

      .site-nav li {
        list-style-type: none;
        float: right;
        margin-left: 10px;
      }

      .site-nav li a {
        line-height: 1.5;
      }
    `}</style>
  </header>
)
