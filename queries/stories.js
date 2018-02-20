export default /* GraphQL */ `
  query posts {
    blogPosts {
      featured
      title
      createdAt
      excerpt
      slug
    }
  }
`
