import React, { Component } from 'react';
import { View,StyleSheet,Text,Image } from 'react-native';
import Button from '../components/button'
import TextField from '../components/textfield'
import SwitchStack from '../routes/index.js';
import AppStack from '../routes/appStack.js';

import { fonts, Custom_Width } from '../utils/constants';
class Login extends Component {
    state = {  }
    render() {
        return (
            <View style={styles.container}>
                <View style={{marginBottom:50,}}>
                <Text style={styles._header}>AUTO<Text style={{ fontFamily:fonts.light,
        fontSize:30,
        textAlign:"center"}}> SCHEDULER</Text>
                </Text>
                
                <View style={{height:1,
        backgroundColor:"gray"}}></View>
                </View>
                
                <TextField placeholder={"Email"}  isSecure={false} label={"Email"}></TextField>
                <TextField placeholder={"Password"}  isSecure={true} label={"Password"}></TextField>
                <Button name={"login"} onScreenChange={()=>this.props.navigation.navigate("App")}></Button>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:"white",
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    _header:{
        fontFamily:fonts.bold,
        color:"rgb(39,44,49)",
        fontSize:30,
        textAlign:"center"
        
    }
})
export default Login;