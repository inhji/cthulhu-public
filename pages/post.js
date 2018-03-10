import React from 'react'
import Layout from '../components/layout'
import Post from '../components/post'
import query from '../queries/post'
import { execQuery } from '../lib/graphql'

class PostPage extends React.Component {
  static async getInitialProps ({ query: { hashid } }) {
    const { postByHashid } = await execQuery(query, { hashid })
    const dev = process.env.NODE_ENV !== 'production'

    return { post: postByHashid, dev }
  }

  componentDidMount () {
    // FIXME: Stupid hack to prevent "Illegal document.domain value" in dev mode
    // This results in comments not being loaded when in dev mode
    if (this.props.dev) {
      return
    }

    /* eslint-disable no-new, no-undef */
    new Schnack({
      target: '.comments',
      slug: this.props.post.hashid,
      host: 'https://schnack.inhji.de'
    })
    /* eslint-enable no-new, no-undef */
  }

  render () {
    const { post } = this.props

    return (
      <Layout title="Post">
        <div className="h-entry">
          <Post post={post} />

          <div className="comment-wrapper">
            <h3>Kommentare</h3>
            <div className="comments" />
          </div>
        </div>
      </Layout>
    )
  }
}

export default PostPage
