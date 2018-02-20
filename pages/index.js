import Layout from '../components/layout'
import query from '../queries/index'
import { execQuery } from '../lib/graphql'
import Post from '../components/post'

const Index = ({ posts }) => (
  <Layout title="Home">
    <div className="posts">{posts.map(post => <Post post={post} />)}</div>
  </Layout>
)

Index.getInitialProps = async ({ req }) => {
  const { posts } = await execQuery(query)
  return { posts }
}

export default Index
