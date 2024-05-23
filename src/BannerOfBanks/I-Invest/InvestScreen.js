import React from 'react'
import { Image, Text, View } from 'react-native'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'


export default function InvestScreen() {
  return (
    <>
    <View style={{alignItems:'center',alignSelf:'center', marginTop:moderateScale(20), marginLeft:moderateVerticalScale(10)}}>
        <Text style={{fontSize:15, fontWeight:'bold'}}>i-Invest Balance</Text>
        <Text style={{fontSize:30, fontWeight:'bold', color:'black'}}>₹4,200.70</Text>
    </View>
    <View style={{marginTop:moderateScale(50), alignItems:'center', marginRight:moderateScale(160)}}>
        <Text style={{fontSize:12, fontWeight:'bold'}}>Gained</Text>
        <Text style={{fontSize:15, fontWeight:'bold', color:'black'}}>₹200.35</Text>
    </View>
    <View style={{marginTop:moderateScale(-40), alignItems:'center', marginLeft:moderateScale(160)}}>
        <Text style={{fontSize:12, fontWeight:'bold'}}>Returns</Text>
        <Text style={{fontSize:15, fontWeight:'bold', color:'#00A049'}}>+10.25%</Text>
    </View>
    <View style={{borderRadius:20, marginTop:moderateScale(20), height:100, width:'94%', marginLeft:moderateScale(10), alignSelf:'flex-start', flexDirection:'row', backgroundColor:'#00A049'}}>
        <Text style={{fontSize:20, fontWeight:'bold', color:'white', marginTop:moderateScale(15), marginLeft:moderateVerticalScale(20)}}>₹200.35</Text>
        <Text style={{fontSize:10, color:'white', marginTop:moderateScale(25), marginLeft:moderateScale(10)}}>earned in 10 days</Text>
        <Image source={require('../../images/star-fall.png')} style={{marginTop:moderateScale(20), marginLeft:moderateVerticalScale(95)}}/>
    </View>
    <Text style={{fontSize:10, color:'white', marginTop:moderateScale(-60), marginLeft:moderateScale(40)}}>Spend more to earn more with i-Invest!</Text>
    </>
  )
}