import Link from 'next/link'

const Tags = ({ tags }) => (
  <span className="tags">
    {tags.map(tag => (
      <span key={tag}>
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

export default Tags
