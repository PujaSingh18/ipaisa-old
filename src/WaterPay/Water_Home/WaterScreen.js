/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import { ArrWater } from '../../utils/allArray';

export default function WaterScreen() {
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
      <Text
        style={{fontSize: 15, fontWeight: 'bold', color: 'black', margin: 15}}>
        All Billers
      </Text>
      {ArrWater.map((item, index) => (
        <Pressable
        onPress={() => {
            navigation.navigate(item?.path);
          }}
        key={index}>
          <View style={styles.ElecSuppliers}>
          {item.img}
            <View style={styles.SupText}>
              <View>
                <Text style={styles.SupTextBold}>{item.title}</Text>
                <Text style={styles.SupTextBold}>{item.subtitle}</Text>
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
