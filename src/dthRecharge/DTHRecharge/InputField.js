/* eslint-disable prettier/prettier */
import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';

export default function InputField() {
  return (
    <>
      <View
        style={{
          height: moderateScale(60),
          alignSelf: 'center',
          width: '75%',
          marginTop: moderateScale(20),
          borderBottomWidth:.5
        }}>
        <TextInput
          style={style.css}
          placeholder="Enter the amount"
          keyboardType="numeric"
        />
      </View>
    </>
  );
}

const style = StyleSheet.create({
  css: {
    fontSize: 16,
    paddingLeft: 3,
    justifyContent: 'flex-start',
    marginTop: moderateScale(5),
    color:'#0378FF',
  },
});
