import { request } from 'graphql-request'
import Layout from '../components/layout'
import Post from '../components/post'
import query from '../queries/index'

const Index = ({ posts }) => (
  <Layout title="Home">
    {posts.map(post => <Post key={post.hashid} post={post} />)}
  </Layout>
)

Index.getInitialProps = async ({ req }) => {
  const { posts } = await request('https://api.inhji.de/graphql', query)
  return { posts }
}

export default Index
