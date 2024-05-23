/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Pressable,
  StyleSheet,
  TextInput,
  View
} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import IconComponent from '../../../SvgImages/IconComponent';

export default function FH_SearchBar() {
  return (
    <View style={styles.searchbox}>
      <Pressable style={styles.search}>
      <IconComponent style={{marginLeft:moderateScale(-15)}}/>
      </Pressable>
      <TextInput style={styles.searchText} placeholder="Search by provider" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: verticalScale(65),
    backgroundColor: '#000088',
    justifyContent: 'flex-start',
  },
  searchbox: {
    width: '94%',
    height: verticalScale(45),
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: moderateVerticalScale(15),
    borderRadius: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: moderateScale(10),
  },
  search: {
    width: scale(15),
    height: 15,
    marginTop:moderateScale(-30),
  },
  searchText: {
    marginLeft: moderateScale(35),
    fontSize: moderateScale(15),
    width:'94%'
  },
});
