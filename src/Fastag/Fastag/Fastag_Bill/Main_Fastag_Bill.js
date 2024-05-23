/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale
} from 'react-native-size-matters';

import Header from '../../../commonComponent/Header';
import FB_Details from './FB_Details';
const data = {
  heading:'Fastag Bill',
  prevPath:'Main_Fastag_Recharge',
}
export default function Main_Fastag_Bill() {
  const navigation = useNavigation();
  return (
    <View style={style.mainbg}>
      <Header data={data}/>
      <View style={style.ElecSuppliers}>
        <FB_Details />
        <Text style={style.rechargeText}>Bill details</Text>
      </View>
      <View
        style={{
          width: '83%',
          alignSelf: 'center',
          marginTop: moderateVerticalScale(20),
          rowGap: 15,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>Consumer name</Text>
          <Text style={{fontWeight: 'bold', color: 'black'}}>Joe Goldberg</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>Fastag Balance</Text>
          <Text style={{fontWeight: 'bold', color: 'black'}}>100.20</Text>
        </View>
      </View>
      <View style={style.recharge}>
        <TextInput
          keyboardType="numeric"
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: '#0378FF',
            marginTop: moderateScale(5),
          }}>
          {'\u20B9'} 800
        </TextInput>
      </View>
      <View
        style={{
          borderBottomWidth: moderateScale(1),
          marginTop: moderateScale(-100),
          opacity: 0.2,
          width: '78%',
          alignSelf: 'center',
        }}></View>
      <Text style={style.rechargea}>Quick Recharge</Text>
      <View
        style={{
          marginLeft: moderateScale(50),
          marginTop: moderateVerticalScale(-115),
          alignSelf: 'flex-start',
          width: '84%',
          flexDirection: 'row',
          columnGap: 8,
        }}>
        <View
          style={{
            alignSelf: 'center',
            borderWidth: 0.5,
            padding: moderateScale(8),
            borderRadius: 10,
            borderColor: 'lightgray',
          }}>
          <Text style={{color: '#0378FF', fontWeight: 'bold'}}>
            {'\u20B9'} 100
          </Text>
        </View>

        <View
          style={{
            alignSelf: 'center',
            borderWidth: 0.5,
            padding: moderateScale(8),
            borderRadius: 10,
            borderColor: 'lightgray',
          }}>
          <Text style={{color: '#0378FF', fontWeight: 'bold'}}>
            {'\u20B9'} 500
          </Text>
        </View>

        <View
          style={{
            alignSelf: 'center',
            borderWidth: 0.5,
            padding: moderateScale(8),
            borderRadius: 10,
            borderColor: 'lightgray',
          }}>
          <Text style={{color: '#0378FF', fontWeight: 'bold'}}>
            {'\u20B9'} 1000
          </Text>
        </View>

        <View
          style={{
            alignSelf: 'center',
            borderWidth: 0.5,
            padding: moderateScale(8),
            borderRadius: 10,
            borderColor: 'lightgray',
          }}>
          <Text style={{color: '#0378FF', fontWeight: 'bold'}}>
            {'\u20B9'} 1500
          </Text>
        </View>
      </View>
      <Pressable 
      onPress={()=>{
        navigation.navigate('MainDiscovery');
      }} style={style.main}>
        <Text style={style.clr}>Pay Bill</Text>
      </Pressable>
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
  rechargeText: {
    marginLeft: moderateScale(29),
    marginTop: moderateScale(-310),
    fontWeight: 'bold',
    color: 'black',
    fontSize: moderateScale(16),
    backgroundColor: 'white',
  },
  b: {
    marginLeft: moderateScale(29),
    marginTop: moderateScale(),
    fontWeight: 'bold',
    color: 'black',
    fontSize: moderateScale(16),
  },
  recharge: {
    alignSelf: 'center',
    marginTop: moderateScale(20),
    fontWeight: 'bold',
    color: 'black',
    fontSize: moderateScale(16),
    borderWidth: 0.8,
    borderRadius: 10,
    borderColor: 'lightgray',
    alignItems: 'flex-start',
    paddingLeft: 15,
    width: '84%',
    height: moderateVerticalScale(160),
  },
  rechargea: {
    alignSelf: 'center',
    marginTop: moderateScale(15),
    fontWeight: 'bold',
    color: 'black',
    fontSize: moderateScale(12),
    alignItems: 'flex-start',
    paddingLeft: 15,
    width: '84%',
    height: moderateVerticalScale(150),
    marginLeft: moderateScale(10),
  },
  main: {
    backgroundColor: '#0378FF',
    borderRadius: moderateScale(40),
    width: '85%',
    alignSelf: 'center',
    marginTop: moderateVerticalScale(145),
    height: moderateVerticalScale(40),
  },
  clr: {
    color: 'white',
    alignSelf: 'center',
    marginTop: moderateScale(8),
    fontSize: moderateScale(17),
  },
});
