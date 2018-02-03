import { request } from 'graphql-request'
import Layout from '../components/layout'
import Post from '../components/post'

const Index = ({ posts }) => (
  <Layout title="Home">{posts.map(post => <Post key={post.hashid} post={post} />)}</Layout>
)

const query = /* GraphQL */ `
  query posts {
    posts {
      ... on Note {
        id
        content
        hashid
        tags
        type
        createdAt
        author {
          name
        }
      }

      ... on Bookmark {
        id
        url
        title
        content
        hashid
        tags
        type
        createdAt
        author {
          name
        }
      }
    }
  }
`

Index.getInitialProps = async ({ req }) => {
  const { posts } = await request('https://api.inhji.de/graphql', query)
  return { posts }
}

export default Index
