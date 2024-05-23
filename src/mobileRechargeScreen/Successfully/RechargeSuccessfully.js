/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import RechargeSuccess from './RechargeSuccess';

export default function RechargeSuccessfully() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <RechargeSuccess />
      </View>

      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
          marginBottom: 25,
        }}>
        <Pressable
        onPress={() => {
            navigation.navigate('HomeMainScreen');
          }}
          style={{
            width: '90%',
            backgroundColor: 'white',
            height: 50,
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#000088', fontWeight: 700, fontSize: 15}}>
            Done
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#0378FF',
  },
});
