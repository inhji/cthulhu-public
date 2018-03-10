const query = /* GraphQL */ `
  query post($hashid: ID!) {
    postByHashid(hashid: $hashid) {
      ... on Note {
        hashid
        contentHtml
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
        contentHtml
        createdAt
        author {
          id
        }
      }

      ... on Bookmark {
        hashid
        title
        contentHtml
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
