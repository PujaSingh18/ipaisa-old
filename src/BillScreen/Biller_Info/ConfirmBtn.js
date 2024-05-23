/* eslint-disable prettier/prettier */
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

export default function ConfirmBtn({goToScreen}) {
  return (
    <Pressable style={styles.main} onPress={goToScreen}>
      <Text style={styles.clr}>Confirm</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#0F62FE',
    borderRadius: moderateScale(40),
    width: '85%',
    alignSelf: 'center',
    marginTop: moderateVerticalScale(230),
    height: moderateVerticalScale(50),
  },
  clr: {
    color: 'white',
    alignSelf: 'center',
    marginTop: moderateScale(12),
    fontSize: moderateScale(17),
  },
});
