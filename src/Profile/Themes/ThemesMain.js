import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import AboutIpaisa from '../../SvgImages/AboutIpaisa';
import PrivacyComponent from '../../SvgImages/PrivacyComponent';
import RefundComponent from '../../SvgImages/RefundComponent';
import TermComponent from '../../SvgImages/TermComponent';
import Header from '../../commonComponent/Header';

const data = {
  heading: 'Policies',
  prevPath: 'ProfileMain',
};

export default function ThemesMain() {
  return (
    <>
      <Header data={data} />
      <View style={styles.a}>
        <View
          style={{
            marginTop: moderateVerticalScale(20),
            marginLeft: moderateScale(20),
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <AboutIpaisa />
          <Text style={{fontSize: 15, fontWeight: '500', color: 'black'}}>
            About iPaisa
          </Text>
        </View>

        <View
          style={{
            marginTop: moderateVerticalScale(25),
            marginLeft: moderateScale(25),
            alignItems: 'center',
            flexDirection: 'row',
            gap: 10,
          }}>
          <PrivacyComponent />
          <Text style={{fontSize: 15, fontWeight: '500', color: 'black'}}>
            Privacy Policy
          </Text>
        </View>

        <View
          style={{
            marginTop: moderateVerticalScale(30),
            marginLeft: moderateScale(25),
            alignItems: 'center',
            flexDirection: 'row',
            gap: 10,
          }}>
          <RefundComponent />
          <Text style={{fontSize: 15, fontWeight: '500', color: 'black'}}>
            Refund Policy
          </Text>
        </View>

        <View
          style={{
            marginTop: moderateVerticalScale(30),
            marginLeft: moderateScale(25),
            alignItems: 'center',
            flexDirection: 'row',
            gap: 10,
          }}>
          <TermComponent />
          <Text style={{fontSize: 15, fontWeight: '500', color: 'black'}}>
            Terms and Conditions
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  a: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
});
