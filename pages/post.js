import React from 'react'
import Layout from '../components/layout'
import Post from '../components/post'
import query from '../queries/post'
import { execQuery } from '../lib/graphql'

class PostPage extends React.Component {
  static async getInitialProps ({ query: { hashid } }) {
    const { postByHashid } = await execQuery(query, { hashid })
    return { post: postByHashid }
  }

  render () {
    const { post } = this.props

    return (
      <Layout title="Post">
        <div className="h-entry">
          <div className="avatar">
            <img
              className="u-photo"
              src="/static/heidelberg-2017.png"
              alt="Jonathan Jenne's Avatar"
            />
          </div>
          <Post post={post} />
          <div className="comments" />
          <script
            src="https://schnack.inhji.de/embed.js"
            data-schnack-slug={post.hashid}
            data-schnack-target=".comments"
          />
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
