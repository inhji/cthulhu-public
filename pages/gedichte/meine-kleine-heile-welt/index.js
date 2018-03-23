import Layout from 'Layout'
import html from './content.md'

export default () => (
  <Layout title="Meine kleine heile Welt">
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </Layout>
)
