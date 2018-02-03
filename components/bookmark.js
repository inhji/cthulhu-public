import Permalink from './permalink'
import Tags from './tags'
import Author from './author'
import Title from './title'
import { faBookmark } from '@fortawesome/fontawesome-free-solid'
import Icon from './icon'

const Note = ({ bookmark: { url, title, content, hashid, tags, createdAt, type } }) => (
  <article className="post bookmark h-entry">
    <Title title={title} url={url} />
    <p className="e-content">{content}</p>
    <p className="meta">
      <Icon icon={faBookmark} color="#828282" />
      <Permalink date={createdAt} hashid={hashid} type={type} />
      <Tags tags={tags} />
      <Author />
    </p>
  </article>
)

export default Note