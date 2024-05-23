/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import {
  moderateScale,
  moderateVerticalScale
} from 'react-native-size-matters';
import Slick from 'react-native-slick';

export default function Banner() {
  return (
    <Slick style={{height:moderateScale(180)}} showsButtons={false} loop={true} autoplay>
    <View style={styles.container}>
      <Image source={require('../../image/Banner.png')} style={styles.banner} />
    </View>
    <View style={styles.container}>
      <Image source={require('../../image/Untitled.png')} style={styles.banner} />
    </View>
    </Slick>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 25,
    width: '106%',
    flexDirection: 'row',
    alignSelf:'center',
    marginTop:moderateVerticalScale(30)
  },
  banner: {
    width:'105.5%',
    height:moderateScale(150),
    marginTop:moderateScale(-30),
    borderWidth:2,
    borderRadius:8,
    marginLeft:moderateScale(-10)
  }
});
