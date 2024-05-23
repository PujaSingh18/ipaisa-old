import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import BackComponent from '../../SvgImages/BackComponent';

export default function AtmHeader({data}) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: '100%',
        height: 75,
        //backgroundColor: 'white',
        justifyContent: 'flex-start',
        flexDirection: 'row',
      }}>
      <Pressable
        onPress={() => {
          navigation.navigate(`${data.prevPath}`);
        }}>
        <BackComponent
          style={{width: 50, height: 50, marginTop: moderateScale(25), marginLeft:moderateScale(15)}}
        />
      </Pressable>
      <View style={{marginLeft: moderateScale(20)}}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: 700,
            marginTop: moderateScale(20),
          }}>
        {data.title}
        </Text>
      </View>
    </View>
  )
}
