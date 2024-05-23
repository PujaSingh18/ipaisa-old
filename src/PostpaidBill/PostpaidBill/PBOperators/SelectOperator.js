/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale
} from 'react-native-size-matters';
import { arrPBOperators } from '../../../utils/allArray';

export default function SelectOperator() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        alignSelf: 'center',
        width: '90%',
        height: moderateVerticalScale(310),
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: moderateScale(15),
        justifyContent: 'flex-start',
      }}>
      {arrPBOperators.map(item => (
        <Pressable
        onPress={() => {
            navigation.navigate(item?.path);
          }}>
          <View style={styles.ElecSuppliers} key={item.id}>
            <Image source={item.img} style={styles.SupplierImage} />
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
    width: '88%',
    height: moderateVerticalScale(58),
    marginTop: moderateScale(16),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  SupplierImage: {
    width: scale(52),
    height: 53,
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
