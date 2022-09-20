import 'react-native';
import React from 'react';
import MainScreen from '../src/screen/MainScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

//const Child = props => <div>{props.children}</div>;
//const Counter = props => <div>{props.count}</div>;

it('MainScreen renders correctly', () => {
  const navigate = jest.fn();
  const element = renderer.create(<MainScreen navigation={{navigate}} />);
  const root = element.root;
  root.findByType('View').children.map(item => {
    console.log(item);
  });
});
