/* eslint-disable prettier/prettier */
import {View, Text, Button, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';

export default function ProceedBtn() {
  return (
    <Pressable style={styles.main}>
      <Text style={styles.clr}>Proceed to Pay</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#0378FF',
    borderRadius: moderateScale(40),
    width: '90%',
    alignSelf: 'center',
    marginTop: moderateVerticalScale(300),
    height: moderateVerticalScale(45),
  },
  clr: {
    color: 'white',
    alignSelf: 'center',
    marginTop: moderateScale(10),
    fontSize: moderateScale(17),
  },
});
