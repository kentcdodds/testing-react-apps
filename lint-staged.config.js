module.exports = {
  linters: {
    '**/*.js': ['eslint'],
    '**/*.+(js|json|less|css|html|ts|tsx|md)': [
      'prettier',
      'npm run test -- --no-watch --findRelatedTests',
      'git add',
    ],
  },
}
