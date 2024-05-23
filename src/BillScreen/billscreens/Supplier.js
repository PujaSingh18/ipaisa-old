/* eslint-disable prettier/prettier */
import {Image, View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
export default function Supplier() {
  const navigation = useNavigation();

  const goToScreen = () => {
    navigation.navigate('Main_Biller');
  };
  return (
    <View>
      <View style={styles.ElecSuppliers}>
        <Image
          source={require('../../image/Adani.png')}
          style={styles.SupplierImage}
        />
        <View style={styles.SupText}>
          <View>
            <Text style={styles.SupTextBold}>Adani</Text>
          </View>
        </View>
      </View>

      <Pressable style={styles.ElecSuppliers} onPress={goToScreen}>
        <Image
          source={require('../../image/BESCOM.png')}
          style={styles.SupplierImage}
        />
        <View style={styles.SupText}>
          <View>
            <Text style={styles.SupTextBold}>BESCOM</Text>
          </View>
        </View>
      </Pressable>

      <View style={styles.ElecSuppliers}>
        <Image
          source={require('../../image/Mahavitaran.png')}
          style={styles.SupplierImage}
        />
        <View style={styles.SupText}>
          <View>
            <Text style={styles.SupTextBold}>Mahavitaran</Text>
          </View>
        </View>
      </View>

      <View style={styles.ElecSuppliers}>
        <Image
          source={require('../../image/Tata.png')}
          style={styles.SupplierImage}
        />
        <View style={styles.SupText}>
          <View>
            <Text style={styles.SupTextBold}>Tata</Text>
          </View>
        </View>
      </View>

      <View style={styles.ElecSuppliers}>
        <Image
          source={require('../../image/Hubli.png')}
          style={styles.SupplierImage}
        />
        <View style={styles.SupText}>
          <View>
            <Text style={styles.SupTextBold}>Hubli</Text>
          </View>
        </View>
      </View>
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
