/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Dimensions,
  StyleSheet,
  View
} from 'react-native';
import {
  moderateScale
} from 'react-native-size-matters';
import Header from '../../../commonComponent/Header';
import PBContactCard from './PBContactCard';
import SelectOperator from './SelectOperator';

const data = {
  heading:'PostPaid Biller',
  prevPath:'MainPBList',
}

export default function MainPBOperators() {
  return (
    <View style={style.mainbg}>
      <Header data={data}/>
      <PBContactCard/>
      <SelectOperator/>
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
