import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from '../Screens/Login';
import Signup from '../Screens/Signup';
import Selection from '../Screens/Selection';

const MainNavigator = createStackNavigator({
  selection: {screen: Selection},
  signUp: {screen: Signup},
  signIn: {screen: Login}
});

const AuthStack = createAppContainer(MainNavigator);

export default AuthStack;