import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {ScreeProps} from '../route/RootNavigator';

const MainScreen = ({navigation}: ScreeProps) => {
  return (
    <View style={styles.container}>
      <Text>Main Screen</Text>
      <View>
        <Button
          title="go Movie"
          onPress={() => {
            navigation.navigate('Movie');
          }}
        />
        <Button
          title="go Redux"
          onPress={() => {
            navigation.navigate('Redux');
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
