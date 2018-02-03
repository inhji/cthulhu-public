import Permalink from './permalink'
import Tags from './tags'
import Author from './author'
import { faStickyNote } from '@fortawesome/fontawesome-free-solid'
import Icon from './icon'

const Note = ({ note: { content, hashid, tags, createdAt, type } }) => (
  <article className="post note h-entry">
    <p className="p-name e-content">{content}</p>
    <p className="meta">
      <Icon icon={faStickyNote} color="#828282" />
      <Permalink date={createdAt} hashid={hashid} type={type} />
      <Tags tags={tags} />
      <Author />
    </p>
  </article>
)

export default Note
