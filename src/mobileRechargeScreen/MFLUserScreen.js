/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import PaymentConformCard from '../card/payment/PaymentConformCard';
import Header from '../commonComponent/Header';

const data = {
  heading:'Rubin',
  subheading:'+91 9876543321',
  prevPath:'PaymentDetails',
}

const MFLUserScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{width: '100%', height: 50}}>
      <Header data={data}/>
      </View>
      <View style={{width: '100%', height: 300, alignItems: 'center'}}>
        <PaymentConformCard />
      </View>
      <View
        style={{
          width: '100%',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
          marginBottom: 10,
        }}>
        <Pressable
          onPress={()=>{
            navigation.navigate('RechargeSuccessfully');
          }}
          style={{
            width: '80%',
            alignSelf: 'center',
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
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor:'#EFF4FF'
  },
});
export default MFLUserScreen;
