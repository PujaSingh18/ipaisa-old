import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import { ArrIATM } from '../../utils/Array';

export default function AtmScreen() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
    {ArrIATM.map((item, index)=>(
        <Pressable   onPress={() => {
            navigation.navigate(item.path);
        }} key={index}>
    <View style={{flexDirection:'row', justifyContent:'flex-start', columnGap:7, marginLeft:moderateScale(10)}}>
        <View style={{marginTop:moderateScale(20)}}>
            <View style={{flexDirection:'row', marginTop:moderateVerticalScale(-10)}}>{item.img}</View>
        </View>
        <View style={{marginLeft:moderateScale(5),width:'80%', height:moderateVerticalScale(60), marginTop:moderateVerticalScale(15)}}>
            <Text style={{fontWeight:'bold', color:item.color, fontSize:20}}>{item.title}</Text>
            <Text style={{color:'black', fontSize:12}}>{item.subtitle}</Text>
        </View>
    </View>
    <View style={styles.horizontalRule}></View>
    </Pressable>
    ))}
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        width: '94%',
        height: 299,
        backgroundColor:'white',
        borderRadius:10,
        borderWidth:1,
        marginTop:moderateScale(30),
        borderColor:'lightgray',
        alignItems:'center',
        alignSelf:'center',
        rowGap:5,
        marginBottom:20
    },
    horizontalRule: {
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        marginVertical: 10, // Adjust as needed
    }
});