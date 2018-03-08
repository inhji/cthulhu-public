const path = require('path')
const withSass = require('@zeit/next-sass')

module.exports = withSass({
  webpack (config, options) {
    config.module.rules.push({
      test: /\.md$/,
      use: [
        {
          loader: 'html-loader'
        },
        {
          loader: 'markdown-loader',
          options: {
            gfm: true,
            breaks: true,
            xhtml: true
          }
        }
      ]
    })

    config.resolve.alias['Components'] = path.resolve(__dirname, 'components/')
    config.resolve.alias['Lib'] = path.resolve(__dirname, 'lib/')
    config.resolve.alias['Layout'] = path.resolve(__dirname, 'components/layout.js')

    return config
  }
})
