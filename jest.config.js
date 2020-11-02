module.exports = {
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  testMatch: ['<rootDir>/src/**/tests/*.test.ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules'],
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['js', 'ts'],
  cacheDirectory: '<rootDir>/temp/cache/jest',
  coverageDirectory: '<rootDir>/temp/coverage',
  coverageReporters: ['html', 'lcov', 'text'],
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.test.ts',
    '!**/node_modules/**',
  ],
  preset: 'ts-jest',
};
