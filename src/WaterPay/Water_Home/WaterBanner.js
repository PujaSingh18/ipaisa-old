/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  verticalScale,
} from 'react-native-size-matters';

export default function WaterBanner() {
  return (
    <View>
      <Image
        source={require('../../image/Banner.png')}
        style={styles.banner}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  banner: {
    width: '94%',
    height: verticalScale(130),
    alignSelf: 'center',
    marginTop: moderateVerticalScale(25),
    borderRadius: moderateScale(10),
  },
});
