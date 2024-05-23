/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, StyleSheet } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import Slick from 'react-native-slick';

export default function HeroSection() {
  const navigation = useNavigation();

  return (
    <Slick style={{height:moderateScale(187),}} showsButtons={false} loop={true} autoplay={true} speed={1000} autoplaySpeed={0}>
    <Pressable onPress={() => {
      navigation.navigate('WalletMain');
    }} style={styles.container}>
    <Image source={require('../image/PayBanner.png')} style={styles.img}/>
    </Pressable>

    <Pressable style={styles.container}
    onPress={() => {
      navigation.navigate('InvestMain');
    }}>
    <Image source={require('../image/PayBanner1.png')} style={styles.img }/>
    </Pressable>

    <Pressable  onPress={() => {
      navigation.navigate('AtmMain');
    }} style={styles.container}>
    <Image source={require('../image/PayBanner2.png')} style={styles.img}/>
    </Pressable>
    </Slick>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    width: '106%',
    flexDirection: 'row',
    alignSelf:'center',
    marginTop:moderateVerticalScale(7)
  },
  img:{
    width:'105.5%',
    height:moderateScale(180),
    marginTop:moderateScale(-30),
    borderWidth:2,
    borderRadius:8,
    alignSelf:'center',
    marginLeft:moderateScale(-9)
  }
});
