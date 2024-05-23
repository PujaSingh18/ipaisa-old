import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import AboutIpaisa from '../SvgImages/AboutIpaisa';
import LogoutComponent from '../SvgImages/LogoutComponent';
import Header from '../commonComponent/Header';
import Logout from '../commonComponent/Logout';
import PayMethods from '../commonComponent/PayMethods';
import UserProfile from '../commonComponent/UserProfile';
import Navigator from '../commonFooter/Navigator';

const data = {
  heading: ' User Profile',
  prevPath: 'HomeMainScreen',
};
const ProfileMain = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.a}>
      <Header data={data} />
      <ScrollView>
        <UserProfile />
        <PayMethods />
        <Logout />

        <Pressable
          style={styles.d}
          onPress={() => {
            navigation.navigate('ThemesMain');
          }}>
          <AboutIpaisa
            style={{
              marginTop: moderateScale(20),
              marginLeft: moderateScale(10),
            }}
          />
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              marginTop: moderateVerticalScale(20),
              marginLeft: moderateScale(10),
            }}>
            About iPaisa
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginTop: moderateVerticalScale(45),
              marginLeft: moderateVerticalScale(-120),
            }}>
            Privacy settings
          </Text>
        </Pressable>

        <View style={styles.e}>
          <LogoutComponent
            style={{
              marginTop: moderateScale(30),
              marginLeft: moderateScale(20),
            }}
          />
          <Text
            style={{
              fontSize: 20,
              color: 'red',
              marginTop: moderateVerticalScale(20),
              marginLeft: moderateScale(20),
              fontWeight:'bold',
            }}>
            Logout
          </Text>
          {/* <Text
            style={{
              fontSize: 14,
              marginTop: moderateVerticalScale(45),
              marginLeft: moderateVerticalScale(-65),
            }}>
            Privacy settings
          </Text> */}
        </View>
      </ScrollView>
      <Navigator />
      <View style={styles.a1}></View>
    </View>
  );
};
const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  a: {
    height: HEIGHT,
    width: WIDTH,
    backgroundColor: '#F2F8FF',
  },
  a1: {
    height: '9%',
    width: '100%',
    backgroundColor: '#F2F8FF',
  },
  d: {
    marginTop: moderateVerticalScale(10),
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    width: '94%',
    height: 80,
    alignSelf: 'center',
    justifyContent: 'flex-start',
    borderRadius: 20,
  },
  e: {
    marginTop: moderateVerticalScale(10),
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    width: '94%',
    height: 80,
    alignSelf: 'center',
    justifyContent: 'flex-start',
    borderRadius: 20,
    marginBottom: moderateVerticalScale(30),
  },
});

export default ProfileMain;
