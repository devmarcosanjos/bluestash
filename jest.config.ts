import nextJest from 'next/jest.js'

import type {Config} from 'jest'

const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
  coverageProvider: 'v8',
  roots: ['<rootDir>/src'],
  transform: {'^.+\\.tsx?$': 'ts-jest'},
  testEnvironment: 'jsdom',
  modulePathIgnorePatterns: ['<rootDir>/node_modules/'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '.mock.ts',
    '.svg',
    '<rootDir>/src/types/',
    'types.ts',
  ],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**'],
  coverageReporters: ['html', 'text'],
  coverageDirectory: '<rootDir>/coverage',
  moduleNameMapper: {
    '^@/(.*)$': ['./src/$1'],
  },
  clearMocks: true,
  restoreMocks: true,
  setupFilesAfterEnv: ['<rootDir>/jest-setup.tsx'],
  workerThreads: true,
  maxWorkers: 3,
  cache: false,
}

export default createJestConfig(config)
