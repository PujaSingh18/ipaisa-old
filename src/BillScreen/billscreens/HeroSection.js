/* eslint-disable prettier/prettier */
import {Image, View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';

export default function HeroSection() {
  return (
    <View style={styles.RecentBills}>
      <View>
        <Text style={styles.recentbilltext}>Recent Bills</Text>
        <View style={styles.Mahavitaran}>
          <Image
            source={require('../../image/Mahavitaran.png')}
            style={styles.mhvtrn}
          />
          <View style={styles.mhvtrnText}>
            <View>
              <Text style={styles.mhvtrnBold}>Mahavitaran</Text>
            </View>
            <View>
              <Text>181222399982</Text>
            </View>
          </View>
          <Pressable style={styles.search}>
            <Image
              source={require('../../image/3dots.png')}
              style={styles.threedots}
            />
          </Pressable>
        </View>
        <View style={styles.duedate}>
          <Text style={styles.duedateText}>
            {'\u20B9'}2023 bill due in 3 days
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  RecentBills: {
    width: '94%',
    height: verticalScale(130),
    backgroundColor: 'white',
    marginTop: moderateVerticalScale(25),
    borderRadius: moderateScale(10),
    alignSelf: 'center',
  },
  recentbilltext: {
    marginLeft: moderateScale(15),
    marginTop: moderateScale(10),
    fontWeight: 'bold',
    color: 'black',
  },
  Mahavitaran: {
    width: '94%',
    height: moderateVerticalScale(55),
    marginTop: moderateScale(8),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: moderateScale(15),
  },
  duedate: {
    width: '94%',
    height: moderateVerticalScale(25),
    marginTop: moderateScale(5),
    paddingLeft: moderateScale(84),
    alignSelf: 'center',
  },
  duedateText: {
    color: '#FF0000',
  },
  mhvtrn: {
    width: scale(50),
    height: 50,
  },
  mhvtrnText: {
    marginLeft: moderateScale(20),
  },
  mhvtrnBold: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: moderateScale(16),
  },
  threedots: {
    marginLeft: moderateScale(110),
  },
});
