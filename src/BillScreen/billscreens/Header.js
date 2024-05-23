/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
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
import IconComponent from '../../SvgImages/IconComponent';

export default function Header() {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <View style={styles.searchbox}>
        <Pressable
        onPress={() => {
            navigation.navigate('HomeMainScreen');
          }} style={styles.search}>
          <IconComponent/>
        </Pressable>
        <TextInput
          style={styles.searchText}
          placeholder="Search by supplier name"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: verticalScale(65),
    backgroundColor: '#0F62FE',
    justifyContent: 'flex-start',
  },
  searchbox: {
    width: '94%',
    height: verticalScale(45),
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: moderateVerticalScale(10),
    borderRadius: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: moderateScale(15),
  },
  search: {
    width: scale(35),
    height: 35,
    tintColor:'black',
    marginLeft:moderateScale(-20),
    marginTop:moderateScale(-15),
  },
  searchText: {
    marginLeft: moderateScale(1),
    fontSize: moderateScale(15),
    width:'94%',
  },
});
