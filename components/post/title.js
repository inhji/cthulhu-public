import Link from 'next/link'

/*
  Render the post title.
  If an url exists, link it.
  If no url nor title exists, do nothing
 */
const Title = ({ title, url }) =>
  url ? (
    <h2 className="p-name">
      <Link href={url}>
        <a className="u-bookmark-of h-cite">{title}</a>
      </Link>
    </h2>
  ) : title ? (
    <h2 className="p-name">{title}</h2>
  ) : null

export default Title
