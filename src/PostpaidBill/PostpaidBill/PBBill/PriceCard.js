/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import {moderateVerticalScale} from 'react-native-size-matters';

export default function PriceCard() {
  return (
    <View
      style={{
        marginTop: moderateVerticalScale(30),
        alignSelf: 'center',
        padding: 16,
        alignItems: 'flex-start',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'lightgray',
        width: '80%',
        height: moderateVerticalScale(100),
      }}>
      <Text style={{color: '#0378FF', fontSize: 24, fontWeight: 'bold'}}>
        ₹ 800
      </Text>
      <Text
        style={{
          fontSize: 14,
          fontWeight: '600',
          marginTop: moderateVerticalScale(8),
        }}>
        Bill due date : 20 Feb 2024
      </Text>
    </View>
  );
}
