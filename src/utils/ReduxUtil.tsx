import React, {PropsWithChildren, ReactElement} from 'react';
import {PreloadedState} from 'redux';
import type {RenderOptions} from '@testing-library/react-native';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {AppStore, RootState, setupStore} from '../redux/store';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export const renderWithProvider = (
  ui: ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) => {
  function Wrapper({children}: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  return {store, ...render(ui, {wrapper: Wrapper, ...renderOptions})};
};
