import React, { Component } from 'react';
import { createSwitchNavigator, createStackNavigator,createAppContainer } from 'react-navigation';
// import { createStackNavigator } from '@react-navigation/stack';
import Auth from './authStack';
import Home from './appStack';

const SwitchStack = createSwitchNavigator({
    // Loader: Check,
    Auth: Auth,
    // App: Home,
})

export default createAppContainer(SwitchStack)