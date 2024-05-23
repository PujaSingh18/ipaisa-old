import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import QRColor from '../../SvgImages/QRColor';
import ShareComponent from '../../SvgImages/ShareComponent';
import ReceiveMoneyHeader from './ReceiveMoneyHeader';
import ReceiveMoneyScreen from './ReceiveMoneyScreen';

export default function ReceiveMoneyMain() {
  return (
    <>
      <View style={styles.rmm}>
        <ReceiveMoneyHeader />
        <ReceiveMoneyScreen />
        <View
          style={{
            borderWidth: 2,
            borderRadius: 10,
            borderColor: '#0065D9',
            width: 160,
            height: 50,
            marginTop: 180,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft: 20,
          }}>
          <QRColor style={{marginLeft: 20}} />
          <Text
            style={{
              color: '#0065D9',
              fontSize: 13,
              fontWeight: 'bold',
              marginRight: 30,
            }}>
            Open Scanner
          </Text>
        </View>
        <View
          style={{
            borderWidth: 2,
            borderRadius: 10,
            borderColor: 'white',
            width: 160,
            height: 50,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft: 190,
            backgroundColor: '#0065D9',
            marginTop: -50,
          }}>
            <ShareComponent style={{marginLeft: 40}} />
          <Text
            style={{
              color: 'white',
              fontSize: 13,
              fontWeight: 'bold',
              marginRight:50
            }}>
            Share
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  rmm: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
});
