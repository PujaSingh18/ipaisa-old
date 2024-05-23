import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import { ArrTransactions } from '../../utils/Array';

export default function TransactionScreen() {
  return (
    <>
      <View style={styles.com}>
        <Text
          style={{
            fontSize: 15,
            color: 'black',
            fontWeight: 'bold',
            marginTop: moderateVerticalScale(10),
            marginLeft:10
          }}>
          Recent Transactions
        </Text>
        </View>
        <View style={{flexDirection:'row', marginTop:-120, marginLeft:20}}>
        {ArrTransactions.map((item, index) => (
          <View
            style={{
              justifyContent: 'space-between',
              alignSelf: 'flex-start',
              marginTop:40,
              marginLeft:10,
              width:80,
              height:80,
            }}
            key={index}>
            {item.img}
            <Text style={{alignItems:'center'}}>{item.title}</Text>
            <Text style={{alignItems:'center'}}>{item.subtitle}</Text>
          </View>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  com: {
    width: '94%',
    height: moderateScale(130),
    alignSelf: 'center',
    marginTop: moderateVerticalScale(10)
  }
});
