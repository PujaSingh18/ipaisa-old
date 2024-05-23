/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale
} from 'react-native-size-matters';
import { arrDTH } from '../../utils/allArray';
export default function Providers_List() {
  const navigation = useNavigation();

  const goToScreen = () => {
    navigation.navigate('Main');
  };
  return (
    <View>
      {arrDTH.map(item => (
        <Pressable onPress={goToScreen} key={item.id}>
          <View style={styles.ElecSuppliers} key={item.id}>
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
  recentbilltext: {
    marginLeft: moderateScale(15),
    marginTop: moderateScale(10),
    fontWeight: 'bold',
    color: 'black',
  },
  ElecSuppliers: {
    width: '94%',
    height: moderateVerticalScale(55),
    marginTop: moderateScale(8),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: moderateScale(15),
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
