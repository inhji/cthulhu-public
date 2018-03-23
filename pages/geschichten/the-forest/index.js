import Layout from 'Layout'
import html from './content.md'

export default () => (
  <Layout title="The Forest">
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </Layout>
)
