module.exports = {
  testPathIgnorePatterns: [
    '/node_modules/',
    '.cache'
  ],
  testEnvironment: 'node',
  preset: '@shelf/jest-mongodb',
  globalSetup: './test-utils/globalSetup',
  globalTeardown: './test-utils/globalTeardown',
  setupFiles: ['<rootDir>/.jest/setEnvVars.js'],
  verbose: false,
}
