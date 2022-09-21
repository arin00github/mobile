import React from 'react';

import MainScreen from '../screen/MainScreen';
import MovieScreen from '../screen/MovieScreen';
import ReduxScreen from '../screen/ReduxScreen';
import Part3Screen from '../screen/Part3Screen';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import LoginScreen from '../screen/LoginScreen';
//import AsyncStorage from '@react-native-async-storage/async-storage';

type RootNavParams = {
  Main: undefined;
  Login: undefined;
  //Post: {title: string};
  Movie: undefined;
  Redux: undefined;
  Part3: undefined;
};

export type ScreeProps = NativeStackScreenProps<RootNavParams>;

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  //const [authorized, setAuthorized] = useState<boolean>(false);

  //useEffect(() => {}, []);
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Movie" component={MovieScreen} />
      <Stack.Screen name="Redux" component={ReduxScreen} />
      <Stack.Screen name="Part3" component={Part3Screen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      {/* {authorized ? (
        <Stack.Group>
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="Part1" component={Part1Screen} />
          <Stack.Screen name="Part2" component={Part2Screen} />
          <Stack.Screen name="Part3" component={Part3Screen} />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Group>
      )} */}
    </Stack.Navigator>
  );
};

export default RootNavigator;
