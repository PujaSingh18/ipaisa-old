/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

export default function AccountDetails() {
  return (
    <View style={styles.acdetails}>
      <Text style={styles.acBold}>Enter DTH Details</Text>
      <View style={styles.alignment1}>
        <TextInput
          style={styles.bottomBorder}
          placeholder="Subscriber ID/Registered Mobile Number"
          keyboardType="numeric"
        />
        <Text style={{opacity: 0.8, fontSize: moderateScale(12)}}>
          Press the menu button on your Airtel DTH remote
        </Text>
        <Text style={{opacity: 0.8, fontSize: moderateScale(12)}}>
          and select My account to get your Subscriber ID
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  acdetails: {
    width: '94%',
    height: moderateVerticalScale(180),
    marginTop: moderateScale(50),
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: moderateScale(10),
    marginBottom: moderateScale(20),
  },
  acBold: {
    color: 'black',
    fontWeight: 'bold',
    marginLeft: moderateScale(15),
    marginTop: moderateScale(10),
  },
  alignment1: {
    marginLeft: moderateScale(15),
    marginTop: moderateScale(1),
    opacity: 0.8,
  },
  alignment2: {
    marginLeft: moderateScale(15),
    opacity: 0.8,
  },
  bottomBorder: {
    width: '90%',
    borderBottomColor: 'black',
    borderBottomWidth: moderateScale(1),
    marginTop: moderateScale(30),
    fontSize: moderateScale(13),
    opacity: 0.8,
  },
});
