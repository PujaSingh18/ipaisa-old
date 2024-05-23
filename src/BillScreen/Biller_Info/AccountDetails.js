/* eslint-disable prettier/prettier */
import {Image, View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';

export default function AccountDetails() {
  return (
    <View style={styles.acdetails}>
      <Text style={styles.acBold}>Enter account details</Text>
      <View style={styles.alignment}>
        <TextInput
          style={styles.bottomBorder}
          placeholder="1220 4550 7880 9990"
          keyboardType="numeric"
        />
        <Text>Enter a valid consumer ID</Text>
      </View>
      <View style={styles.alignment2}>
        <TextInput
          style={styles.bottomBorder}
          placeholder="1220 4550 7880 9990"
          keyboardType="numeric"
        />
        <Text>Enter a valid sub division number</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  acdetails: {
    width: '94%',
    height: moderateVerticalScale(300),
    marginTop: moderateScale(25),
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: moderateScale(10),
  },
  acBold: {
    color: 'black',
    fontWeight: 'bold',
    marginLeft: moderateScale(15),
    marginTop: moderateScale(10),
  },
  alignment: {
    marginLeft: moderateScale(15),
    marginTop: moderateScale(1),
    marginBottom: moderateScale(20),
    opacity: 0.8,
  },
  alignment2: {
    marginLeft: moderateScale(15),
    marginTop: moderateScale(1),
    opacity: 0.8,
  },
  bottomBorder: {
    width: '90%',
    borderBottomColor: '#0F62FE',
    borderBottomWidth: moderateScale(3),
    marginTop: moderateScale(30),
  },
});
