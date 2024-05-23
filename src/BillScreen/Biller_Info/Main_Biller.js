/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, Dimensions, Button} from 'react-native';
import React from 'react';
import AccountDetails from './AccountDetails';
import ConfirmBtn from './ConfirmBtn';
import Header from './HeaderBiller';
import {useNavigation} from '@react-navigation/native';

export default function Main_Biller() {
  const navigation = useNavigation();

  const goToScreen = () => {
    navigation.navigate('PayMain');
  };
  return (
    <View style={style.mainbg}>
      <Header />
      <AccountDetails />
      <ConfirmBtn goToScreen={goToScreen} />
    </View>
  );
}

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
const style = StyleSheet.create({
  mainbg: {
    backgroundColor: '#EFF4FF',
    height: HEIGHT,
    width: WIDTH,
  },
});
