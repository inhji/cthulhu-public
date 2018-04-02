import { Component } from 'react'
import Link from 'next/link'

class Nav extends Component {
  state = { isOpen: false }

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render () {
    return (
      <nav className="navbar is-dark">
        <div className="container">
          <div className="navbar-brand">
            <Link href="/">
              <a className="navbar-item">
                <img src="/assets/faviconv2-inverse.png" />
              </a>
            </Link>

            <div
              className={this.state.isOpen ? 'navbar-burger is-active' : 'navbar-burger'}
              onClick={this.toggleMenu}
            >
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className={this.state.isOpen ? 'navbar-menu is-active' : 'navbar-menu'}>
            <div className="navbar-start">
              <Link href="https://blog.inhji.de">
                <a className="navbar-item">Blog</a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav
