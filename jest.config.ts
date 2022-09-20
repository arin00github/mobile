import type {Config} from 'jest';
import {defaults as tsJesPreset} from 'ts-jest/presets';

const config: Config = {
  ...tsJesPreset,
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: ['<rootDir>/setupTest.js'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(js)$': 'babel-jest',
    //'\\.(ts|tsx)$': 'ts-jest',
  },

  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!((jest-)?react-native(-.*)?|@react-native(-community)?)|react-native-reanimated|/)',
  ],
};

export default config;
