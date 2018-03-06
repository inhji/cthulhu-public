import React from 'react'
import Layout from '../components/layout'
import Post from '../components/post'
import query from '../queries/post'
import { execQuery } from '../lib/graphql'

const Comments = () => (
  <div className="comment-wrapper">
    <h3>Kommentare</h3>
    <div className="comments" />
    <style jsx>{`
      .schnack-form {
        margin-top: 20px;
      }

      .schnack-body {
        font-size: 100%;
        width: 100%;
      }

      .schnack-comments {
        margin: 0;
        padding: 0;
      }

      .schnack-date a {
        color: #828282;
      }

      .schnack-date {
        float: right;
      }
    `}</style>
  </div>
)

class PostPage extends React.Component {
  static async getInitialProps ({ query: { hashid } }) {
    const { postByHashid } = await execQuery(query, { hashid })
    return { post: postByHashid }
  }

  componentDidMount () {
    new Schnack({
      target: '.comments',
      slug: this.props.post.hashid,
      host: 'https://schnack.inhji.de'
    })
  }

  render () {
    const { post } = this.props

    return (
      <Layout title="Post">
        <div className="h-entry">
          <div className="avatar">
            <img
              className="u-photo"
              src="/assets/heidelberg-2017.png"
              alt="Jonathan Jenne's Avatar"
            />
          </div>
          <Post post={post} />
          <Comments hashid={post.hashid} />
        </div>
        <style jsx>{`
          .avatar {
            float: left;
          }
          .avatar img {
            border-radius: 5px;
            width: 75px;
            margin-right: 20px;
          }
        `}</style>
      </Layout>
    )
  }
}

export default PostPage
