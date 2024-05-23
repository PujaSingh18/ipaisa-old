/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, Dimensions, Button} from 'react-native';
import React from 'react';

import Consumerid from './Consumerid';
import PayBillHeader from './PayBillHeader';

export default function PayMain() {
  return (
    <View style={styles.mainbg}>
    <PayBillHeader/>
      <Consumerid />
    </View>
  );
}

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
  mainbg: {
    backgroundColor: '#EFF4FF',
    height: HEIGHT,
    width: WIDTH,
  },
});
