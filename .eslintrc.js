module.exports = {
  extends: 'standard',
  plugins: ['react'],
  rules: {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'max-len': ['error', { code: 100 }]
  }
}
