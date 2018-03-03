import Layout from '../components/layout'
import query from '../queries/index'
import { execQuery } from '../lib/graphql'
import Post from '../components/post'

const Index = ({ posts, tracks }) => (
  <Layout tracks={tracks}>
    <data className="p-name" value="" />
    <div className="posts">{posts.map(post => <Post post={post} key={post.id} />)}</div>
  </Layout>
)

Index.getInitialProps = async ({ req }) => {
  const { posts, tracks } = await execQuery(query)
  return { posts, tracks }
}

export default Index
