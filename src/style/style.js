'use strict'
import { StyleSheet } from "react-native";
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";


export default StyleSheet.create({
    headingStyle:{
        fontSize:12,
        fontWeight:'bold',
        color:'black',
        marginLeft:moderateVerticalScale(10),
        marginTop:moderateScale(10)
    }
})