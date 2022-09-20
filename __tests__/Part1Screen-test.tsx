import 'react-native';
import React from 'react';
import Part1Screen from '../src/screen/Part1Screen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Part1Screen renders correctly', () => {
  renderer.create(<Part1Screen />);
});
