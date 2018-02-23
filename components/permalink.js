import Link from 'next/link'
import dateformat from 'dateformat'

const Permalink = ({ date, hashid, type }) => (
  <span className="permalink">
    <Link href={{ pathname: `/post`, query: { hashid } }} as={`/${type.toLowerCase()}/${hashid}`}>
      <a className="u-url">
        <time className="dt-published time" dateTime={date}>
          {dateformat(date, 'd.mm.yyyy')}
        </time>
      </a>
    </Link>

    <style jsx>{`
      .permalink {
      }

      time {
        color: #828282;
      }
    `}</style>
  </span>
)

export default Permalink
