/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import Banner from '../BillScreen/billscreens/Banner';
import FinaComponent from '../SvgImages/FinaComponent';
import Navigator from '../commonFooter/Navigator';
import Breadcrumb from './Breadcrumb';
import HeroSection from './HeroSection';
import Insurance from './Insurance';
import PaymentMethod from './PaymentMethod';
import Travel_and_Bookings from './Travel_and_Bookings';
import UtilityPayments from './UtilityPayments';
export default function HomeMainScreen() {
  return (
    <>
      <View
        style={{
          width: '100%',
          height: '100%',
          gap: 10,
          backgroundColor: '#C9E2FF',
        }}>
        <Breadcrumb />
        <ScrollView>
          <HeroSection />
          <LinearGradient
            colors={['#0378FF', '#C9E2FF']} // You can specify your gradient colors here
            style={styles.pm}>
            <Text
              style={{
                marginLeft: moderateScale(20),
                marginTop: moderateScale(10),
                fontWeight: 'bold',
                color: 'black',
                fontSize: moderateScale(13),
              }}>
              Payment Modes
            </Text>
            <PaymentMethod />
          </LinearGradient>

          <LinearGradient
            colors={['#0378FF', '#C9E2FF']} // You can specify your gradient colors here
            style={styles.up}>
            <Text
              style={{
                marginLeft: moderateScale(20),
                marginTop: moderateScale(10),
                fontWeight: 'bold',
                color: 'black',
                fontSize: moderateScale(13),
              }}>
              Utilities payment by BBPS
            </Text>
            <UtilityPayments />
          </LinearGradient>

          <FinaComponent
            style={{alignSelf: 'center', marginTop: moderateScale(3)}}
          />

          <LinearGradient
            colors={['#0378FF', '#C9E2FF']} // You can specify your gradient colors here
            style={styles.tb}>
            <Text
              style={{
                marginLeft: moderateScale(20),
                marginTop: moderateScale(10),
                fontWeight: 'bold',
                color: 'black',
                fontSize: moderateScale(13),
              }}>
              Travel & Bookings
            </Text>
            <Travel_and_Bookings />
          </LinearGradient>

          <LinearGradient
            colors={['#0378FF', '#C9E2FF']} // You can specify your gradient colors here
            style={styles.insurance}>
            <Text
              style={{
                marginLeft: moderateScale(20),
                marginTop: moderateScale(10),
                fontWeight: 'bold',
                color: 'black',
                fontSize: moderateScale(13),
              }}>
              Insurance
            </Text>
            <Insurance />
          </LinearGradient>

          <View style={{marginTop: moderateScale(-22)}}>
            <Banner />
          </View>
        </ScrollView>
        <Navigator />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  pm: {
    width: '97%',
    height: moderateVerticalScale(120),
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#2E86C1',
    marginTop: moderateVerticalScale(-2),
  },
  up: {
    width: '97%',
    height: 'auto',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#2E86C1',
    marginTop: moderateVerticalScale(3),
  },
  tb: {
    width: '97%',
    height: moderateVerticalScale(120),
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#2E86C1',
    marginTop: moderateVerticalScale(3),
  },
  insurance: {
    marginTop: moderateVerticalScale(3),
    width: '97%',
    height: 'auto',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#2E86C1',
    //backgroundColor:'white'
  },
});
