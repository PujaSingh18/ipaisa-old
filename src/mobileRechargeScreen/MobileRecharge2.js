/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { moderateVerticalScale } from 'react-native-size-matters';
import { Arr1 } from '../utils/Array';

export default function MobileRecharge2() {
  const navigation = useNavigation();

  const goToScreen = () => {
    navigation.navigate('PaymentDetails');
  };
  return (
    <View style={style.a}>
      <Text
        style={{
          marginTop: -10,
          marginLeft: 15,
          justifyContent: 'flex-start',
          fontWeight: 'bold',
          color: 'black',
          fontSize: 16,
        }}>
        Mobile Operators
      </Text>
      {Arr1.map((item, index) => (
        <Pressable
          onPress={goToScreen}
          style={{
            marginLeft: 10,
            justifyContent: 'flex-start',
            flexDirection: 'row'
          }}
          key={index}>
            {item.img}
          {/* <Image source={item.img} style={{width: 50, height: 50}} /> */}
          <View style={{marginLeft: 15}}>
            <Text
              style={{
                alignSelf: 'flex-start',
                fontWeight: 'bold',
                color: 'black',
                fontSize: 15,
                marginTop:moderateVerticalScale(10)
              }}>
              {item?.title}
            </Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
}

const style = StyleSheet.create({
  a: {
    width: '95%',
    height: 310,
    alignSelf: 'center',
    justifyContent: 'center',
    rowGap: 15,
    borderWidth: 0.5,
    borderRadius: 15,
    borderColor: 'lightgray',
    backgroundColor: 'white',
  },
});
