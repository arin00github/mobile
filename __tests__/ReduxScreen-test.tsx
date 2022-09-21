import 'react-native';
import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
//import AsyncStorage from '@react-native-async-storage/async-storage';

import ReduxScreen from '../src/screen/ReduxScreen';
import {renderWithProvider} from '../src/utils/ReduxUtil';
import {setupStore} from '../src/redux/store';

let store, rootElement, button;

beforeEach(() => {
  store = setupStore();
  rootElement = renderWithProvider(<ReduxScreen />, {store});
  button = rootElement.getByText('redux update');
  fireEvent.press(button);
});

describe('PART || ReduxScreen', () => {
  it('버튼 클릭 시 redux store에 데이터 저장', () => {
    const userBox = rootElement.getByTestId('userBox');
    expect(userBox).toBeTruthy();
  });

  //   it('AsyncStorage 데이터 확인', async () => {
  //     await AsyncStorage.getAllKeys().then(res => {
  //       console.log('AsyncStorage', res);
  //     });
  //   });
});
