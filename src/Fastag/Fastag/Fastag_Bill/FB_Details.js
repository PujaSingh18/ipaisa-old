/* eslint-disable prettier/prettier */
import {Image, View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';

export default function FB_Details() {
  return (
    <View style={styles.acdetails}>
      <View style={styles.a}>
        <Image
          source={require('../Fastag_Home/FH_images/Canara_Bank.png')}
          style={{
            width: scale(60),
            height: 60,
            marginTop: moderateVerticalScale(22),
          }}
        />
        <View
          style={{
            marginTop: moderateVerticalScale(30),
            rowGap: 5,
            width: '74%',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16, color: 'black'}}>
            MH14ED3345
          </Text>
          <Text style={{fontSize: 14}}>Canara Bank</Text>
          <View
            style={{
              borderBottomWidth: moderateScale(1),
              marginTop: moderateScale(20),
              marginLeft: moderateScale(-70),
              opacity: 0.2,
            }}></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  acdetails: {
    width: '90%',
    height: moderateVerticalScale(420),
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
  a: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    columnGap: 10,
    marginLeft: moderateScale(10),
  },
});
