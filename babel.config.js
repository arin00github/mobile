module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module:react-native-dotenv',
      {
        moduleName: 'react-native-dotenv',
        safe: true,
        // path: '.env',
      },
    ],
    //'react-native-reanimated/plugin',
  ],
  env: {
    test: {
      plugins: [
        '@babel/plugin-transform-modules-commonjs',
        '@babel/plugin-transform-runtime',
      ],
    },
  },
};
