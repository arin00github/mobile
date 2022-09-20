import 'react-native';
import React from 'react';
import MainScreen from '../src/screen/MainScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('MainScreen renders correctly', () => {
  renderer.create(<MainScreen />);
});
