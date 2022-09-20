import 'react-native-gesture-handler/jestSetup';

//global.__reanimatedWorkletInit = () => {};
// eslint-disable-next-line no-undef
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  Reanimated.default.call = () => {};

  return Reanimated;
});

// eslint-disable-next-line no-undef
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
