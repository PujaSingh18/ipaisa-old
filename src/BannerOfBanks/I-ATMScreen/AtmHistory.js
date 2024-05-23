import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

export default function AtmHistory() {
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
        Transaction History
      </Text>
    </View>
  )
}


const styles = StyleSheet.create({
    con: {
        width: '70',
        height: 450,
        backgroundColor: 'white',
        borderRadius:30,
        marginTop:-20,
    }
  });