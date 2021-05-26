module.exports = {
  testPathIgnorePatterns: [
    '/node_modules/',
    ',tmp',
    '.cache'
  ],
  testEnvironment: 'node',
  preset: '@shelf/jest-mongodb',
  globalSetup: './test-utils/globalSetup',
  globalTeardown: './test-utils/globalTeardown',
  setupFiles: ['<rootDir>/.jest/setEnvVars.js'],
  verbose: false,
}
