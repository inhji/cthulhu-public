import Permalink from './permalink'
import Tags from './tags'
import Author from './author'
import Title from './title'
import Content from './content'

export default ({ post: { contentHtml, hashid, tags, createdAt, type, title, url } }) => (
  <article className="post h-entry">
    <Title title={title} url={url} />
    <Content type={type} content={contentHtml} />
    <p className="meta">
      <Permalink date={createdAt} hashid={hashid} type={type} />
      <Tags tags={tags} />
      <Author />
    </p>
    <style jsx>{`
      article.post {
        margin-bottom: 5rem;
      }
    `}</style>
  </article>
)
