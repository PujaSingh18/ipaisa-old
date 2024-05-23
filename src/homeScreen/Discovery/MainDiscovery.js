/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  moderateScale,
  moderateVerticalScale
} from 'react-native-size-matters';
import Navigator from '../../commonFooter/Navigator';
import DHeader from './DHeader';
import FinancialServices from './FinancialServices';
import OthersServices from './OthersServices';
import Recharges from './Recharges';
import Utilities from './Utilities';
export default function MainDiscovery() {
  return (
    <>
    <View style={{width: '100%', height: '100%', gap: 10, backgroundColor:'#C9E2FF'}}>
    <DHeader />
      <ScrollView>
        
        <LinearGradient
          colors={['#0378FF', '#C9E2FF']}
          style={styles.recharges}>
          <Text style={styles.rechargeText}>Recharges</Text>
          <Recharges />
        </LinearGradient>

        <LinearGradient
        colors={['#0378FF', '#C9E2FF']}
        style={styles.utilities}>
          <Text style={styles.utilitiesText}>Utilities</Text>
          <Utilities />
        </LinearGradient>

        <LinearGradient
        colors={['#0378FF', '#C9E2FF']}
        style={styles.finaS}>
          <Text style={styles.finaSText}>Financial Services</Text>
          <FinancialServices />
        </LinearGradient>

        <LinearGradient
        colors={['#0378FF', '#C9E2FF']}
        style={styles.otherS}>
          <Text style={styles.otherSText}>Others Services</Text>
          <OthersServices />
        </LinearGradient>

      </ScrollView>
      <Navigator/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  recharges: {
    marginTop: moderateVerticalScale(15),
    width: '94%',
    height: moderateVerticalScale(140),
    alignSelf: 'flex-start',
    marginLeft:moderateScale(10),
    borderWidth:1,
    borderRadius:20,
    borderColor: '#2E86C1',
    backgroundColor:'white'
  },
  rechargeText: {
    marginLeft: moderateScale(20),
    marginTop: moderateScale(10),
    fontWeight: 'bold',
    color: 'black',
    fontSize: moderateScale(13),
  },
  utilities: {
    marginTop: moderateVerticalScale(15),
    width: '94%',
    height: moderateVerticalScale(240),
    alignSelf: 'center',
    borderWidth:1,
    borderRadius:20,
    borderColor: '#2E86C1',
    backgroundColor:'white'
  },
  utilitiesText: {
    marginLeft: moderateScale(20),
    marginTop: moderateScale(10),
    fontWeight: 'bold',
    color: 'black',
    fontSize: moderateScale(13),
  },
  finaS: {
    marginTop: moderateVerticalScale(15),
    width: '94%',
    height: moderateVerticalScale(130),
    alignSelf: 'flex-start',
    borderWidth:1,
    borderRadius:20,
    borderColor: '#2E86C1',
    backgroundColor:'white',
    marginLeft:moderateScale(10)
  },
  finaSText: {
    marginLeft: moderateScale(20),
    marginTop: moderateScale(10),
    fontWeight: 'bold',
    color: 'black',
    fontSize: moderateScale(13),
  },
  otherS: {
    marginTop: moderateVerticalScale(15),
    width: '94%',
    height: moderateVerticalScale(130),
    alignSelf: 'center',
    borderWidth:1,
    borderRadius:20,
    borderColor: '#2E86C1',
    backgroundColor:'white'
  },
  otherSText: {
    marginLeft: moderateScale(20),
    marginTop: moderateScale(10),
    fontWeight: 'bold',
    color: 'black',
    fontSize: moderateScale(13)
  },
  Subs: {
    marginTop: moderateVerticalScale(25),
    width: '94%',
    height: moderateVerticalScale(150),
    alignSelf: 'flex-start',
  },
  SubsText: {
    marginLeft: moderateScale(15),
    marginTop: moderateScale(10),
    fontWeight: 'bold',
    color: 'black',
    fontSize: moderateScale(16),
  },
  tb: {
    marginTop: moderateVerticalScale(25),
    width: '94%',
    height: moderateVerticalScale(150),
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'lightgray',
  },
  tbText: {
    marginLeft: moderateScale(15),
    marginTop: moderateScale(10),
    fontWeight: 'bold',
    color: 'black',
    fontSize: moderateScale(16),
  },
  insurance: {
    marginTop: moderateVerticalScale(25),
    width: '94%',
    height: moderateVerticalScale(250),
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'lightgray',
  },
  insuranceText: {
    marginLeft: moderateScale(15),
    marginTop: moderateScale(10),
    fontWeight: 'bold',
    color: 'black',
    fontSize: moderateScale(16),
  },
});
