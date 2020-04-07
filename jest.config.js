const path = require('path')

module.exports = {
  displayName: 'client',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    path.join(__dirname, 'src/test/setup'),
  ],
  clearMocks: true,
  moduleDirectories: ['node_modules', path.join(__dirname, 'src')],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
    'jest-watch-select-projects',
  ],
  // here are some additional configuration options you may like to know about:
  // testPathIgnorePatterns: ['<rootDir>/server/'],
  // snapshotSerializers: ['jest-emotion'],
  // moduleNameMapper: {
  //   // module must come first
  //   '\\.module\\.css$': 'identity-obj-proxy',
  //   '\\.css$': require.resolve('./style-mock.js'),
  //   // can also map files that are loaded by webpack with the file-loader
  // },
}
