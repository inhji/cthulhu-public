import Nav from './nav'
import timeago from '../../lib/timeago'
import AboutTags from './about_tags'
import SocialLinks from './social_links'

const Header = ({ tracks: [mostRecentTrack, ...rest] }) => (
  <header>
    <div className="row">
      <Nav />
    </div>
    <div className="row">
      <div className="avatar small">
        <img className="u-photo" src="/assets/heidelberg-2017.png" alt="Jonathan Jenne's Avatar" />
      </div>
      <div className="about">
        <h1 className="p-name">Jonathan Jenne</h1>
        <div className="p-note">
          <AboutTags />
        </div>
      </div>
    </div>
    <div className="row">
      <div className="small">
        <SocialLinks />
      </div>
      {mostRecentTrack && (
        <div className="listening-to">
          Zuletzt gehört: <em>{mostRecentTrack.track}</em>
          <span> von </span>
          <em>{mostRecentTrack.artist}</em>
          <time dateTime={mostRecentTrack.listenedAt} title={mostRecentTrack.listenedAt}>
            {' '}
            {timeago(mostRecentTrack.listenedAt)}
          </time>
        </div>
      )}
    </div>

    <style>{`
      @media all and (max-width: 699px) {
        .row {
          flex-wrap: wrap;
        }
      }

      .small, .avatar img {
        width: 150px;
        margin-right: 10px;
        border-radius: 5px;
      }

      h1 {
        font-weight: 100;
        font-size: 2rem;
        margin-top: 0;
        margin-bottom: 10px;
      }
    `}</style>
  </header>
)

export default Header
