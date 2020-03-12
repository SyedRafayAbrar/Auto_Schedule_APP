import React, { Component } from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/Screens/Login';
import Signup from './src/Screens/Signup';
import Selection from './src/Screens/Selection';


class App extends Component {
  state = {  }
  
  render() {
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
}

export default App;