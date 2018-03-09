import Layout from 'Layout'
import Link from 'next/link'

export default () => (
  <Layout title="Geschichten">
    <h1>Geschichten</h1>

    <h2>2017</h2>

    <ul>
      <li>
        <Link href="/geschichten/traumfaenger">Traumfänger</Link>
      </li>
    </ul>

    <h2>Älter</h2>

    <ul>
      <li>
        <Link href="/geschichten/the-forest">The Forest</Link>
      </li>
      <li>
        <Link href="/geschichten/sand">Sand</Link>
      </li>
      <li>
        <Link href="/geschichten/als-ich-ertrank">Als ich ertrank</Link>
      </li>
      <li>
        <Link href="/geschichten/der-job">Der Job</Link>
      </li>
    </ul>
  </Layout>
)
