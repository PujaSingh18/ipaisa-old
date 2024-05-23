/* eslint-disable prettier/prettier */
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import IconComponent from '../SvgImages/IconComponent';

export default function SearchBar() {
  return (
    <View style={[styles.container]}>
      <IconComponent/>
      <Pressable
        style={{width: '80%', height: 50, justifyContent: 'center'}}>
        <TextInput style={{fontSize: 16, alignItems: 'center'}} placeholder='Search by supplier name'/>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 5,
    margin: 10,
    alignContent: 'center',
    borderRadius:10
  },
});
