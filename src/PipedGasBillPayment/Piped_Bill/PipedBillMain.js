import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import Header from '../../commonComponent/Header';
import PipedBillScreen from './PipedBillScreen';

const data = {
  heading: 'Piped Gas Bill',
  prevPath: 'PipedAGPMain',
};

export default function PipedBillMain() {
  const navigation = useNavigation();
  return (
    <View style={style.mainbg}>
      <Header data={data} />
      <View style={style.ElecSuppliers}>
        <PipedBillScreen />
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
          <Text style={{fontWeight: 'bold'}}>Consumer name</Text>
          <Text style={{fontWeight: 'bold', color: 'black'}}>Joe Goldberg</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontWeight: 'bold'}}>Bill Number</Text>
          <Text style={{fontWeight: 'bold', color: 'black'}}>123456</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontWeight: 'bold'}}>Bill Date</Text>
          <Text style={{fontWeight: 'bold', color: 'black'}}>12 Feb 2024</Text>
        </View>
      </View>
      <View style={style.recharge}>
        <Text
          keyboardType="numeric"
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: '#0378FF',
            marginTop: moderateScale(10),
          }}>
          ₹ 500
        </Text>
        <Text style={{fontSize: 15, color: 'black'}}>
          Bill due date : 20 Feb 2024
        </Text>
      </View>
      <Pressable
        onPress={() => {
          navigation.navigate('MainDiscovery');
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
  rechargeText: {
    marginLeft: moderateScale(29),
    marginTop: moderateScale(-310),
    fontWeight: 'bold',
    color: 'black',
    fontSize: moderateScale(16),
    //backgroundColor:'white'
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
    height: moderateVerticalScale(100),
  },
  main: {
    backgroundColor: '#0378FF',
    borderRadius: moderateScale(40),
    width: '85%',
    alignSelf: 'center',
    marginTop: moderateVerticalScale(180),
    height: moderateVerticalScale(50),
  },
  clr: {
    color: 'white',
    alignSelf: 'center',
    marginTop: moderateScale(12),
    fontSize: moderateScale(17),
  },
});
