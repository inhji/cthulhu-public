import Layout from 'Layout'
import html from './content.md'

export default () => (
  <Layout title="Traumfänger">
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </Layout>
)
