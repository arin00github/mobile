import type {Config} from 'jest';

const config: Config = {
  preset: 'react-native',
  clearMocks: true,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: ['<rootDir>/setupTests.js'],
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    //'<rootDir>/src/mock.setup.ts',
  ],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(js)$': 'babel-jest',
  },
  testMatch: ['<rootDir>/__tests__/*-{spec,test}.{js,jsx,ts,tsx}'],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!((jest-)?react-native(-.*)?|@react-native(-community)?)|react-native-reanimated|/)',
  ],
};

export default config;
