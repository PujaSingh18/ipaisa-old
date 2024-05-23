import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import PrintComponent from '../SvgImages/PrintComponent';
import QRCode from '../SvgImages/QRCode';
import StarComponent from '../SvgImages/StarComponent';
import ThemesComponent from '../SvgImages/ThemesComponent';
import ToggleButtonExample from '../commonFooter/ToggleButtonExample';

const Logout = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.view}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'black',
            marginTop: moderateVerticalScale(20),
            marginLeft: moderateScale(20),
          }}>
          Settings
        </Text>

        <View style={{rowGap: 40}}>
          <Pressable
            onPress={() => {
              navigation.navigate('LanguageMain');
            }}>
            <QRCode style={{marginLeft: moderateVerticalScale(20)}} />
            <Text
              style={{
                fontSize: 15,
                color: 'black',
                marginTop: moderateScale(-40),
                marginLeft: moderateVerticalScale(70),
              }}>
              Languages
            </Text>
            <Text style={{fontSize: 13, marginLeft: moderateVerticalScale(70)}}>
              Select your preferred language
            </Text>
          </Pressable>

          <View>
            <ThemesComponent style={{marginLeft: moderateVerticalScale(20)}} />
            <Text
              style={{
                fontSize: 15,
                color: 'black',
                marginTop: moderateScale(-40),
                marginLeft: moderateVerticalScale(70),
              }}>
              Themes
            </Text>
            <Text style={{fontSize: 13, marginLeft: moderateVerticalScale(70)}}>
              Theme & wallpapers
            </Text>
          </View>

          <View>
            <PrintComponent style={{marginLeft: moderateVerticalScale(20)}} />
            <Text
              style={{
                fontSize: 15,
                color: 'black',
                marginTop: moderateScale(-40),
                marginLeft: moderateVerticalScale(70),
              }}>
              Screen Lock
            </Text>
            <Text style={{fontSize: 13, marginLeft: moderateVerticalScale(70)}}>
              Biometric and Screen Lock
            </Text>
            <ToggleButtonExample style={{marginTop: moderateScale(-40)}} />
          </View>

          <Pressable
            onPress={() => {
              navigation.navigate('ChangeOldPasswordMain');
            }}>
            <StarComponent style={{marginLeft: moderateVerticalScale(20)}} />
            <Text
              style={{
                fontSize: 15,
                color: 'black',
                marginTop: moderateScale(-40),
                marginLeft: moderateVerticalScale(70),
              }}>
              Change Password
            </Text>
            <Text style={{fontSize: 13, marginLeft: moderateVerticalScale(70)}}>
              Privacy Settings
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    width: '94%',
    height: moderateVerticalScale(330),
    marginTop: moderateScale(25),
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: moderateScale(20),
    gap: 20,
  },
});
export default Logout;
