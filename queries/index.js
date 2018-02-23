export default /* GraphQL */ `
  query IndexQuery {
    tracks {
      artist
      track
    }

    posts {
      ... on Note {
        id
        content
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
        content
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
