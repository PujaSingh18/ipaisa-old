/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import Header from '../commonComponent/Header';
const data={
  heading: 'Wallet',
  prevPath: 'HomeMainScreen',
}

export default function AccountDetailsScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Header data={data}/>
      <View style={styles.centerSection}>
        <Text style={{color: '#000', fontSize: 30, fontWeight: 700}}>
          Enter Bank Details
        </Text>
        <Text
          style={{color: '#000', fontSize: 15, fontWeight: 400, marginTop: 20}}>
          Send money from wallet to bank with no hidden charges!
        </Text>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder="Bank Account Number"
        />
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder="Re-Enter Bank Account Number"
        />
        <TextInput style={styles.input} placeholder="IFSC Code" />
        <TextInput style={styles.input} placeholder="Account Holder Name" />
      </View>
      <View style={{flex: 2, alignItems: 'baseline'}}>
        <Pressable
          onPress={() => {
            navigation.navigate('EnterAmount');
          }}
          style={{
            marginHorizontal: 20,
            width: '90%',
            height: 50,
            borderRadius: 40,
            backgroundColor: '#0f62fe',
            alignSelf: 'baseline',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#fff', fontSize: 20, fontWeight: 500}}>
            Continue
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  centerSection: {
    width: '100%',
    // height:'60%',
    padding: 20,
    flex: 8,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    placeholderTextColor: 'gray',
    marginTop: 20,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});
