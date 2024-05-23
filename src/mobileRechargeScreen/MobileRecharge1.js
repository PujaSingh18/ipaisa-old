/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Arr } from '../utils/Array';

export default function MobileRecharge1() {
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
        Recent Recharges
      </Text>
      {Arr.map((item, index) => (
        <View
          style={{
            marginLeft: 10,
            justifyContent: 'flex-start',
            flexDirection: 'row',
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
              }}>
              {item?.title}
            </Text>
            <Text style={{alignSelf: 'center'}}>{item.subtitle}</Text>
          </View>
        </View>
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
