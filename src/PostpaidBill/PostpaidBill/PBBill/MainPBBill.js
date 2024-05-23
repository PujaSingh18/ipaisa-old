/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale
} from 'react-native-size-matters';
import Header from '../../../commonComponent/Header';
import PBBillDetails from './PBBillDetails';
import PriceCard from './PriceCard';

const data = {
  heading:'PostPaid Biller',
  prevPath:'MainPBOperators',
}

export default function MainPBBill() {
    const navigation = useNavigation();
  return (
    <View style={style.mainbg}>
      <Header data={data}/>
      <PBBillDetails/>
      <View style={style.ElecSuppliers}>
        <Text style={style.rechargeText}>Bill details</Text>
      </View>
      <View
        style={{
          width: '80%',
          alignSelf: 'center',
          marginTop: moderateVerticalScale(-255),
          rowGap: 15,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 14, fontWeight: '500'}}>Consumer name</Text>
          <Text style={{fontWeight: 'bold', color: 'black'}}>Joe Goldberg</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 14, fontWeight: '500'}}>Bill number</Text>
          <Text style={{fontWeight: 'bold', color: 'black'}}>12132344</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 14, fontWeight: '500'}}>Bill date</Text>
          <Text style={{fontWeight: 'bold', color: 'black'}}>12 Feb 2023</Text>
        </View>
      </View>
      <PriceCard/>
      <Pressable
      onPress={() => {
            navigation.navigate('RechargeSuccessfully');
          }}
       style={style.main}>
        <Text style={style.clr}>Pay Bill</Text>
      </Pressable>
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
    paddingLeft: moderateScale(16),
    paddingRight: moderateScale(16),
  },
  rechargeText: {
    marginLeft: moderateScale(10),
    marginTop: moderateScale(-310),
    fontWeight: 'bold',
    color: 'black',
    fontSize: moderateScale(16),
    backgroundColor: 'white',
  },
  main: {
    backgroundColor: '#0378FF',
    borderRadius: moderateScale(40),
    width: '90%',
    alignSelf: 'center',
    marginTop: moderateVerticalScale(180),
    height: moderateVerticalScale(40),
  },
  clr: {
    color: 'white',
    alignSelf: 'center',
    marginTop: moderateScale(8),
    fontSize: moderateScale(17),
  },
});
