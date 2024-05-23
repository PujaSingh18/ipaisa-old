/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import User from '../SvgImages/User';

export default function Breadcrumb() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.user}>
          <Pressable onPress={()=>{
            navigation.navigate('ProfileMain');
          }}>
          <User/>
          </Pressable>
          <View style={{marginLeft:10}}>
            <Text style={{fontSize: 16, fontWeight: 700, color: 'black'}}>
              Reubin Chatta
            </Text>
            <Text style={{fontSize: 14, fontWeight: 400, color: 'black'}}>
              New Account
            </Text>
          </View>
        </View>
        <View style={styles.search}>
          <Image
            source={require(`../images/SearchFrame.png`)}
            style={{width: 50, height: 50, marginTop:moderateVerticalScale(10)}}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    height:moderateVerticalScale(25)
  },
  user: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    columnGap:moderateScale(10)
  },
  search: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
