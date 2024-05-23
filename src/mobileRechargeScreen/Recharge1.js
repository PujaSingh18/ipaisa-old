/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import Header from '../commonComponent/Header';
import MobileRecharge1 from './MobileRecharge1';
import MobileRecharge2 from './MobileRecharge2';
import SearchBar from './SearchBar';
const data = {
  heading:'Mobile Recharge',
  prevPath:'HomeMainScreen',
}

export default function Recharge1() {
  return (
    <>
    <Header data={data}/>
      <SearchBar/>
      <ScrollView>
        <View style={styles.container}>
          <ScrollView>
            <View style={{width: '98%', alignSelf: 'center'}}>
              <MobileRecharge1 />
            </View>
            <View style={{width: '98%', alignSelf: 'center', marginTop: 20}}>
              <MobileRecharge2 />
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 1000,
    backgroundColor: '#EFF4FF',
  },
});
