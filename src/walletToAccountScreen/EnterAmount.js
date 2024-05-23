/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Header from '../commonComponent/Header';

const data={
  heading: 'Wallet',
  prevPath: 'AccountDetailsScreen',
}

export default function EnterAmount({navigation}) {
  return (
    <View style={styles.container}>
      <Header data={data}/>
      <View style={styles.amount}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('../image/UserImage.png')}/>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 400,
              color: '#000',
              marginTop: 10,
            }}>
            Canara bank
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={require(`../image/inr.png`)} style={{}} />
          <TextInput
            placeholder="0"
            keyboardType="numeric"
            style={{height: 50}}
          />
        </View>

        <TextInput
          placeholder="Add A Note"
          style={{
            height: 50,
            width: 100,
            borderWidth: 1,
            borderRadius: 20,
            borderColor: 'gray',
          }}
        />
      </View>
      <Pressable
        onPress={() => {
          navigation.navigate('ReviewScreen');
        }}
        style={{
          width: '90%',
          height: 50,
          marginBottom: 10,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0f62fe',
          borderRadius: 40,
        }}>
        <Text style={{color: '#fff', fontSize: 20, fontWeight: 700}}>Pay</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  amount: {
    width: '100%',
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
});
