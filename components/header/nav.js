import Link from 'next/link'

const Nav = () => (
  <nav>
    <ul className="site-nav">
      <li>
        <Link href="/">
          <a className="u-url u-uid">
            <strong>Inhji.de</strong>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/geschichten">
          <a>Geschichten</a>
        </Link>
      </li>
    </ul>
    <div className="clear" />

    <style jsx>{`
      ul {
        list-style-type: none;
        margin-left: 0;
        padding-left: 0;
        height: 30px;
      }

      li {
        float: left;
        margin-right: 10px;
      }
    `}</style>
  </nav>
)

export default Nav
