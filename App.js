import React, { Component } from 'react';
import { Image } from 'react-native';
import SwitchStack from './src/routes/index.js';
import AppStack from './src/routes/appStack';

class App extends Component {
  state = {  }
  
  render() {
    return <AppStack/>
  }
}

export default App;