import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {ScreeProps} from '../route/RootNavigator';
import fetch from 'node-fetch';

const LoginScreen = ({navigation}: ScreeProps) => {
  const loginAPI = async () => {
    await fetch('https://localhost:8080/login', {method: 'POST'})
      .then(res => {
        if (res.status === 200) {
          navigation.navigate('Main');
        }
      })
      .catch(err => {
        console.log('login err', err);
      });
  };

  //useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <View>
        <Button
          title="login"
          onPress={() => {
            loginAPI().then();
          }}
        />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
