import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import Back from '../SvgImages/Back';
import QRPayment from '../SvgImages/QRPayment';
import UserP from '../SvgImages/UserP';
const UserProfile = () => {
  const navigation = useNavigation();

  return (
  <>
    <Pressable>
    <View style = {styles.a}>
      <UserP style={{marginTop:moderateScale(20), marginLeft:moderateScale(10)}}/>
      <View style = {styles.b}>
        <Text style={{fontSize: 20,color: 'black', fontWeight:'bold'}}>Reubin Chatta</Text>
        <Text style={{fontSize: 14}}>+91 8551949090</Text>
      </View>
      <Back style={{marginLeft:moderateVerticalScale(55), marginTop:moderateScale(35)}}/>
    </View>
    </Pressable>

    <Pressable onPress={()=>{
      navigation.navigate('ReceiveMoneyMain');
    }} style={styles.c}>
    <QRPayment style={{marginTop:moderateScale(20)}}/>
    <Text style={{fontSize: 20,color: 'black', marginTop:moderateVerticalScale(20)}}>Receive Money</Text>
    <Text style={{fontSize: 14, marginTop:moderateVerticalScale(45), marginLeft:moderateScale(-145)}}>UPI ID: reubinchatta1234@xyz</Text>
    </Pressable>
  </>
  )
}

const styles = StyleSheet.create({
    a:{
        marginTop:moderateVerticalScale(10),
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: 'white',
        width: '94%',
        height:100,
        alignSelf:'center',
        justifyContent:'flex-start',
        borderRadius:20
    },
    b:{
        paddingTop:15,
        width: '48%',
        marginLeft:moderateScale(15),
        rowGap:3
    },
    c:{
      marginTop:moderateVerticalScale(10),
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: 'white',
        width: '94%',
        height:100,
        alignSelf:'center',
        justifyContent:'flex-start',
        borderRadius:20
    }
});

export default UserProfile