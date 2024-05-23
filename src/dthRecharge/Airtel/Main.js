/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Header from '../../commonComponent/Header';
import Footer from '../../commonFooter/Footer';
import AirtelScreen from './AirtelScreen';
const data = {
  heading:'Airtel Digital TV',
  prevPath:'MainDTH',
}

export default function Main() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{width: '100%', height: 50}}>
      <Header data={data}/>
      </View>
      <AirtelScreen />
      <Footer/>
      <View
        style={{
          width: '100%',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
          marginBottom: 40,
        }}>
        <Pressable
          onPress={()=>{
            navigation.navigate('Main_DTH');
          }}
          style={{
            width: '90%',
            backgroundColor: '#0378FF',
            height: 50,
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', fontWeight: 700, fontSize: 15}}>
            Confirm
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
    backgroundColor: '#EFF4FF',
  },
});
