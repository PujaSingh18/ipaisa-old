/* eslint-disable prettier/prettier */
import {Image, View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';

export default function Card() {
  return <View style={styles.elecsuply}></View>;
}

const styles = StyleSheet.create({
  elecsuply: {
    width: '88%',
    height: moderateVerticalScale(280),
    marginTop: moderateScale(25),
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: moderateScale(10),
  },
  elecsupplyText: {
    marginLeft: moderateScale(15),
    marginTop: moderateScale(10),
    fontWeight: 'bold',
    color: 'black',
  },
});
