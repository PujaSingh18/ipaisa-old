/* eslint-disable prettier/prettier */
import React from 'react';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import Banner from '../../BillScreen/billscreens/Banner';
import Header from '../../commonComponent/Header';
import Providers from './Providers';
const data = {
  heading:'Select Provider',
  prevPath:'HomeMainScreen',
}

export default function MainDTH() {
  return (
    <View style={style.mainbg}>
      <Header data={data}/>
      <ScrollView>
        <Banner/>
        <Providers />
      </ScrollView>
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
