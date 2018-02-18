export default /* GraphQL */ `
  query posts {
    blogPosts {
      featured
      title
      createdAt
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
