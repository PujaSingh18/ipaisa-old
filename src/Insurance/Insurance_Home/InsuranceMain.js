import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Banner from '../../BillScreen/billscreens/Banner';
import FH_SearchBar from '../../Fastag/Fastag/Fastag_Home/FH_SearchBar';
import Header from '../../commonComponent/Header';
import InsuranceScreen from './InsuranceScreen';

const data = {
  heading:'Select Insurance Provider',
  prevPath:'MainDiscovery',
}

export default function InsuranceMain() {
  return (
    <View style={styles.container}>
        <Header data={data}/>
        <ScrollView>
        <Banner/>
        <FH_SearchBar/>
        <InsuranceScreen/>
        </ScrollView>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
      width:'100%',
      height:'100%',
      backgroundColor:'#EFF4FF'
    }
  });
