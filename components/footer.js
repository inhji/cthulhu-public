import Link from 'next/link'

export default () => (
  <footer className="footer">
    <div className="container">
      <div className="content has-text-centered">
        <p>
          <span>&copy; 2018 </span>
          <Link href="/">
            <a rel="author">Jonathan Jenne</a>
          </Link>
        </p>
        <p>Live slow, die old.</p>
      </div>
    </div>
  </footer>
)
