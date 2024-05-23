import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import {
    moderateScale,
    moderateVerticalScale
} from 'react-native-size-matters';

export default function PipedMGField() {
  return (
    <View style = {styles.acdetails}>
        <Image source={require('../../images/Bill.png')} style={{marginTop:moderateScale(30), marginLeft:moderateScale(20)}}/>
        <Text style={{fontSize:15, marginTop:moderateScale(30), marginLeft:moderateScale(15)}}>VIEW SAMPLE BILL</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    acdetails:{
        width:'90%',
        height:moderateVerticalScale(70),
        marginTop:moderateScale(25),
        alignSelf:'center',
        backgroundColor:'white',
        borderRadius:moderateScale(10),
        marginBottom:moderateScale(20),
        flexDirection:'row'
    },
    bottomBorder:{
        width:'90%',
        justifyContent:'center',
        marginTop: moderateScale(20),
        fontSize:moderateScale(14),
    }
})