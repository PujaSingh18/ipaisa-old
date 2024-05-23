import React from 'react';
import { StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import BackBlack from '../../SvgImages/BackBlack';
import WalletHistory from './WalletHistory';
import WalletScreen from './WalletScreen';

export default function WalletMain() {
  return (
    <>
      <LinearGradient
        colors={['#008', '#0350DF']} // You can specify your gradient colors here
        style={styles.container}>
        <BackBlack
          style={{
            marginTop: moderateVerticalScale(25),
            marginLeft: moderateScale(10),
          }}
        />
        <Text
          style={{
            fontSize: 20,
            color: 'white',
            fontWeight: 'bold',
            marginLeft: moderateScale(60),
            marginTop: moderateVerticalScale(-25),
          }}>
          i-Wallet
        </Text>
        <WalletScreen />
      </LinearGradient>
      <WalletHistory />
      {/* <Navigator /> */}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 280,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
