import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import Book from '../../SvgImages/Book';
import PersonBoy from '../../SvgImages/PersonBoy';
import QRiPaisa from '../../SvgImages/QRiPaisa';

export default function ReceiveMoneyScreen() {
  return (
    <>
      <View style={styles.rms}>
        <View style={{alignItems: 'center'}}>
          <PersonBoy style={{marginLeft: -120, marginTop: 20}} />
          <Text
            style={{
              fontSize: 15,
              color: 'black',
              fontWeight: 'bold',
              marginTop: -35,
              marginLeft: 30,
            }}>
            Reubin Chatta
          </Text>
        </View>
        <QRiPaisa style={{marginTop: 20, marginLeft: 55}} />
        <Text
          style={{
            alignSelf: 'center',
            marginTop: -10,
            fontSize: 10,
            color: 'black',
          }}>
          Scan to pay with any UPI app
        </Text>
        <Text
          style={{
            alignSelf: 'center',
            marginTop: 5,
            fontSize: 10,
            color: 'black',
          }}>
          UPI ID: reubinchatta1234@xyz
        </Text>
        <Book style={{marginLeft: 230, marginTop: -20}} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  rms: {
    width: '84%',
    height: 330,
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: 'white',
    marginTop: moderateVerticalScale(20),
    marginLeft: moderateScale(20),
    borderColor: 'lightgrey',
  },
});
