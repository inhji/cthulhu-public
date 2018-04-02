import Layout from '../components/layout'
import query from '../queries/index'
import { execQuery } from '../lib/graphql'
import Post from '../components/post'
import timeago from 'Lib/timeago'
import { faMusic } from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const Index = ({ posts, tracks: [mostRecentTrack, ...rest] }) => (
  <Layout>
    <section className="hero is-primary is-bold">
      <div className="hero-body">
        <h1 className="title">Johnnie Darko</h1>
        <div className="subtitle">
          "I think perfection is ugly. Somewhere in the things humans make, i want to see scars,
          failure, disorder, distortion." - Yohji Yamamoto
        </div>
        <div>
          <FontAwesomeIcon size="sm" icon={faMusic} /> <em>{mostRecentTrack.track}</em>
          <span> von </span>
          <em>{mostRecentTrack.artist}</em>
          <time dateTime={mostRecentTrack.listenedAt} title={mostRecentTrack.listenedAt}>
            {' '}
            {timeago(mostRecentTrack.listenedAt)}
          </time>
        </div>
      </div>
    </section>

    <div className="posts">{posts.map(post => <Post post={post} key={post.id} />)}</div>

    <style jsx>{`
      .hero {
        margin-bottom: 3rem;
      }
    `}</style>
  </Layout>
)

Index.getInitialProps = async ({ req }) => {
  return execQuery(query)
}

export default Index
