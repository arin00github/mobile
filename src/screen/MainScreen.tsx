import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {ScreeProps} from '../route/RootNavigator';

const MainScreen = ({navigation}: ScreeProps) => {
  return (
    <View style={styles.container}>
      <Text>Main Screen</Text>
      <View>
        <Button
          title="go Part1"
          onPress={() => {
            navigation.navigate('Part1');
          }}
        />
        <Button
          title="go Part2"
          onPress={() => {
            navigation.navigate('Part2');
          }}
        />
        <Button
          title="go Part3"
          onPress={() => {
            navigation.navigate('Part3');
          }}
        />
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
