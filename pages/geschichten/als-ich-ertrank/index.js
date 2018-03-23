import Layout from 'Layout'
import html from './content.md'

export default () => (
  <Layout title="Als ich ertrank">
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </Layout>
)
