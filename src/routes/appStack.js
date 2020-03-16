import React, { Component } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from '../Screens/Home';
import Teachers from '../Screens/Teachers';
import Courses from '../Screens/Courses';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Teachers: {screen: Teachers},
  Courses: {screen: Courses}
});

const appStack = createAppContainer(MainNavigator);

export default appStack;