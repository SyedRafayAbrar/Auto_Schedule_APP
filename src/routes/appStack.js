import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Screens/Home';
const appStack = () => {
    
        const Stack = createStackNavigator();
        return (
          <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />      
          </Stack.Navigator>
        </NavigationContainer>
        );

}

export default appStack;