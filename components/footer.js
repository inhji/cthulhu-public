import Link from 'next/link'

export default () => (
  <footer>
    <div className="footer">
      <div className="wrapper">
        <p>
          <span>Created in 2018 by </span>
          <Link href="https://inhji.de">
            <a rel="author">Jonathan Jenne</a>
          </Link>
        </p>
      </div>
    </div>

    <style jsx>{`
      .footer {
        color: #828282;
        padding: 30px 0;
        border-top: 1px solid #e8e8e8;
      }

      .bio a {
        color: #828282;
        text-decoration: underline;
      }
    `}</style>
  </footer>
)
