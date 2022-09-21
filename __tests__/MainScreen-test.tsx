import 'react-native';
import React from 'react';
import MainScreen from '../src/screen/MainScreen';

// Note: test renderer must be required after react-native.
import {render, fireEvent} from '@testing-library/react-native';

//const Child = props => <div>{props.children}</div>;
//const Counter = props => <div>{props.count}</div>;

describe('PART || MainScreen', () => {
  it('go to MovieScreen', () => {
    const navigate = jest.fn();
    const {getByText} = render(<MainScreen navigation={{navigate}} />);

    const button01 = getByText('go Movie');
    fireEvent.press(button01);
    expect(navigate).toHaveBeenCalledWith('Movie');
  });

  it('go to ReduxScreen', () => {
    const navigate = jest.fn();
    const {getByText} = render(<MainScreen navigation={{navigate}} />);

    const button01 = getByText('go Redux');
    fireEvent.press(button01);
    expect(navigate).toHaveBeenCalledWith('Redux');
  });
});
