import Link from 'next/link'
import { faBandcamp, faGithub, faSteam, faLastfmSquare } from '@fortawesome/fontawesome-free-brands'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default () => (
  <aside id="sidebar">
    <div className="avatar-wrapper">
      <img src="/assets/heidelberg-2017.png" className="avatar" />
      <span>dat bin ich</span>
    </div>

    <div className="menu">
      <p className="menu-label">sonstwo</p>
      <ul className="menu-list">
        <li>
          <Link href="https://bandcamp.com/inhji">
            <a>
              <FontAwesomeIcon size="lg" icon={faBandcamp} /> Bandcamp
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/inhji">
            <a>
              <FontAwesomeIcon size="lg" icon={faGithub} /> Github
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://steamcommunity.com/id/s4itama">
            <a>
              <FontAwesomeIcon size="lg" icon={faSteam} /> Steam
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.last.fm/user/inhji">
            <a>
              <FontAwesomeIcon size="lg" icon={faLastfmSquare} /> Last.fm
            </a>
          </Link>
        </li>
      </ul>
    </div>

    <style jsx>{`
      .avatar-wrapper {
        padding: 1.2rem 1.2rem 2rem 1.2rem;
        margin-bottom: 2rem;
        background: whitesmoke;
      }
    `}</style>
  </aside>
)
