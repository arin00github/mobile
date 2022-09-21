import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './route/RootNavigator';
import {Provider} from 'react-redux';
import {persistor, store} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';

export const AppRoot = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppRoot />
      </PersistGate>
    </Provider>
  );
};

export default App;
