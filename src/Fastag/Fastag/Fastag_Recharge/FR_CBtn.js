/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

export default function FR_CBtn() {
  const navigation = useNavigation();
  return (
    <Pressable 
    onPress={()=>{
      navigation.navigate('Main_Fastag_Bill')
    }} style={styles.main}>
      <Text style={styles.clr}>Confirm</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#0378FF',
    borderRadius: moderateScale(40),
    width: '90%',
    alignSelf: 'center',
    marginTop: moderateVerticalScale(250),
    height: moderateVerticalScale(45),
  },
  clr: {
    color: 'white',
    alignSelf: 'center',
    marginTop: moderateScale(10),
    fontSize: moderateScale(17),
  },
});
