import 'react-native';
import React from 'react';
import MainScreen from '../src/screen/MainScreen';

// Note: test renderer must be required after react-native.
import {render, waitFor, fireEvent} from '@testing-library/react-native';

//const Child = props => <div>{props.children}</div>;
//const Counter = props => <div>{props.count}</div>;

describe('MainScreen test', () => {
  it('go to Part1 Screen', () => {
    const navigate = jest.fn();
    const {getByText} = render(<MainScreen navigation={{navigate}} />);

    const button01 = getByText('go Part1');
    fireEvent.press(button01);
    expect(navigate).toHaveBeenCalledWith('Part1');
  });

  it('go to Part2 Screen', () => {
    const navigate = jest.fn();
    const {getByText} = render(<MainScreen navigation={{navigate}} />);

    const button01 = getByText('go Part2');
    fireEvent.press(button01);
    expect(navigate).toHaveBeenCalledWith('Part2');
  });
});
