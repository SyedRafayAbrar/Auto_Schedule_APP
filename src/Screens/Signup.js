import React, { Component } from 'react';
import { View,StyleSheet,Text,Image } from 'react-native';
import Button from '../components/button'
import TextField from '../components/textfield'
import { fonts, Custom_Width } from '../constants';
class Signup extends Component {
    state = {  }
    render() {
        return (
            <View style={styles.container}>
                <View style={{marginBottom:50,}}>
                <Text style={styles._header}>SignUp
                </Text>
                
                <View style={{height:1,
        backgroundColor:"gray"}}></View>
                </View>
                <TextField placeholder={"Full Name"} label={"Full Name"}></TextField>
                <TextField placeholder={"Username"} label={"Username"}></TextField>
                <TextField placeholder={"Email"} label={"Email"}></TextField>
                <TextField placeholder={"Password"} label={"Password"}></TextField>
                <Button name={"SignUp"}></Button>
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
export default Signup;