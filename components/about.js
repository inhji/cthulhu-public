import Social from './social'

const About = () => (
  <aside className="about h-card">
    <div className="wrapper">
      <div className="flex">
        <img className="avatar u-photo" src="/static/me.jpeg" alt="Jonathan Jenne's Avatar" />
        <div className="description">
          <h2 className="greeting">
            Hi, I'm{' '}
            <span className="p-name">
              Jonathan<span style={{ display: 'none' }}> Jenne</span>
            </span>!
            <a href="/" className="u-url u-uid" />
          </h2>
          <p className="p-note bio">
            I like programming, exploring cities, music and the #indieweb. Also, I want (to be) a
            cat.
          </p>
        </div>
      </div>
      <Social />
    </div>

    <style jsx>{`
      aside.about {
        padding: 30px 0;
        border-bottom: 1px solid #e8e8e8;
        overflow: auto;
      }

      h2.greeting {
        margin-top: 0;
      }

      .flex {
        display: flex;
        flex-wrap: wrap;
      }

      .avatar {
        width: 100px;
        height: 100px;
        border-radius: 5px;
      }

      @media (min-width: 64em) {
        .flex {
          flex-wrap: nowrap;
        }

        .avatar {
          margin-right: 10px;
        }
      }
    `}</style>
  </aside>
)

export default About
