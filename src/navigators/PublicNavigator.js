import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginWithPhone from '../loginscreen/LoginWithPhone';
import MainLoginScreen from '../loginscreen/MainLoginScreen';
import OTPVerificationScreen from '../loginscreen/OTPVerificationScreen';

const PublicNavigator = () => {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
<Stack.Screen
          component={MainLoginScreen}
          name="MainLoginScreen"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={LoginWithPhone}
          name="LoginWithPhone"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={OTPVerificationScreen}
          name="OTPVerificationScreen"
          options={{headerShown: false}}
        />    </Stack.Navigator>
  )
}

export default PublicNavigator