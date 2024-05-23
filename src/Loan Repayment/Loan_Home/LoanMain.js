import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Banner from '../../BillScreen/billscreens/Banner';
import FH_SearchBar from '../../Fastag/Fastag/Fastag_Home/FH_SearchBar';
import Header from '../../commonComponent/Header';
import Categories from './Categories';
import LoanScreen from './LoanScreen';
const data = {
  heading:'Select Lender',
  prevPath:'MainDiscovery',
}


export default function LoanMain() {
  return (
    <View style={styles.container}>
        <Header data={data}/>
        <ScrollView>
        <Banner/>
        <FH_SearchBar/>
        <Categories/>
        <LoanScreen/>
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
  })