/* eslint-disable prettier/prettier */
import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';

export default function Prices() {
  return (
    <View
      style={{
        width:'74%',
        marginLeft: moderateScale(36),
        marginTop: moderateScale(20),
        flexDirection: 'row',
        // columnGap:25,
        justifyContent:'space-around'
      }}>
      <Pressable>
        <View
          style={{
            borderWidth: 1.5,
            width: '150%',
            height: moderateScale(35),
            justifyContent: 'center',
            borderRadius: 8,
            borderColor: '#0378FF',
          }}>
          <Text style={{alignSelf: 'center', fontSize: 14, color: '#0378FF'}}>
            {'\u20B9'}100
          </Text>
        </View>
      </Pressable>

      <Pressable>
        <View
          style={{
            borderWidth: 1.5,
            width: '150%',
            height: moderateScale(35),
            justifyContent: 'center',
            borderRadius: 8,
            borderColor: '#0378FF',
          }}>
          <Text style={{alignSelf: 'center', fontSize: 14, color: '#0378FF'}}>
            {'\u20B9'}500
          </Text>
        </View>
      </Pressable>

      <Pressable>
        <View
          style={{
            borderWidth: 1.5,
            width: '150%',
            height: moderateScale(35),
            justifyContent: 'center',
            borderRadius: 8,
            borderColor: '#0378FF',
          }}>
          <Text style={{alignSelf: 'center', fontSize: 14, color: '#0378FF'}}>
            {'\u20B9'}1000
          </Text>
        </View>
      </Pressable>

      <Pressable>
        <View
          style={{
            borderWidth: 1.5,
            width: '150%',
            height: moderateScale(35),
            justifyContent: 'center',
            borderRadius: 8,
            borderColor: '#0378FF',
            marginLeft:moderateScale(5)
          }}>
          <Text style={{alignSelf: 'center', fontSize: 14, color: '#0378FF'}}>
            {'\u20B9'}1500
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
