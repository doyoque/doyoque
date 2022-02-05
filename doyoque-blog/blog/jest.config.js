// jest.config.js
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [ 'resources/js/**/*.{js,jsx,ts,tsx,vue}' ],
  coverageDirectory: './coverage',
  coverageReporters: [ 'html', 'lcov', 'text-summary' ],
  testRegex: 'resources/js/tests/.*.spec.js$',
  moduleFileExtensions: [ 'js', 'json', 'vue' ],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\.(vue)$': '<rootDir>/node_modules/vue3-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/resources/js/$1',
    '^@pages/(.*)$': '<rootDir>/resources/js/pages/$1'
  },
  snapshotSerializers: [ 'jest-serializer-vue' ]
}
