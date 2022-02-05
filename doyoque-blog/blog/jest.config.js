// jest.config.js
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'resources/js/components/*.{js,vue}',
    'resources/js/pages/*.{js,vue}'
  ],
  coverageDirectory: './coverage',
  coverageReporters: [ 'html', 'lcov', 'text-summary' ],
  moduleFileExtensions: [ 'js', 'json', 'vue' ],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\.(vue)$': '<rootDir>/node_modules/vue3-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/resources/js/$1',
    '^@pages/(.*)$': '<rootDir>/resources/js/pages/$1',
    '^@components/(.*)$': '<rootDir>/resources/js/components/$1'
  },
  snapshotSerializers: [ 'jest-serializer-vue' ]
}
