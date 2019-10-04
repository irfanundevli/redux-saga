module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  collectCoverage: true,
  setupFilesAfterEnv: ['<rootDir>/tools/setupTests.js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};
