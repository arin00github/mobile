import React from 'react';

import MainScreen from '../screen/MainScreen';
import Part1Screen from '../screen/Part1Screen';
import Part2Screen from '../screen/Part2Screen';
import Part3Screen from '../screen/Part3Screen';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

type RootNavParams = {
  Main: undefined;
  //Post: {title: string};
  Part1: undefined;
  Part2: undefined;
  Part3: undefined;
};

export type ScreeProps = NativeStackScreenProps<RootNavParams>;

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Part1" component={Part1Screen} />
      <Stack.Screen name="Part2" component={Part2Screen} />
      <Stack.Screen name="Part3" component={Part3Screen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
