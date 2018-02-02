import Link from 'next/link'
import dateformat from 'dateformat'

const Tags = ({ tags }) => (
  <span className="tags">
    {tags.map(tag => (
      <span>
        <span className="hash">#</span>
        <Link href={`/tag/${tag}`}>
          <a className="p-category tag">{tag}</a>
        </Link>{' '}
      </span>
    ))}

    <style jsx>{`
      .hash,
      .tag {
        color: #828282;
      }
    `}</style>
  </span>
)

const Permalink = ({ date, hashid }) => (
  <span className="permalink">
    <Link href={{ pathname: '/note', query: { hashid } }} as={`/note/${hashid}`}>
      <a className="u-url">
        <time className="dt-published time" dateTime={date}>
          {dateformat(date)}
        </time>
      </a>
    </Link>

    <style jsx>{`
      .permalink {
        margin-right: 5px;
      }

      time {
        color: #828282;
      }
    `}</style>
  </span>
)

const Author = () => <a class="p-author h-card" href="/" />

export default ({ post }) => (
  <article className="post h-entry">
    <p className="p-name e-content">{post.content}</p>
    <p className="meta">
      <Permalink date={post.createdAt} hashid={post.hashid} />
      <Tags tags={post.tags} />
      <Author />
    </p>
  </article>
)
