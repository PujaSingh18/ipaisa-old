/* eslint-disable prettier/prettier */
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Header from '../../commonComponent/Header';
import Card from './Card';
import Content from './Content';
import InputField from './InputField';
import Prices from './Prices';
import ProceedBtn from './ProceedBtn';

const data = {
  heading:'Airtel Digital Bill',
  prevPath:'Main',
}

export default function Main_DTH() {
  return (
    <View style={style.mainbg}>
      <Header data={data}/>
      <Card />
      <Content />
      <InputField />
      <Text
        style={{
          color: 'black',
          marginLeft: moderateScale(45),
          marginTop: moderateScale(25),
          fontWeight:'bold'
        }}>
        Recommended
      </Text>
      <Prices />
      <ProceedBtn />
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
