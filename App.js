import React, { Component } from 'react';
import { Image } from 'react-native';
import SwitchStack from './src/routes/index.js';
import AppStack from './src/routes/appStack';
import AuthStack from './src/routes/authStack';

class App extends Component {
  state = {  }
  
  render() {
    return <AppStack/>
  }
}

export default App;