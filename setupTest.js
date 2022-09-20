import 'react-native-gesture-handler/jestSetup';
//import utilsTest from 'react-native-reanimated/lib/reanimated2/jestUtils';

//utilsTest.setUpTest();
global.__reanimatedWorkletInit = () => {};
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  Reanimated.default.call = () => {};

  return Reanimated;
});

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
