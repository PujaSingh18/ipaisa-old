/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { moderateVerticalScale } from 'react-native-size-matters';
const StatusBar = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: '100%',
        height:moderateVerticalScale(70),
        backgroundColor: '#000088',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 10,
      }}>
      <Pressable
      onPress={() => {
            navigation.navigate('HomeMainScreen');
          }}>
      <Image source={require(`../image/backArrow.png`)} />
      </Pressable>
      <View>
        <Text style={{color: '#fff', fontSize: 16, fontWeight:'bold', alignSelf:'center'}}>
          Mobile Recharge
        </Text>
      </View>
    </View>
  );
};

export default StatusBar;
