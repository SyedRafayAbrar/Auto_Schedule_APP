import React, { Component } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { SCREEN_WIDTH } from "../utils/constants";
import Home from '../Screens/Home';
import Teachers from '../Screens/Teachers';
import Courses from '../Screens/Courses';
import SideMenu from '../Screens/SideMenu';
import  _addTeacher from '../Screens/addTeacher';
import  _addRoom from '../Screens/addRoom';
import  _addCourse from '../Screens/addCourses';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Teachers: {screen: Teachers},
  Courses: {screen: Courses},
  addTeacher:{screen: _addTeacher},
  addRoom:{screen: _addRoom},
  addCourse:{screen: _addCourse}
});

export const appStack = createAppContainer(MainNavigator);




export const AppDrawer = createDrawerNavigator({
  Home: appStack,
}
  ,
  {
      contentComponent: props => <SideMenu {...props} />,
      drawerWidth: SCREEN_WIDTH * 0.68,
      drawerType: 'slide',
      // overlayColor: 'rgba(0,0,0, 0.5)'
      overlayColor: 'transparent'
  }
)
export default AppDrawerContainer = createAppContainer(AppDrawer)