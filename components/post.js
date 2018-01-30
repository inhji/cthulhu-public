import Link from 'next/link'

export default ({ post }) => (
  <article className="post h-entry">
    <p className="p-name e-content">{post.content}</p>
    <p className="meta">
      <Link
        href={{ pathname: '/note', query: { hashid: post.hashid } }}
        as={`/note/${post.hashid}`}
      >
        <a>
          <time className="dt-published time">{post.createdAt}</time>
        </a>
      </Link>
    </p>

    <style jsx>{`
      time {
        color: #828282;
      }
    `}</style>
  </article>
)
