import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Main Screen</Text>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
