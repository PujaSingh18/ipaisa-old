import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import ATM from '../../SvgImages/ATM'
import PlusComponent from '../../SvgImages/PlusComponent'
import Navigator from '../../commonFooter/Navigator'
import AtmHeader from './AtmHeader'
import AtmScreen from './AtmScreen'
const data = {
  title:'i-ATM',
  prevPath: 'HomeMainScreen'
}
export default function AtmMain() {
  return (
    <>
    <View style={styles.bank}>
    <AtmHeader data={data}/>
    <View style={{marginTop:moderateScale(20),marginLeft:moderateVerticalScale(10)}}>
        <ImageBackground
          source={require('../../image/RectBanner.png')}
          style={{width:'98%', height:230}}
        />
        <View style={{ marginTop:moderateScale(-200), marginLeft:moderateVerticalScale(20)}}>
        <Text style={{color: 'white', fontWeight:'bold'}}>i-ATM</Text>
        </View>

        <View style={{alignItems:'center', marginTop:moderateScale(40)}}>
        <PlusComponent/>
        <Text style={{fontWeight:'bold', color:'white', fontSize:20, marginTop:moderateScale(20)}}>Add a new bank account</Text>
        </View>
    </View>
    <ATM style={{marginTop:moderateVerticalScale(80), marginLeft:moderateScale(90)}}/>
    <AtmScreen/>
    <Navigator/>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    bank:{
        width:'100%',
        height:'100%',
        backgroundColor:'white'
    }
})