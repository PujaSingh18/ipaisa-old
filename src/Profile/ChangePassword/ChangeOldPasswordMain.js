import React, { useEffect, useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import Header from '../../commonComponent/Header';

const data = {
  heading: 'Change Password',
  prevPath: 'ProfileMain',
};

export default function ChangeOldPasswordMain({navigation}) {
  const et1 = useRef();
  const et2 = useRef();
  const et3 = useRef();
  const et4 = useRef();
  const [val1, setval1] = useState();
  const [val2, setval2] = useState();
  const [val3, setval3] = useState();
  const [val4, setval4] = useState();
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
  const otp11 = otp1.toString();

  const otp2 = Math.floor(Math.random() * 10);
  const otp22 = otp2.toString();

  const otp3 = Math.floor(Math.random() * 10);
  const otp33 = otp3.toString();

  const otp4 = Math.floor(Math.random() * 10);
  const otp44 = otp4.toString();

  return (
    <>
      <Header data={data} />
      <View style={styles.a}>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            marginLeft: moderateScale(20),
            marginTop: moderateVerticalScale(40),
          }}>
          Enter your old password
        </Text>
        <Text style={{fontSize: 15, marginLeft: moderateScale(20)}}>
          Enter the OTP sent to +91 8551946945
        </Text>

        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 30,
            marginLeft: -60,
            gap: 5,
          }}>
          <TextInput
            ref={et1}
            style={{
              width: 50,
              height: 50,
              borderBottomWidth: 0.5,
              //borderRadius: 10,
              textAlign: 'center',
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
              borderBottomWidth: 0.5,
              //borderRadius: 10,
              textAlign: 'center',
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
              borderBottomWidth: 0.5,
              //borderRadius: 10,
              textAlign: 'center',
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
              borderBottomWidth: 0.5,
              //borderRadius: 10,
              textAlign: 'center',
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
        </View>
        <Text
          style={{
            color: '#0F62FE',
            marginTop: moderateVerticalScale(10),
            marginLeft:moderateScale(10)
          }}>
          Forgot Password?
        </Text>
        <Pressable
          onPress={() => {
            navigation.navigate('CheckPhoneNumberMain');
          }}
          disabled={
            val1 !== '' &&
            val2 !== '' &&
            val3 !== '' &&
            val4 !== ''
              ? false
              : true
          }
          style={[
            {
              width: '90%',
              height: 55,
              borderRadius: 20,
              marginTop: 300,
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            },
            {
              backgroundColor:
                val1 == '' &&
                val2 == '' &&
                val3 == '' &&
                val4 == ''
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
  );
}

const styles = StyleSheet.create({
  a: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    rowGap: 10,
  },
});
