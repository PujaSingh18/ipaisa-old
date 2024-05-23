import React from 'react'
import { Text, View } from 'react-native'
import Header from '../../commonComponent/Header'

const data={
    heading:'Languages',
    prevPath:'ProfileMain',
}

export default function LanguageMain() {
  return (
<>
    <Header data={data}/>
    <View>
    <Text style={{color:'red'}}>LanguageMain</Text>
    </View>
</>
  )
}