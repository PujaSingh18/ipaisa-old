/* eslint-disable prettier/prettier */
import {Image, View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';

export default function PBContactCard() {
  return (
    <View
      style={{
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 12,
        paddingBottom: 12,
        width: '90%',
        height: moderateVerticalScale(70),
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: moderateScale(16),
        marginLeft: moderateScale(16),
        marginRight: moderateScale(16),
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={styles.ElecSuppliers}>
        <Image
          source={require('../PBImages/Reubin.png')}
          style={styles.SupplierImage}
        />
        <View style={styles.SupText}>
          <View>
            <Text style={styles.SupTextBold}>Reubin</Text>
            <Text style={{fontWeight: '400'}}>+91 99929 29292</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ElecSuppliers: {
    width: '94%',
    height: moderateVerticalScale(55),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'center',
  },
  SupplierImage: {
    width: scale(52),
    height: 53,
  },
  SupText: {
    marginLeft: moderateScale(12),
  },
  SupTextBold: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: moderateScale(16),
  },
});
