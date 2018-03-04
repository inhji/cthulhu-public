import { faBandcamp, faGithub, faSteam, faLastfmSquare } from '@fortawesome/fontawesome-free-brands'
import { faBook } from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default () => (
  <div className="social-links">
    <a href="https://bandcamp.com/inhji" rel="me" title="Jonathan bei Bandcamp">
      <FontAwesomeIcon size="lg" icon={faBandcamp} />
    </a>
    <a href="https://github.com/inhji" rel="me" title="Jonathan bei Github">
      <FontAwesomeIcon size="lg" icon={faGithub} />
    </a>
    <a href="https://steamcommunity.com/id/s4itama" rel="me" title="Jonathan bei Steam">
      <FontAwesomeIcon size="lg" icon={faSteam} />
    </a>
    <a href="https://www.last.fm/user/inhji" rel="me" title="Jonathan bei Last.fm">
      <FontAwesomeIcon size="lg" icon={faLastfmSquare} />
    </a>
    <a href="https://blog.inhji.de" rel="me" title="Jonathans Blog">
      <FontAwesomeIcon size="lg" icon={faBook} />
    </a>

    <style jsx>{`
      .social-links {
        display: flex;
        justify-content: space-between;
      }
    `}</style>
  </div>
)
