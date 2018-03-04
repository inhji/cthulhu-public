import React from 'react'
import Layout from '../components/layout'

export default class Error extends React.Component {
  static getInitialProps ({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render () {
    const statusCode = this.props.statusCode ? this.props.statusCode : -1

    return (
      <Layout>
        <div>
          <h1>..the fuck?!</h1>
        </div>

        {statusCode === 404 && <p>Diese Seite gibt es garnicht 😅</p>}
        {statusCode === 500 && <p>Alles ist kaputt! 😭</p>}
      </Layout>
    )
  }
}
