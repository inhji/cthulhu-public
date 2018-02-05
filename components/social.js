import Icon from './icon'
import {
  faBandcamp,
  faGithub,
  faSteam,
  faLastfm,
  faGetPocket
} from '@fortawesome/fontawesome-free-brands'
import { faBook } from '@fortawesome/fontawesome-free-solid'

export default () => (
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
    <a href="https://blog.inhji.de" rel="me">
      <Icon icon={faBook} color="#212425" />Blog
    </a>

    <style jsx>{`
      .social {
        margin-top: 20px;
      }

      .social a {
        padding-right: 5px;
        color: #000;
      }
    `}</style>
  </div>
)
