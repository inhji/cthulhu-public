import Link from 'next/link'

const Title = ({ title, url }) =>
  url ? (
    <h2 className="p-name">
      <Link href={url}>
        <a>{title}</a>
      </Link>
    </h2>
  ) : (
    <h2 className="p-name">{title}</h2>
  )

export default Title
