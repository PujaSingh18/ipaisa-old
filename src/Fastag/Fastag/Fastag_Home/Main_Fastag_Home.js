/* eslint-disable prettier/prettier */
import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import {
  moderateScale
} from 'react-native-size-matters';
import Banner from '../../../BillScreen/billscreens/Banner';
import Header from '../../../commonComponent/Header';
import FH_Banks from './FH_Banks';
import FH_SearchBar from './FH_SearchBar';
const data = {
  heading:'Select Bank',
  prevPath:'MainDiscovery',
}
export default function Main_Fastag_Home() {
  return (
    <View style={style.mainbg}>
      <Header data={data}/>
      <ScrollView>
        <Banner/>
        <FH_SearchBar/>
        <View style={style.ElecSuppliers}>
          <Text style={style.rechargeText}>Add new Biller (Fastag)</Text>
          <FH_Banks/>
        </View>
      </ScrollView>
    </View>
  );
}

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
const style = StyleSheet.create({
  mainbg: {
    backgroundColor: '#EFF4FF',
    height: HEIGHT,
    width: WIDTH,
  },
  ElecSuppliers: {
    width: '94%',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: moderateScale(15),
  },
  rechargeText: {
    marginLeft: moderateScale(15),
    marginTop: moderateScale(10),
    fontWeight: 'bold',
    color: 'black',
    fontSize: moderateScale(16),
  },
});
