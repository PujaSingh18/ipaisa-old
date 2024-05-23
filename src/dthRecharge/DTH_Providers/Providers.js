/* eslint-disable prettier/prettier */
import {Image, View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import Providers_List from './Providers_List';

export default function Providers() {
  return (
    <View style={styles.elecsuply}>
      <Text style={styles.elecsupplyText}>DTH Suppliers</Text>
      <View>
        <Providers_List />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  elecsuply: {
    width: '94%',
    height: moderateVerticalScale(380),
    marginTop: moderateScale(30),
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
