import Layout from 'Layout'
import html from './content.md'

export default () => (
  <Layout title="Blicke">
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </Layout>
)
