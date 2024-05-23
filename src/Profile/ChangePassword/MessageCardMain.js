import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import BasicDialog from '../../SvgImages/BasicDialog';
import Header from '../../commonComponent/Header';



const data={
    heading:'Change Password',
    prevPath:'NewPasswordMain',
}

export default function MessageCardMain() {
    const navigation = useNavigation();
  return (
    <>
    <Header data={data}/>
    <View style={styles.ab}>
        <Pressable onPress={()=>{
            navigation.navigate('ProfileMain');
        }}>
        <BasicDialog style={{alignItem:'center', alignSelf:'center', marginTop:100}}/>
        </Pressable>
    </View>
    </>
  )
}


const styles=StyleSheet.create({
    ab:{
        width:'100%',
        height:'100%',
        backgroundColor:'white',
    }
});