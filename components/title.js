import Link from 'next/link'

const Title = ({ title, url }) =>
  url ? (
    <h2 className="p-name">
      <Link href={url}>
        <a className="u-bookmark-of h-cite">{title}</a>
      </Link>
    </h2>
  ) : (
    <h2 className="p-name">{title}</h2>
  )

export default Title
