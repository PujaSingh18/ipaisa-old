import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import Bank from '../SvgImages/Bank'
import DCCC from '../SvgImages/DCCC'
import GiftLight from '../SvgImages/GiftLight'
import MoneyLight from '../SvgImages/MoneyLight'

const PayMethods = () => {
    return (
        <>
            <View style={styles.view}>
                <Text style={{fontSize:15, fontWeight:'bold', color:'black', marginLeft:moderateScale(10), marginTop:moderateVerticalScale(20)}}>Payment Methods</Text>
            </View>

            <View style={{flexDirection:'row', justifyContent:'space-between', width:'90%', alignSelf:'center', marginTop:moderateVerticalScale(-90)}}>
                <View style={styles.a}>
                    <MoneyLight style={{width:moderateScale(50), height:moderateVerticalScale(50)}}/>
                </View>

                <View style={styles.a}>
                    <Bank style={{width:moderateScale(50), height:moderateVerticalScale(50)}}/>
                </View>

                <View style={styles.a}>
                    <DCCC style={{width:moderateScale(50), height:moderateVerticalScale(50)}}/>
                </View>

                <View style={styles.a}>
                    <GiftLight style={{width:moderateScale(50), height:moderateVerticalScale(50)}}/>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 10,
        width: '94%',
        height: moderateVerticalScale(150),
        marginTop: moderateScale(10),
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: moderateScale(20)
    },
    a: {
        alignSelf: 'center',
        alignItems: 'center'
    }
})
export default PayMethods