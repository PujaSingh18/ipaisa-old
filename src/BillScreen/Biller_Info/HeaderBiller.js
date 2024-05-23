/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';

export default function Header() {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <Pressable
      onPress={() => {
            navigation.navigate('MainPage');
          }} style={styles.search1}>
        <Image
          source={require('../../image/backArrow.png')}
          style={styles.search}
        />
      </Pressable>
      <Text style={styles.searchText}>BESCOM</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: verticalScale(65),
    backgroundColor: '#0F62FE',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  search: {
    width: scale(40),
    marginTop: moderateVerticalScale(16),
    marginLeft: moderateScale(5),
    height: 40,
    tintColor: 'white',
  },
  searchText: {
    marginLeft: moderateScale(40),
    fontSize: moderateScale(18),
    alignSelf: 'center',
    color: 'white',
  },
  search1: {
    width: scale(15),
    height: 15,
  },
});
