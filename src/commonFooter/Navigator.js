// import { useNavigation } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import AEPS from './../SvgImages/AEPS';
import History from './../SvgImages/History';
import Home from './../SvgImages/Home';
import IATM from './../SvgImages/IATM';
import Wallet from './../SvgImages/Wallet';

// navigation.navigate('HomeMainScreen');
const navigationArray =[
  {
    id: 1,
    img:<Home/>,
    title: 'Home',
    path:'HomeMainScreen',
  },
  {
    id: 2,
    img:<IATM/>,
    title: 'i-ATM',
    path:'AtmScreenMain',
  },
  {
    id: 3,
    img:<Wallet/>,
    title: 'i-Wallet',
    path: 'WalletMain',
  },
  {
    id: 4,
    img:<AEPS/>,
    title: 'AEPS',
    path: 'MainDiscovery',
  },
  {
    id: 5,
    img:<History/>,
    title: 'History',
    path: 'TransactionMain',
  }
]
export default function Navigator() {
  const [activeIndex, setActiveIndex] = useState(0)
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {
        navigationArray.map((item, index)=>(
          <View key={item.id}>
          <Pressable onPress={()=>{
            setActiveIndex(index);
            navigation.navigate(item?.path);
          }} style={{alignItems:'center', justifyContent:'center', gap:2}}>
            <View style={{padding:4, borderRadius:70, backgroundColor:activeIndex==index ? "#1F4482":"gray"}}>
            {item.img}
            </View>
            <Text style={{fontSize:10, color:'#1F4482', fontWeight:'bold'}}>{item.title}</Text>
          </Pressable>
          </View>
        ))
      }
    </View>
  );
}


const styles =  StyleSheet.create({
    container:{
      width: '100%',
      height:60,
      backgroundColor: 'white',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      alignSelf: 'center',
      paddingHorizontal:10
    }
})