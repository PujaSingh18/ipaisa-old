import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Header from '../../commonComponent/Header';
import Footer from '../../commonFooter/Footer';
import BroadMTNLScreen from './BroadMTNLScreen';

const data = {
  heading: 'MTNL Delhi-Broadband',
  prevPath: 'BroadbandMain',
};

export default function BroadMTNLMain() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header data={data} />
      <BroadMTNLScreen />
      <Footer />

      <View style={{alignItems: 'center'}}>
        <Pressable
        onPress={()=>{
          navigation.navigate('BroadBillMain');
        }}
          style={{
            width: '90%',
            backgroundColor: '#0378FF',
            height: 50,
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
            margin: 200,
          }}>
          <Text style={{color: 'white', fontWeight: 700, fontSize: 15}}>
            Confirm
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#EFF4FF',
  },
});
