import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import {
    moderateScale,
    moderateVerticalScale
} from 'react-native-size-matters';

export default function BroadMTNLScreen() {
  return (
    <View style = {styles.acdetails}>
    <Text style = {styles.acBold}>Enter Telephone number</Text>
    <View style = {styles.alignment1}>
        <TextInput style = {styles.bottomBorder} placeholder='Telephone Number without STD Code' keyboardType='numeric'/>
        <Text style={{opacity:.8, fontSize:moderateScale(12)}}>Please enter your 8 digit Telephone Number</Text>
    </View>
    <View style = {styles.alignment1}>
        <TextInput style = {styles.bottomBorder} placeholder='Account Number' keyboardType='numeric'/>
        <Text style={{opacity:.8, fontSize:moderateScale(12)}}>Please enter your account number</Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    acdetails:{
        width:'94%',
        height:moderateVerticalScale(250),
        marginTop:moderateScale(25),
        alignSelf:'center',
        backgroundColor:'white',
        borderRadius:moderateScale(10),
        marginBottom:moderateScale(20)
    },
    acBold:{
        color:'black',
        fontWeight:'bold',
        marginLeft: moderateScale(15),
        marginTop: moderateScale(10)
    },
    alignment1:{
        marginLeft: moderateScale(15),
        marginTop: moderateScale(1),
        opacity:.8
    },
    alignment2:{
        marginLeft: moderateScale(15),
        opacity:.8
    },
    bottomBorder:{
        width:'90%',
        borderBottomColor:'black',
        borderBottomWidth:moderateScale(1),
        marginTop: moderateScale(30),
        fontSize:moderateScale(15),
        opacity:.8
    }
})