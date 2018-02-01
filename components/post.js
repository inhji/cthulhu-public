import Link from 'next/link'
import dateformat from 'dateformat'

export default ({ post }) => (
  <article className="post h-entry">
    <p className="p-name e-content">{post.content}</p>
    <p className="meta">
      <span className="tags">
        {post.tags.map(tag => (
          <span>
            #<a href={`/tag/${tag}`}>{tag}</a>
          </span>
        ))}
      </span>
      <Link
        href={{ pathname: '/note', query: { hashid: post.hashid } }}
        as={`/note/${post.hashid}`}
      >
        <a className="u-url">
          <time className="dt-published time" dateTime={post.createdAt}>
            {dateformat(post.createdAt)}
          </time>
        </a>
      </Link>
      <a u-author href="/" />
    </p>

    <style jsx>{`
      time {
        color: #828282;
      }
    `}</style>
  </article>
)
