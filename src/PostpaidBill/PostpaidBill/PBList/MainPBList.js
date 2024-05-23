/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  moderateScale
} from 'react-native-size-matters';
import Header from '../../../commonComponent/Header';
import PBSearchBar from '../PBSearchBar';
import PBListContacts from './PBListContacts';

const data = {
  heading:'PostPaid Biller',
  prevPath:'MainDiscovery',
}


export default function MainPBList() {
  return (
    <View style={style.mainbg}>
      <Header data={data}/>
      <PBSearchBar/>
      <ScrollView>
        <View style={style.ElecSuppliers}>
          <Text style={style.rechargeText}>Contacts</Text>
          <PBListContacts/>
        </View>
      </ScrollView>
    </View>
  );
}

const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;
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
    paddingLeft: moderateScale(16),
    paddingRight: moderateScale(16),
  },
  rechargeText: {
    justifyContent: 'flex-start',
    marginTop: moderateScale(10),
    fontWeight: 'bold',
    color: 'black',
    fontSize: moderateScale(16),
  },
});
