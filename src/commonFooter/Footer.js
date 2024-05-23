import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
    moderateScale,
    moderateVerticalScale
} from 'react-native-size-matters';
import BBPSComponent from '../SvgImages/BBPSComponent';

export default function Footer() {
  return (
    <View style = {styles.acdetails}>
    <View style = {styles.alignment1}>
    <BBPSComponent/>
    </View>
    <Text style={{marginLeft:moderateScale(50), fontSize:12, marginTop:moderateScale(-35)}}>This allows iPaisa to fetch your current and</Text>
    <Text style={{marginLeft:moderateScale(50), fontSize:12, marginTop:moderateScale(1)}}>future bills so that you can view and pay them.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    acdetails:{
        width:'94%',
        height:moderateVerticalScale(80),
        marginTop:moderateScale(10),
        alignSelf:'center',
        backgroundColor:'white',
        borderRadius:moderateScale(15),
        marginBottom:moderateScale(20),
    },
    alignment1:{
        marginLeft: moderateScale(10),
        marginTop: moderateScale(20)
    }
})