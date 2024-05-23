/* eslint-disable prettier/prettier */
import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, Image, Pressable, StyleSheet, Text } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import LogoComponent from '../SvgImages/LogoComponent';
import PhoneComponent from '../SvgImages/PhoneComponent';

const FadeInView = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};


export default function MainLoginScreen({navigation}) {
  return (
    <>
      <Image source={require('../image/LogoPage.png')} style={style.mainbg} />
      <LogoComponent style={style.image} />
      <FadeInView>
      <Pressable
      onPress={()=>(
        navigation.navigate('LoginWithPhone')
      )}
        style={{
          height: moderateVerticalScale(56),
          width: moderateScale(312),
          backgroundColor: 'white',
          alignSelf: 'center',
          borderRadius: 8,
          marginTop: moderateVerticalScale(300),
          opacity:.5
        }}>
          <PhoneComponent style={{marginTop:moderateVerticalScale(10), marginLeft:moderateScale(10)}}/>
          
          <Text style={{fontSize:20, fontWeight:'bold', color:'white', marginTop:moderateVerticalScale(-28), alignSelf:'center', marginLeft:moderateScale(20)}}>Login with phone number</Text>
          
        </Pressable>
        
        <Text style={{fontSize:15,color:'white', marginTop:moderateVerticalScale(10), alignSelf:'center', textAlign:'center'}}>By Logging in you agree to our terms and {"\n"}condition and privacy policy which also {"\n"}tells you how we use your data</Text>
        </FadeInView>
    </>
  );
}

const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;
const HEIGHT1 = Dimensions.get('screen').height;
const WIDTH1 = Dimensions.get('screen').width;
const style = StyleSheet.create({
  mainbg: {
    backgroundColor: '#EFF4FF',
    height: HEIGHT,
    width: WIDTH,
    marginTop: moderateVerticalScale(-40),
  },
  image: {
    height: HEIGHT1,
    width: WIDTH1,
    marginTop: moderateVerticalScale(-600),
    alignSelf: 'center',
  },
});
