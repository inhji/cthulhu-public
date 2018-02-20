export default /* GraphQL */ `
  query IndexQuery {
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
