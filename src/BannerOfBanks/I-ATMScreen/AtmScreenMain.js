import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import Arrow from '../../SvgImages/Arrow';
import AtmComponent from '../../SvgImages/AtmComponent';
import DownArrow from '../../SvgImages/DownArrow';
import PlusCom from '../../SvgImages/PlusCom';
import AtmHistory from './AtmHistory';

export default function AtmScreenMain() {
  return (
    <>
    <View style={styles.con}>
        <Arrow
          style={{
            marginTop: moderateVerticalScale(25),
            marginLeft: moderateScale(10),
          }}
        />
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            fontWeight: 'bold',
            marginLeft: moderateScale(60),
            marginTop: moderateVerticalScale(-27),
          }}>
          i-ATM
        </Text>
        <AtmComponent style={{marginTop:moderateVerticalScale(40), marginLeft:moderateScale(15)}}/>
        <View style={{alignItems:'center', width:'94%', alignSelf:'center'}}>
        <View style={{
            width: '45%',
            alignSelf: 'center',
            backgroundColor: '#0F62FE',
            height: 50,
            borderRadius: 30,
            flexDirection:'row',
            marginTop: moderateVerticalScale(20),
            marginLeft:moderateScale(-160)
            }}>
            <PlusCom style={{marginLeft:moderateScale(15), marginTop:moderateVerticalScale(15)}}/>
            <Text style={{color: 'white', fontWeight: 700, fontSize: 15, marginLeft:moderateScale(10), marginTop:moderateVerticalScale(12)}}>
            Quick Deposit
            </Text>
        </View>
        <View style={{
            width: '45%',
            alignSelf: 'center',
            backgroundColor: 'white',
            height: 50,
            borderRadius: 30,
            flexDirection:'row',
            borderColor:'#0F62FE',
            borderWidth:2,
            marginTop: moderateVerticalScale(-46),
            marginLeft:moderateScale(190)
            }}>
            <DownArrow style={{marginLeft:moderateScale(5), marginTop:moderateVerticalScale(13)}}/>
            <Text style={{color: '#0F62FE', fontWeight: 700, fontSize: 15,  marginLeft:moderateScale(10), marginTop:moderateVerticalScale(10)}}>
            Fast Withdrawal
            </Text>
        </View>
        </View>
    </View>
    <AtmHistory/>
    </>
  )
}


const styles = StyleSheet.create({
    con:{
        width:'100%',
        height:400,
        backgroundColor:'#E3F1FA'
    }
});