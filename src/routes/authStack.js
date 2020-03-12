import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../Screens/Login';
import Signup from '../Screens/Signup';
import Selection from '../Screens/Selection';
const authStack = () => {
    
        const Stack = createStackNavigator();
        return (
          <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Selection" component={Selection} />
            <Stack.Screen name="SignUp" component={Signup} />
            <Stack.Screen name="SignIn" component={Login} />
          </Stack.Navigator>
        </NavigationContainer>
        );

}

export default authStack;