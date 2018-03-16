import Layout from 'Layout'
import Link from 'next/link'

export default () => (
  <Layout title="Gedichte">
    <h1>Gedichte</h1>

    <h2>2018</h2>

    <ul>
      <li>
        <Link href="/gedichte/blicke">Blicke</Link>
      </li>
    </ul>

    <h2>2017</h2>

    <ul>
      <li>
        <Link href="/gedichte/meine-kleine-heile-welt">Meine kleine heile Welt</Link>
      </li>
    </ul>
  </Layout>
)
