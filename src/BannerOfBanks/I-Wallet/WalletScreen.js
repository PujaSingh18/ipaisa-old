import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import ExchangeLine from '../../SvgImages/ExchangeLine';
import Upload from '../../SvgImages/Upload';

export default function WalletScreen() {
  return (
    <View style={styles.container}>
        <View style={{alignSelf:'center', justifyContent:'space-around', marginTop:moderateScale(10)}}>
        <Text style={{color:'white', alignSelf:'center'}}>Wallet balance</Text>
        <Text style={{color:'white', fontSize:30, fontWeight:'bold'}}>₹4,200.70</Text>
        </View>

        <View style={{ justifyContent:'space-between', gap:10, marginTop:moderateScale(20)}}>
            <Upload style={{marginLeft:moderateVerticalScale(-75)}}/>
            <Text style={{fontSize:15, fontWeight:'400', color:'white', marginLeft:moderateVerticalScale(-90)}}>Transfer</Text>
        </View>

        <View style={{marginLeft:moderateVerticalScale(140), gap:10, marginTop:moderateScale(-55)}}>
            <ExchangeLine style={{marginLeft:moderateScale(15)}}/>
            <Text style={{fontSize:15, fontWeight:'400', color:'white'}}>Refresh</Text>
        </View>
    </View>
  )
}


const styles=StyleSheet.create({
    container:{
        width:'94%',
        height:200,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        //borderWidth:2,
        marginTop:moderateVerticalScale(20),
        marginLeft:moderateScale(10),
        backgroundColor:'#559AFF'
    }
})