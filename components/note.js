import Permalink from './permalink'
import Tags from './tags'
import Author from './author'

const Note = ({ note: { content, hashid, tags, createdAt, type } }) => (
  <article className="post note h-entry hentry">
    <p className="p-name e-content">{content}</p>
    <p className="meta">
      <Permalink date={createdAt} hashid={hashid} type={type} />
      <Tags tags={tags} />
      <Author />
    </p>
  </article>
)

export default Note
