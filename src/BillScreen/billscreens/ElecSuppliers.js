/* eslint-disable prettier/prettier */
import {Image, View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import HeroSection from './HeroSection';
import Supplier from './Supplier';

export default function ElecSuppliers() {
  return (
    <View style={styles.elecsuply}>
      <Text style={styles.elecsupplyText}>Electricity Suppliers</Text>
      <View>
        <Supplier />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  elecsuply: {
    width: '94%',
    height: moderateVerticalScale(400),
    marginTop: moderateScale(10),
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
