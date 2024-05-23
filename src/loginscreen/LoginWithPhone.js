/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Image,
  Pressable,
  Text,
  TextInput,
  View
} from 'react-native';
import LogoComponent from '../SvgImages/LogoComponent';

export default function LoginWithPhone({navigation}) {

  return (
    <View style={{width: '100%', height: '100%'}}>
    <Image source={require('../image/OTPScreen.png')}/>
      <View style={{width: '100%',   paddingTop: 10, marginTop:'-250%'}}>
        <View style={{width: '100%', padding: 20, marginBottom:20}}>
          <LogoComponent/>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 600,
              marginTop: 10,
              color: 'white',
            }}>
            Create an account
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 400,
              marginTop: 10,
              color: 'white',
            }}>
            Enter your phone number
          </Text>
          <TextInput
            style={{
              height: 50,
              borderColor: 'white',
              borderWidth: 2,
              marginTop: 15,
              borderRadius: 10,
            }}
            placeholder=""
            keyboardType="numeric"
            maxLength={10}
          />
          <Pressable
            onPress={() => {
              navigation.navigate('OTPVerificationScreen');
            }}
            style={{
              width: 100,
              height: 50,
              backgroundColor: '#0378FF',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              marginTop: 15,
              //marginBottom: 100
            }}>
              <Text style={{fontSize: 20, fontWeight: 600, color: '#fff'}}>
                Verify
              </Text>
            </Pressable>
            
        </View>
      </View>
    </View>
    
  );
}
