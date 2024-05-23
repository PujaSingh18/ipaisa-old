/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import PaymentPopularPlan from '../card/payment/PaymentPopularPlan';
import Header from '../commonComponent/Header';
import { planArr } from '../utils/allArray';
import SearchBar from './SearchBar';
const data = {
  heading:'Rubin',
  subheading: '+91 9876543210',
  prevPath:'Recharge1',
}

export default function PaymentDetails() {
  return (
    <View style={styles.container}>
      <View style={{width: '100%', height: 50}}>
      <Header data={data}/>
      </View>
      <View style={{width: '100%', height: 100, marginTop:moderateScale(25)}}>
        <SearchBar />
      </View>
      <ScrollView>
        <View style={{width: '105%', height: '100%'}}>
          <Text style={{color: 'black', fontWeight: 700, fontSize: 15, marginLeft:moderateScale(15)}}>
            Popular plans
          </Text>
          {planArr.map(item => (
            <PaymentPopularPlan key={item.id} item={item} />
          ))}
          <Text style={{fontWeight: 700, fontSize: 15, marginTop:moderateScale(20), marginLeft:moderateScale(10)}}>
            Other Plans
          </Text>
          {planArr.map(item => (
            <PaymentPopularPlan key={item.id} item={item} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});
