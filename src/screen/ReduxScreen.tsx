import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {useAppDispatch, useAppSelector} from '../redux/store';
import {putUserInfo} from '../redux/user';
import {IUserInfo} from '../types/common';

const ReduxScreen = () => {
  const savedUserInfo: IUserInfo | null = useAppSelector(state => {
    if (state.user.userInfo) {
      return JSON.parse(state.user.userInfo);
    } else {
      return null;
    }
  });

  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Text>Redux Screen</Text>
      {savedUserInfo && (
        <View testID="userBox">
          <Text>{savedUserInfo.name}</Text>
          <Text>{savedUserInfo.group}</Text>
        </View>
      )}

      <View>
        <Button
          title="redux update"
          onPress={() => {
            const data: IUserInfo = {name: 'merry', group: 'developer'};
            const dataString = JSON.stringify(data);
            dispatch(putUserInfo(dataString));
          }}
        />
      </View>
    </View>
  );
};

export default ReduxScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
