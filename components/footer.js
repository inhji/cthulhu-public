import Link from 'next/link'

export default () => (
  <footer>
    <div className="footer">
      <div className="wrapper">
        <p>
          <span>Created in 2018 by </span>
          <Link href="https://inhji.de">
            <a className="h-card" rel="author">
              Jonathan Jenne
            </a>
          </Link>
        </p>
        <p className="p-note bio">
          I like <a href="https://github.com/inhji">programming</a>, exploring cities,{' '}
          <a href="https://www.last.fm/user/inhji">music</a> and the{' '}
          <a href="https://indieweb.org/">#indieweb</a>. Also, I want (to be) a cat.
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
      }
    `}</style>
  </footer>
)
