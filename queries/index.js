export default /* GraphQL */ `
  query IndexQuery {
    tracks {
      artist
      track
      listenedAt
    }

    posts {
      ... on Note {
        id
        contentHtml
        hashid
        tags
        type
        createdAt
        author {
          name
        }
      }

      ... on Bookmark {
        id
        url
        title
        contentHtml
        hashid
        tags
        type
        createdAt
        author {
          name
        }
      }
    }
  }
`
