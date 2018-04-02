import Layout from 'Layout'
import __html from './about.md'

export default () => (
  <Layout>
    <div className="content" dangerouslySetInnerHTML={{ __html }} />
  </Layout>
)
