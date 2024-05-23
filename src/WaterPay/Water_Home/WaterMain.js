/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import FH_SearchBar from '../../Fastag/Fastag/Fastag_Home/FH_SearchBar';
import Header from '../../commonComponent/Header';
import Navigator from '../../commonFooter/Navigator';
import WaterBanner from './WaterBanner';
import WaterScreen from './WaterScreen';
const data = {
  heading:'Select Biller',
  prevPath:'MainDiscovery',
}

export default function WaterMain() {
  return (
    <View style={styles.container}>
      <Header data={data}/>
      <ScrollView>
        <WaterBanner/>
        <FH_SearchBar/>
        <WaterScreen/>
      </ScrollView>
      <Navigator/>
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
