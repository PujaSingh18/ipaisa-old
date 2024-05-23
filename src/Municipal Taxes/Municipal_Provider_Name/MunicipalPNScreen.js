import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import {
    moderateScale,
    moderateVerticalScale
} from 'react-native-size-matters';

export default function MunicipalPNScreen() {
  return (
    <View style = {styles.acdetails}>
    <View style = {styles.alignment1}>
        <TextInput style = {styles.bottomBorder} placeholder='Property ID' keyboardType='numeric'/>
        <Text style={{opacity:.8, fontSize:moderateScale(12)}}>Please enter a valid ID like Ex: O/P/22/00000050</Text>
    </View>
    <View style = {styles.alignment1}>
        <TextInput style = {styles.bottomBorder} placeholder='Mobile Number' keyboardType='numeric'/>
        <Text style={{opacity:.8, fontSize:moderateScale(12)}}>Please enter a valid 10 digit Mobile Number.</Text>
    </View>
    <View style = {styles.alignment1}>
        <TextInput style = {styles.bottomBorder} placeholder='Email ID' keyboardType='numeric'/>
        <Text style={{opacity:.8, fontSize:moderateScale(12)}}>Please enter registered email ID</Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    acdetails:{
        width:'94%',
        height:moderateVerticalScale(300),
        marginTop:moderateScale(25),
        alignSelf:'center',
        backgroundColor:'white',
        borderRadius:moderateScale(10),
        marginBottom:moderateScale(20),
        marginTop:moderateScale(10)
    },
    alignment1:{
        marginLeft: moderateScale(15),
        marginTop: moderateScale(-15),
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