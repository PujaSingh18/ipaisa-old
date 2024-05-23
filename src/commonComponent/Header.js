import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import ArrowComponent from '../SvgImages/ArrowComponent';
export default function Header({data}) {
    const navigation = useNavigation();
  return (
    <View style={{width:'100%',height:70, backgroundColor:'#0378FF',justifyContent:'flex-start', flexDirection:'row', gap:5}}>
    <Pressable onPress={()=>{
    navigation.navigate(`${data.prevPath}`)
    }}>
    <View style={{marginTop:moderateScale(20), marginLeft:moderateScale(10)}}>
    <ArrowComponent style={{marginLeft:moderateScale(5)}}/>
    </View>
    </Pressable>
    <View style={{marginLeft:moderateScale(10)}}>
    <Text style={{color:'white',fontSize:17, fontWeight:700, marginTop:moderateScale(19)}}>{data.heading}</Text>
    <Text style={{color:'white',fontSize:11, fontWeight:700, marginTop:moderateScale(1)}}>{data?.subheading}</Text>
    </View>
    {/* <Image source={require('..//image/BBPS_icon.png')} style={{width:20, height:20, marginTop:moderateScale(20), margin:moderateScale(110)}} /> */}
    </View>
  )
}