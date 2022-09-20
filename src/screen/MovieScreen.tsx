import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MovieScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Movie Screen</Text>
    </View>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
