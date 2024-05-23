/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import React from 'react';
import Header from './Header';
import Banner from './Banner';
import HeroSection from './HeroSection';
import ElecSuppliers from './ElecSuppliers';

export default function MainPage() {
  return (
    <View style={style.mainbg}>
      <Header />
      <ScrollView>
        <Banner />
        <HeroSection />
        <ElecSuppliers />
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
