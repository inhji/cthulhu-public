import Link from 'next/link'
import Note from './note'
import Bookmark from './bookmark'

export default ({ post }) => {
  switch (post.type) {
    case 'Note':
      return <Note note={post} />
    case 'Bookmark':
      return <Bookmark bookmark={post} />
    default:
      return <div>Unknown Post Type</div>
  }
}
