/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import BackComponent from '../../SvgImages/BackComponent';
import IconComponent from '../../SvgImages/IconComponent';

export default function DHeader() {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <Pressable
      onPress={() => {
            navigation.navigate('HomeMainScreen');
          }} style={styles.search1}>
        <BackComponent/>
      </Pressable>
      <Text style={styles.searchText}>Bills & Recharges</Text>
      <Pressable style={styles.searchIcon}>
      <IconComponent/>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: verticalScale(65),
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  search: {
    width: scale(50),
    marginTop: moderateVerticalScale(10),
    marginLeft: moderateScale(5),
    height: 50,
    tintColor: 'black',
  },
  searchi: {
    width: scale(20),
    marginTop: moderateVerticalScale(23),
    marginLeft: moderateScale(10),
    height: 20,
    tintColor: 'black',
  },
  searchText: {
    marginLeft: moderateScale(50),
    fontSize: moderateScale(18),
    alignSelf: 'center',
    color: 'black',
    // eslint-disable-next-line no-dupe-keys
    fontSize: moderateScale(20),
  },
  search1: {
    width: scale(15),
    height: 15,
    marginTop:moderateScale(25),
    marginLeft:moderateScale(10),
  },
  searchIcon: {
    marginLeft: moderateScale(70),
    marginTop:moderateScale(10),
  },
});
