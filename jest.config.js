module.exports = {
  verbose: true,
  moduleDirectories: ['node_modules', 'src'],
  setupFiles: ['jest-prop-type-error'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  }
  // moduleNameMapper: {
  //   "^image![a-zA-Z0-9$_-]+$": "GlobalImageStub",
  //   src: "<rootDir>/src",
  // },
};
