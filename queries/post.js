const query = /* GraphQL */ `
  query post($hashid: ID!) {
    postByHashid(hashid: $hashid) {
      ... on Note {
        hashid
        content
        type
        tags
        createdAt
        author {
          id
        }
      }

      ... on Article {
        hashid
        title
        content
        createdAt
        author {
          id
        }
      }

      ... on Bookmark {
        hashid
        title
        content
        url
        tags
        type
        createdAt
        author {
          id
        }
      }
    }
  }
`

export default query
