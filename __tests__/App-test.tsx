/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';
import {render, waitFor} from '@testing-library/react-native';

describe('AppStack', () => {
  it('renders the correct screen', async () => {
    const {getByText} = render(<App />);

    await waitFor(() => getByText('Main Screen'));
  });
});
