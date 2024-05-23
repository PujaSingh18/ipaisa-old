import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import {
  moderateScale,
  moderateVerticalScale
} from 'react-native-size-matters';
import { ArrPiped } from '../../utils/allArray';
import { useNavigation } from '@react-navigation/native';

export default function PipedScreen() {
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
        <Text style={{fontSize:15, fontWeight:'bold', color:'black', margin:15}}>All Billers</Text>
        {ArrPiped.map((item, index) => (
        <Pressable onPress={() => {
          navigation.navigate(item?.path);
        }}key={index}>
          <View style={styles.ElecSuppliers}>
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
    width: '94%',
    height: moderateVerticalScale(55),
    marginTop: moderateScale(18),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  SupplierImage: {
    width: moderateScale(40),
    height: 40,
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
