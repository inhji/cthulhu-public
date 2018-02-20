import React from 'react'
import { request } from 'graphql-request'
import Layout from '../components/layout'
import Post from '../components/post'

const query = /* GraphQL */ `
  query post($hashid: ID!) {
    postByHashid(hashid: $hashid) {
      ... on Note {
        hashid
        content
        type
        tags
        createdAt
        author {
          id
        }
      }

      ... on Article {
        hashid
        title
        content
        createdAt
        author {
          id
        }
      }

      ... on Bookmark {
        hashid
        title
        content
        url
        tags
        type
        createdAt
        author {
          id
        }
      }
    }
  }
`

class PostPage extends React.Component {
  static async getInitialProps ({ query: { hashid } }) {
    const { postByHashid } = await request('https://api.inhji.de/graphql', query, { hashid })
    return { post: postByHashid }
  }

  render () {
    const { post } = this.props

    return (
      <Layout>
        <Post post={post} />
      </Layout>
    )
  }
}

export default PostPage
