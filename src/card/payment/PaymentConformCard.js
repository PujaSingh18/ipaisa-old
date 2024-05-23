/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import JioComponent from '../../SvgImages/JioComponent';

export default function PaymentConformCard() {
  return (
    <View style={styles.container1}>
      <JioComponent/>
      <Text style={{color:'black'}}>JIO</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
        }}>
        <Text style={{color: '#000', fontWeight: 700}}>Bill Amount</Text>
        <Text style={{color:'black'}}>900</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
        }}>
        <Text style={{color: '#000', fontWeight: 700}}>Name</Text>
        <Text style={{color:'black'}}>Reubin</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
        }}>
        <Text style={{color: '#000', fontWeight: 700}}>Phone Number</Text>
        <Text style={{color:'black'}}>9876543210</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container1: {
    width: '90%',
    height:moderateVerticalScale(250),
    borderRadius: 10,
    padding: 20,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    marginTop:moderateScale(50),
    backgroundColor:'white'
  },
});
