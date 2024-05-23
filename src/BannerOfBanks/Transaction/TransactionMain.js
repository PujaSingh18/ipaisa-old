import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import Arrow from '../../SvgImages/Arrow';
import WalletHistory from '../I-Wallet/WalletHistory';
import TransactionScreen from './TransactionScreen';

export default function TransactionMain() {
  return (
    <View style={styles.con}>
    <View>
        <View style={{marginTop:moderateScale(30), marginLeft:moderateVerticalScale(10)}}>
        <Arrow/>
        <Text style={{fontSize:15, fontWeight:'bold', color:'black', marginTop:moderateScale(-25), marginLeft:moderateVerticalScale(55)}}>Transaction History</Text>
        </View>

        <View style={{
            width: '30%',
            alignSelf: 'center',
            alignItems:'center',
            backgroundColor: 'white',
            height: 50,
            borderRadius: 30,
            flexDirection:'row',
            justifyContent:'space-between',
            borderColor:'lightgray',
            borderWidth:2,
            marginLeft:moderateScale(-230),
            marginTop:moderateVerticalScale(66),
            backgroundColor:'gray',
            opacity:.5
            }}>
            <Text style={{color: 'black',fontSize: 18, marginLeft:moderateVerticalScale(35)}}>
            All
            </Text>
        </View>

        <View style={{
            width: '30%',
            alignSelf: 'center',
            alignItems:'center',
            backgroundColor: 'white',
            borderColor:'lightgray',
            height: 50,
            borderRadius: 30,
            flexDirection:'row',
            justifyContent:'space-between',
            borderWidth:2,
            marginTop:moderateVerticalScale(-50),
            marginRight:moderateVerticalScale(-10),
            opacity:.5
            }}>
            <Text style={{color: 'black',fontSize: 18, marginLeft:moderateVerticalScale(30)}}>
            Sent
            </Text>
        </View>

        <View style={{
            width: '30%',
            alignSelf: 'center',
            alignItems:'center',
            backgroundColor: 'white',
            borderColor:'lightgray',
            height: 50,
            borderRadius: 30,
            flexDirection:'row',
            justifyContent:'space-between',
            borderWidth:2,
            marginTop:moderateVerticalScale(-50),
            marginRight:moderateVerticalScale(-240),
            opacity:.5
            }}>
            <Text style={{color: 'black',fontSize: 18, marginLeft:moderateVerticalScale(30)}}>
            Sent
            </Text>
        </View>
        <TransactionScreen/>
        <WalletHistory/>
    </View>
    {/* <Navigator/> */}
    </View>
  )
}

const styles= StyleSheet.create({
    con:{
        width:'100%',
        height:'100%',
        backgroundColor:'white',
        marginTop:moderateScale(-21)
    }
});