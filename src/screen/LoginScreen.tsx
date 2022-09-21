import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import {ScreeProps} from '../route/RootNavigator';
import fetch from 'node-fetch';

const LoginScreen = ({navigation}: ScreeProps) => {
  const [form, setForm] = useState<{userid: string; password: string}>({
    userid: '',
    password: '',
  });

  const onInputChange = (name: string) => (value: string) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

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
      <Text>로그인</Text>
      <View>
        <TextInput
          value={form.userid}
          placeholder="아이디입력"
          onChangeText={onInputChange('userid')}
        />
        <TextInput
          value={form.password}
          placeholder="패스워드입력"
          onChangeText={onInputChange('password')}
        />
      </View>
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
