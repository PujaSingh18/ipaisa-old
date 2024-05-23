/* eslint-disable prettier/prettier */
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
//import { Image } from 'react-native-reanimated/lib/typescript/Animated';
import { useNavigation } from '@react-navigation/native';
import BackArrowComponent from '../../SvgImages/BackArrowComponent';
export default function PaymentPopularPlan({item}) {
  const navigation = useNavigation();

  const goToScreen = () => {
    navigation.navigate('MFLUserScreen');
  };
  return (
    <Pressable style={styles.container} onPress={goToScreen}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%'
        }}>
        <Text style={{color: 'black', fontSize: 20, fontWeight: 700}}>
          {item.amount}
        </Text>
        <View>
          <Text style={{color: 'black', fontSize: 15, fontWeight: 700}}>
            Data
          </Text>
          <Text style={{color: 'black', fontSize: 10}}>{item.data}</Text>
        </View>
        <View>
          <Text style={{color: 'black', fontSize: 15, fontWeight: 700}}>
            Validity
          </Text>
          <Text style={{color: 'black', fontSize: 10}}>{item.validity}</Text>
        </View>
        <BackArrowComponent/>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <Text style={{fontSize: 12}}>Voice: {item.voice}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    width: '90%',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    borderLeftWidth:5,
    borderColor:'#000088',
    backgroundColor:'white',
    height:120
  },
});
