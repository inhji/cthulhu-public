import Icon from './icon'
import {
  faBandcamp,
  faGithub,
  faSteam,
  faLastfm,
  faGetPocket
} from '@fortawesome/fontawesome-free-brands'

const About = () => (
  <aside className="about">
    <div className="wrapper">
      <div className="flex">
        <img className="avatar u-photo" src="/static/me.jpeg" alt="Jonathan Jenne's Avatar" />
        <div className="description">
          <h2 className="greeting">
            Hi, I'm{' '}
            <span className="p-name">
              Jonathan<span style={{ display: 'none' }}> Jenne</span>
            </span>!
          </h2>
          <p className="p-note bio">
            I like programming, exploring cities, music and the #indieweb. Also, I want (to be) a
            cat.
          </p>
        </div>
      </div>
      <div className="social">
        <a href="https://bandcamp.com/inhji" rel="me">
          <Icon icon={faBandcamp} color="#629aa9" />Bandcamp
        </a>
        <a href="https://github.com/inhji" rel="me">
          <Icon icon={faGithub} color="#333" />Github
        </a>
        <a href="https://steamcommunity.com/id/s4itama" rel="me">
          <Icon icon={faSteam} color="#000000" />Steam
        </a>
        <a href="https://www.last.fm/user/inhji" rel="me">
          <Icon icon={faLastfm} color="#d51007" />Last.fm
        </a>
      </div>
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

      .social {
        margin-top: 20px;
      }

      .social a {
        padding-right: 5px;
        color: #000;
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
