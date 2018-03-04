import Link from 'next/link'
import timeago from '../../lib/timeago'

const Permalink = ({ date, hashid, type }) => (
  <span className="permalink">
    <Link href={{ pathname: `/post`, query: { hashid } }} as={`/${type.toLowerCase()}/${hashid}`}>
      <a className="u-url">
        <time className="dt-published time" dateTime={date} title={date}>
          {timeago(date)}
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
