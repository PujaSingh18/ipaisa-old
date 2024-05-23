import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import ArrowComponent from '../../SvgImages/ArrowComponent'
import Download from '../../SvgImages/Download'
import GPay from '../../SvgImages/GPay'
import Paytm from '../../SvgImages/Paytm'
import PhonePay from '../../SvgImages/PhonePay'
import Question from '../../SvgImages/Question'

export default function ReceiveMoneyHeader() {
  const navigation = useNavigation();
  return (
    <>
    <Pressable onPress={()=>{
      navigation.navigate('ProfileMain');
    }} style={styles.rm}>
    <View style={{marginTop:moderateScale(20), marginLeft:moderateScale(10)}}>
    <ArrowComponent style={{marginLeft:moderateScale(5)}}/>
    <Download style={{marginTop:moderateVerticalScale(-20), marginLeft:moderateScale(250)}}/>
    <Question style={{marginTop:moderateVerticalScale(-22), marginLeft:moderateScale(300)}}/>
    </View>
    <View style={{marginLeft:moderateScale(20)}}>
    <Text style={{color:'white',fontSize:17, fontWeight:'bold', marginTop:moderateScale(5)}}>Receive Money</Text>
    <Text style={{color:'white', fontSize:12}}>Supported UPI Apps</Text>
    <GPay style={{marginLeft:moderateScale(140), marginTop:moderateVerticalScale(-12)}}/>
    <PhonePay style={{marginLeft:moderateScale(175), marginTop:moderateVerticalScale(-12)}}/>
    <Paytm style={{marginLeft:moderateScale(235), marginTop:moderateVerticalScale(-12)}}/>
    </View>
    </Pressable>
    </>
  )
}

const styles=StyleSheet.create({
    rm:{
        width:'100%',
        height:120,
        backgroundColor:'#0F62FE'
    }
})