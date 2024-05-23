import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import Arrow from '../../SvgImages/Arrow';
import WalletHistory from '../I-Wallet/WalletHistory';
import InvestScreen from './InvestScreen';


export default function InvestMain() {
  return (
  <>
    <View styles={StyleSheet.ab}>
      <LinearGradient
      colors={['#9AE5FD', '#DFF7FF']} // You can specify your gradient colors here
      style={styles.ab}>
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
          i-Invest
        </Text>
        <InvestScreen/>
      </LinearGradient>
      <WalletHistory/>
    </View>
  </>
  )
}

const styles=StyleSheet.create({
    ab:{
        width:'100%',
        height: 350
    }
});