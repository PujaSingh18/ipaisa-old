import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import { ArrHis } from '../../utils/Array';

export default function WalletHistory() {
  return (
    <View style={styles.con}>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
          color: 'black',
          marginTop: moderateScale(25),
          marginLeft: moderateVerticalScale(20),
        }}>
        History
      </Text>
      <ScrollView>
        {ArrHis.map((item, index) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}
            key={item.id}>
            <View
              style={{
                marginTop: moderateScale(20),
                marginLeft: moderateScale(20),
              }}>
              {item.img}
            </View>
            <View
              style={{
                marginLeft: moderateScale(20),
                width: '60%',
                height: moderateVerticalScale(60),
                marginTop: moderateVerticalScale(15),
              }}>
              <Text style={{fontWeight: 'bold', color: 'black'}}>
                {item.title}
              </Text>
              <Text style={{color: 'black'}}>{item.subtitle}</Text>
            </View>
            <View>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  marginTop: moderateVerticalScale(25),
                }}>
                {item.rupees}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  con: {
    width: '100%',
    height: 435,
    backgroundColor: 'white',
  },
});
