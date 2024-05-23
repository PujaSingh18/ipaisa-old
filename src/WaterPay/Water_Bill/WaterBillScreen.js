import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';

export default function WaterBillScreen() {
  return (
    <View style={styles.acdetails}>
      <View style={styles.a}>
        <Image
          source={require('../../images/R_Bill.png')}
          style={{width: 50, height: 50, marginTop: moderateVerticalScale(22)}}
        />
        <View
          style={{
            marginTop: moderateVerticalScale(30),
            rowGap: 5,
            width: '74%',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 13, color: 'black'}}>
            Kolhapur Municipal Corporati...
          </Text>
          <Text style={{fontSize: 14}}>+91 9753625162</Text>
          <View
            style={{
              borderBottomWidth: moderateScale(1),
              marginTop: moderateScale(20),
              marginLeft: moderateScale(-50),
              opacity: 0.2,
              width: '125%',
            }}></View>
        </View>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  acdetails: {
    width: '90%',
    height: moderateVerticalScale(400),
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
