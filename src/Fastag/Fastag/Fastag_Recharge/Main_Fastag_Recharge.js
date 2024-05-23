/* eslint-disable prettier/prettier */
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Header from '../../../commonComponent/Header';
import Footer from '../../../commonFooter/Footer';
import FR_CBtn from './FR_CBtn';
import FR_Details from './FR_Details';

const data = {
  heading:'Fastag Recharge',
  prevPath:'Main_Fastag_Home',
}

export default function Main_Fastag_Recharge() {
  return (
    <View style={style.mainbg}>
      <Header data={data}/>
      <FR_Details/>
      <Footer/>
      <FR_CBtn/>
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
