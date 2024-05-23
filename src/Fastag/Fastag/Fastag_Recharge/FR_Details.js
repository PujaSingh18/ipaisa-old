/* eslint-disable prettier/prettier */
import {Image, View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';

export default function FR_Details() {
  return (
    <View style={styles.acdetails}>
      <Text style={styles.acBold}>Enter vehicle details</Text>
      <View style={styles.alignment1}>
        <TextInput
          style={styles.bottomBorder}
          placeholder="Vehicle registration number"
        />
        <Text
          style={{
            opacity: 0.8,
            fontSize: moderateScale(13),
            marginTop: moderateScale(5),
          }}>
          Please enter your registration number
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  acdetails: {
    width: '90%',
    height: moderateVerticalScale(160),
    marginTop: moderateScale(25),
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
  bottomBorder: {
    width: '90%',
    borderBottomColor: 'black',
    borderBottomWidth: moderateScale(1),
    marginTop: moderateScale(30),
    fontSize: moderateScale(16),
    paddingLeft: moderateScale(-10),
  },
});
