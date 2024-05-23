/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import {
  moderateScale,
  moderateVerticalScale
} from 'react-native-size-matters';

export default function Consumerid() {
  const navigation = useNavigation();

  return (
    <View style={styles.consumerdetails}>
      <Image
        source={require('../../image/BESCOM_Group.png')}
        style={styles.img}
      />
      <View style={styles.conRow}>
        <Text style={styles.conBold}>Consumer ID</Text>
        <Text style={styles.conID}>1212345553</Text>
      </View>
      <View>
        <View style={styles.setAlign}>
          <View style={styles.conRow}>
            <Image
              source={require('../../image/receipt.png')}
              style={styles.receiptIMG}
            />
            <Text style={styles.details}>Bill amount</Text>
            <Text style={styles.rupees}>{'\u20B9'}856</Text>
          </View>
        </View>

        <View style={styles.setAlign}>
          <View style={styles.conRow}>
            <Image
              source={require('../../image/receipt.png')}
              style={styles.receiptIMG}
            />
            <Text style={styles.name1}>Name</Text>
            <Text style={styles.name}>Joe Goldberg</Text>
          </View>
        </View>

        <View style={styles.setAlign}>
          <View style={styles.conRow}>
            <Image
              source={require('../../image/receipt.png')}
              style={styles.receiptIMG}
            />
            <Text style={styles.bdate1}>Bill date</Text>
            <Text style={styles.bdate}>12 Feb 2024</Text>
          </View>
        </View>

        <View style={styles.setAlign}>
          <View style={styles.conRow}>
            <Image
              source={require('../../image/receipt.png')}
              style={styles.receiptIMG}
            />
            <Text style={styles.ddate1}>Due date</Text>
            <Text style={styles.ddate}>19 Feb 2024</Text>
          </View>
        </View>
      </View>
      <Pressable onPress={() => {
              navigation.navigate('RechargeSuccessfully');
            }} style={styles.main}>
        <Text style={styles.clr}>Pay Bill</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  consumerdetails: {
    width: '94%',
    height: moderateVerticalScale(340),
    marginTop: moderateScale(70),
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: moderateScale(10),
  },
  img: {
    alignSelf: 'center',
    marginTop: moderateScale(-40),
  },
  conBold: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: moderateScale(16),
    marginLeft: moderateScale(15),
    marginTop: moderateScale(10),
  },
  conRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  conID: {
    paddingRight: moderateScale(15),
    marginTop: moderateScale(11),
    color: 'black',
  },
  receiptIMG: {
    alignSelf: 'center',
    marginTop: moderateScale(50),
    marginLeft: moderateScale(15),
  },
  details: {
    marginTop: moderateScale(50),
    paddingRight: moderateScale(160),
    color: 'black',
  },
  name1: {
    marginTop: moderateScale(50),
    marginRight: moderateScale(140),
    color: 'black',
  },
  bdate1: {
    marginTop: moderateScale(50),
    marginRight: moderateScale(140),
    color: 'black',
  },
  ddate1: {
    marginTop: moderateScale(50),
    paddingRight: moderateScale(140),
    color: 'black',
  },
  name: {
    marginTop: moderateScale(50),
    paddingRight: moderateScale(15),
    color: 'black',
  },
  bdate: {
    marginTop: moderateScale(50),
    paddingRight: moderateScale(15),
    color: 'black',
  },
  ddate: {
    marginTop: moderateScale(50),
    paddingRight: moderateScale(15),
    color: 'black',
  },
  rupees: {
    marginTop: moderateScale(50),
    paddingRight: moderateScale(15),
    color: '#0079FF',
  },
  setAlign: {
    marginTop: moderateScale(-10),
  },
  main: {
    backgroundColor: '#0F62FE',
    borderRadius: moderateScale(40),
    width: '85%',
    alignSelf: 'center',
    marginTop: moderateVerticalScale(150),
    height: moderateVerticalScale(50),
  },
  clr: {
    color: 'white',
    alignSelf: 'center',
    marginTop: moderateScale(12),
    fontSize: moderateScale(17),
  },
});
