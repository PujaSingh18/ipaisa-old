/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState } from 'react';
import {
  Image,
  Pressable,
  Text,
  TextInput,
  View
} from 'react-native';

const OTPVerificationScreen = ({navigation}) => {
  
  const et1 = useRef();
  const et2 = useRef();
  const et3 = useRef();
  const et4 = useRef();
  const et5 = useRef();
  const et6 = useRef();
  const [val1, setval1] = useState();
  const [val2, setval2] = useState();
  const [val3, setval3] = useState();
  const [val4, setval4] = useState();
  const [val5, setval5] = useState();
  const [val6, setval6] = useState();
  const [count, setCount] = useState(60);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count == 0) {
        clearInterval(interval);
      } else {
        setCount(count - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);


  let otp1 = Math.floor(Math.random() * 10);
  const otp11 = otp1.toString()
  
  

  const otp2 = Math.floor(Math.random() * 10);
  const otp22 = otp2.toString()
  
  const otp3 = Math.floor(Math.random() * 10);
  const otp33 = otp3.toString()


  const otp4 = Math.floor(Math.random() * 10);
  const otp44 = otp4.toString()

  const otp5 = Math.floor(Math.random() * 10);
  const otp55 = otp5.toString()

  const otp6 = Math.floor(Math.random() * 10);
  const otp66 = otp6.toString()
  return (
  <>
  <Image source={require('../image/OTPScreen.png')}/>
    <View style={{flex: 1, marginTop:'-250%'}}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 700,
          marginTop: 100,
          alignSelf: 'center',
          color: 'white',
        }}>
        OTP Verification
      </Text>
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          marginTop: 100,
          gap: 5,
        }}>
        <TextInput
          ref={et1}
          style={{
            width: 50,
            height: 50,
            borderWidth: 2,
            borderRadius: 10,
            textAlign: 'center',
            borderColor:'white',
          }}
          placeholder={otp11}
          keyboardType="number-pad"
          maxLength={1}
          value={val1}
          onChangeText={txt => {
            setval1(txt);
            if (txt.length >= 1) {
              et2.current.focus();
            }
          }}
        />
        <TextInput
          ref={et2}
          style={{
            width: 50,
            height: 50,
            borderWidth: 2,
            borderRadius: 10,
            textAlign: 'center',
            borderColor:'white',
          }}
          placeholder={otp22}
          keyboardType="number-pad"
          maxLength={1}
          value={val2}
          onChangeText={txt => {
            setval2(txt);
            if (txt.length >= 1) {
              et3.current.focus();
            } else if (txt.length < 1) {
              et1.current.focus();
            }
          }}
        />
        <TextInput
          ref={et3}
          style={{
            width: 50,
            height: 50,
            borderWidth: 2,
            borderRadius: 10,
            textAlign: 'center',
            borderColor:'white',
          }}
          placeholder={otp33}
          keyboardType="number-pad"
          maxLength={1}
          value={val3}
          onChangeText={txt => {
            setval3(txt);
            if (txt.length >= 1) {
              et4.current.focus();
            } else if (txt.length < 1) {
              et2.current.focus();
            }
          }}
        />
        <TextInput
          ref={et4}
          style={{
            width: 50,
            height: 50,
            borderWidth: 2,
            borderRadius: 10,
            textAlign: 'center',
            borderColor:'white',
          }}
          placeholder={otp44}
          keyboardType="number-pad"
          maxLength={1}
          value={val4}
          onChangeText={txt => {
            setval4(txt);
            if (txt.length >= 1) {
              et5.current.focus();
            } else if (txt.length < 1) {
              et3.current.focus();
            }
          }}
        />
        <TextInput
          ref={et5}
          style={{
            width: 50,
            height: 50,
            borderWidth: 2,
            borderRadius: 10,
            textAlign: 'center',
            borderColor:'white',
          }}
          keyboardType="number-pad"
          placeholder={otp55}
          maxLength={1}
          value={val5}
          onChangeText={txt => {
            setval5(txt);
            if (txt.length >= 1) {
              et6.current.focus();
            } else if (txt.length < 1) {
              et4.current.focus();
            }
          }}
        />
        <TextInput
          ref={et6}
          style={{
            width: 50,
            height: 50,
            borderWidth: 2,
            borderRadius: 10,
            textAlign: 'center',
            borderColor:'white',
          }}
          keyboardType="number-pad"
          placeholder={otp66}
          maxLength={1}
          value={val6}
          onChangeText={txt => {
            setval6(txt);
            if (txt.length >= 1) {
              et6.current.focus();
            } else if (txt.length < 1) {
              et5.current.focus();
            }
          }}
        />
      </View>
      <Pressable
        onPress={() => {
          navigation.navigate('HomeMainScreen');
        }}
        disabled={
          val1 !== '' &&
          val2 !== '' &&
          val3 !== '' &&
          val4 !== '' &&
          val5 !== '' &&
          val6 !== ''
            ? false
            : true
        }
        style={[
          {
            width: '90%',
            height: 55,
            borderRadius: 20,
            marginTop: 50,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          },
          {
            backgroundColor:
              val1 == '' &&
              val2 == '' &&
              val3 == '' &&
              val4 == '' &&
              val5 == '' &&
              val6 == ''
                ? 'gray'
                : '#0378FF',
          },
        ]}>
        <Text style={{color: 'white', fontSize: 20, fontWeight: 700}}>
          Verify
        </Text>
      </Pressable>
    </View>
  </>
  )
};
export default OTPVerificationScreen;
