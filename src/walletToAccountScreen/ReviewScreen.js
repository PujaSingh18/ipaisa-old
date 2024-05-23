/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Header from '../commonComponent/Header';

const data={
  heading: 'Review Summary',
  prevPath:'EnterAmount'
}

export default function ReviewScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header data={data}/>
      <View style={styles.body}>
        <View style={styles.sec1}>
          <View>
            <Image source={require(`../image/inr.png`)} />
            <Text>1000</Text>
          </View>
        </View>
        <View style={styles.sec2}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  header: {
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: '#000088',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 15,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 20,
  },
  sec1: {
    width: '100%',
    flex: 4,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  sec2: {
    flex: 4,
  },
});
