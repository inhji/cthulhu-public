import {
  faBandcamp,
  faGithub,
  faSteam,
  faLastfmSquare
} from '@fortawesome/fontawesome-free-brands'
import { faBook } from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const Header = ({ tracks: [mostRecentTrack, ...rest] }) => (
  <div className="h-card">
    <div className="row">
      <div className="avatar small">
        <img
          className="u-photo"
          src="/static/heidelberg-2017.png"
          alt="Jonathan Jenne's Avatar"
        />
      </div>
      <div className="about">
        <h1>
          <span className="p-name">Jonathan Jenne</span>
          <a href="/" rel="author" className="u-url u-uid" />
        </h1>
        <div className="p-note tags">
          {[
            'achtsamkeit',
            'angst',
            'bücher',
            'depressionen',
            'geschichten',
            'hochsensibilität',
            'kindsein',
            'musik',
            'melancholie',
            'suche',
            'sucht',
            'tagträume',
            'verständnis',
            'videospiele',
            'zufriedenheit',
            'zweifel'
          ].map(t => (
            <span className="tag" key={t}>
              <span className="hash">#</span>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
    <div className="row">
      <div className="social-links small">
        <a
          href="https://bandcamp.com/inhji"
          rel="me"
          title="Jonathan bei Bandcamp"
        >
          <FontAwesomeIcon size="lg" icon={faBandcamp} />
        </a>
        <a href="https://github.com/inhji" rel="me" title="Jonathan bei Github">
          <FontAwesomeIcon size="lg" icon={faGithub} />
        </a>
        <a
          href="https://steamcommunity.com/id/s4itama"
          rel="me"
          title="Jonathan bei Steam"
        >
          <FontAwesomeIcon size="lg" icon={faSteam} />
        </a>
        <a
          href="https://www.last.fm/user/inhji"
          rel="me"
          title="Jonathan bei Last.fm"
        >
          <FontAwesomeIcon size="lg" icon={faLastfmSquare} />
        </a>
        <a href="https://blog.inhji.de" rel="me" title="Jonathans Blog">
          <FontAwesomeIcon size="lg" icon={faBook} />
        </a>
      </div>
      <div className="listening-to">
        Hört gerade: <em>{mostRecentTrack.track}</em>
        <span> von </span>
        <em>{mostRecentTrack.artist}</em>
      </div>
    </div>

    <style>{`
      .row {
        display: flex;
        margin-bottom: 5px;
      }

      .small, .avatar img {
        width: 150px;
        margin-right: 10px;
        border-radius: 5px;
      }

      .about h1 {
        font-weight: 100;
        font-size: 2rem;
        margin-top: 0;
        margin-bottom: 10px;
      }

      .tag {
        display: inline-block;
        margin-right: 5px;
        color: #333;
      }

      .tag .hash {
        color: #888;
      }

      .social-links {
        display: flex;
        justify-content: space-between;
      }
    `}</style>
  </div>
)

export default Header
