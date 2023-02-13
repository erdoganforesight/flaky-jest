/** @type {import('jest').Config} */
const config = {
    verbose: true,
    reporters: [
        "default",
        // ["jest-junit", { "outputDirectory": ".",
        // "outputName": "junit.xml",
        // "reportTestSuiteErrors": "true",
        // "includeConsoleOutput": "true",
        // "includeShortConsoleOutput": "true" }]
      ],
      setupFilesAfterEnv: ['./setup-jest.js'],
  };
  
  module.exports = config;