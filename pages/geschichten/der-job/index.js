import Layout from 'Layout'
import html from './content.md'

export default () => (
  <Layout title="Der Job">
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </Layout>
)
