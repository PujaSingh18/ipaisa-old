import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Header from '../../commonComponent/Header';
import Footer from '../../commonFooter/Footer';
import PipedBGLScreen from './PipedBGLScreen';

const data = {
  heading: 'Select Insurance Provider',
  prevPath: 'PipedBillMain',
};

export default function PipedAGPMain() {
  return (
    <View style={styles.container}>
      <Header data={data} />
      <PipedBGLScreen />
      <Footer />

      <View style={{alignItems: 'center'}}>
        <Pressable
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
