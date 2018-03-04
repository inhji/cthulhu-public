import Permalink from './permalink'
import Tags from './tags'
import Author from './author'
import Title from './title'
import Content from './content'

export default ({ post: { content, hashid, tags, createdAt, type, title, url } }) => (
  <article className="post h-entry">
    <Title title={title} url={url} />
    <Content type={type} content={content} />
    <p className="meta">
      <Permalink date={createdAt} hashid={hashid} type={type} />
      <Tags tags={tags} />
      <Author />
    </p>
  </article>
)
