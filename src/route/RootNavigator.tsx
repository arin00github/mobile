import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainScreen from '../screen/MainScreen';
import Part1Screen from '../screen/Part1Screen';
import Part2Screen from '../screen/Part2Screen';
import Part3Screen from '../screen/Part3Screen';

const Stack = createDrawerNavigator();

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
