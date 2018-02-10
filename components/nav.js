import Link from 'next/link'

const Nav = () => (
  <nav className="site-nav">
    <ul>
      <li>
        <Link href="/">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/stories">
          <a>Stories</a>
        </Link>
      </li>
    </ul>

    <style jsx>{`
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
  </nav>
)

export default Nav
