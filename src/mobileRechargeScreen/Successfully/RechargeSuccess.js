/* eslint-disable prettier/prettier */
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function RechargeSuccess() {
  return (
    <View style={StyleSheet.container}>
      <View style={{marginTop: 400}}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: 'white',
              alignItems: 'center',
            }}>
            900 recharge for Riya
          </Text>
        </View>

        <View style={{alignItems: 'center', marginBottom: 50}}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: 'white',
              alignItems: 'center',
            }}>
            done successfully
          </Text>
        </View>
      </View>

      <Pressable
        style={{
          alignSelf: 'center',
          backgroundColor: '#0378FF',
          borderRadius: 30,
          borderWidth: 1,
          borderColor: 'white',
          alignItems: 'center',
          width: '50%',
          height: 50,
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white', fontWeight: 700, fontSize: 15}}>
          Share Reciept
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});
