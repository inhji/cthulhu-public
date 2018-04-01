import Link from 'next/link'

const Nav = () => (
  <nav className="navbar is-dark">
    <div className="container">
      <div className="navbar-brand">
        <Link href="/">
          <a className="navbar-item">
            <img src="/assets/faviconv2-inverse.png" />
          </a>
        </Link>

        <div className="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <Link href="https://blog.inhji.de">
            <a className="navbar-item">Blog</a>
          </Link>
        </div>
      </div>
    </div>
  </nav>
)

export default Nav
