import Link from 'next/link'

export default () => (
  <footer>
    <div className="footer">
      <p>
        <span>&copy; 2018 </span>
        <Link href="/">
          <a rel="author">Jonathan Jenne</a>
        </Link>
      </p>
    </div>

    <style jsx>{`
      .footer {
        color: #828282;
        padding-bottom: 30px;
      }

      .a {
        color: #828282;
        text-decoration: underline;
      }
    `}</style>
  </footer>
)
