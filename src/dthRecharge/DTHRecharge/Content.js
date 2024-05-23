/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';
import {
  moderateScale
} from 'react-native-size-matters';
import AComponent from '../../SvgImages/AComponent';

export default function Content() {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: moderateScale(-250),
        alignSelf: 'flex-start',
        marginLeft: moderateScale(42),
      }}>
      <AComponent/>
      <View style={{marginLeft: moderateScale(16)}}>
        <Text style={{fontWeight: 'bold', color: 'black'}}>
          Airtel Digital TV
        </Text>
        <Text>0000-0000-00</Text>
      </View>
    </View>
  );
}
