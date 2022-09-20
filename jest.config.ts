import type {Config} from 'jest';

const config: Config = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: ['<rootDir>/setupTest.js'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(js)$': 'babel-jest',
    //'\\.(ts|tsx)$': 'ts-jest',
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/(?!((jest-)?react-native(-.*)?|@react-native(-community)?)|react-native-reanimated|/)',
  ],
};

export default config;
