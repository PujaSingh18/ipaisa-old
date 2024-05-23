/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale
} from 'react-native-size-matters';
import { arrFastag } from '../../../utils/allArray';

export default function FH_Banks() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: '94%',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: moderateScale(15),
      }}>
      {arrFastag.map((item, index)=> (
        <Pressable onPress={()=>{
          navigation.navigate('Main_Fastag_Recharge');
        }} key={index}>
          <View style={styles.ElecSuppliers}>
          {item.img}
            <View style={styles.SupText}>
              <View>
                <Text style={styles.SupTextBold}>{item.title}</Text>
              </View>
            </View>
          </View>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  ElecSuppliers: {
    width: '94%',
    height: moderateVerticalScale(55),
    marginTop: moderateScale(18),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  SupplierImage: {
    width: scale(50),
    height: 50,
  },
  SupText: {
    marginLeft: moderateScale(20),
  },
  SupTextBold: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: moderateScale(16),
  },
});
