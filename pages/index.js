import Layout from '../components/layout'
import query from '../queries/index'
import { execQuery } from '../lib/graphql'

const Index = ({ posts, blogPosts }) => (
  <Layout title="Home">
    {/* <strong>Neuste Geschichte: </strong>
    <span>{blogPosts.filter(p => p.featured)[0].title}</span> */}
  </Layout>
)

Index.getInitialProps = async ({ req }) => {
  const { posts, blogPosts } = await execQuery(query)
  return { posts, blogPosts }
}

export default Index
