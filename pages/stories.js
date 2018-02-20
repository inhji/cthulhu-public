import Layout from '../components/layout'
import query from '../queries/stories'
import { execQuery } from '../lib/graphql'

const Stories = ({ blogPosts }) => (
  <Layout title="Geschichten">
    <h2>Geschichten</h2>

    <ul className="blog-posts">
      {blogPosts.map(post => (
        <li>
          <h3>
            <a href={`https://blog.inhji.de/${post.slug}`}>{post.title}</a>
          </h3>
          <p>{post.excerpt}</p>
        </li>
      ))}
    </ul>

    <style jsx>{`
      h2 {
        margin-top: 0;
      }

      ul.blog-posts {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
    `}</style>
  </Layout>
)

Stories.getInitialProps = async ({ req }) => {
  const { blogPosts } = await execQuery(query)
  return { blogPosts }
}

export default Stories
