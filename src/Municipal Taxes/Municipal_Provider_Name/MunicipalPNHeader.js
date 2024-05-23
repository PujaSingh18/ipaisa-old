import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'

export default function MunicipalPNHeader() {
  return (
    <View style={{width:'100%',height:80, backgroundColor:'#0378FF', flexDirection:'row', alignItems:'center', justifyContent:'flex-start', gap:10}}>
    <Pressable>
    <Image source={require(`../../image/backArrow.png`)}/>
    </Pressable>
    <View>
    <Text style={{color:'#fff', fontSize:15, fontWeight:'bold'}}>Provider Name</Text>
    </View>
    <View style={{marginLeft:140}}>
    <Image source={require('../../image/BBPS_icon.png')}/>
    </View>
    </View>
  )
}