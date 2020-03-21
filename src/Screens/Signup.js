import React, { Component } from 'react';
import { View,StyleSheet,Text,Image } from 'react-native';
import Button from '../components/button'
import TextField from '../components/textfield'
import { fonts, Custom_Width } from '../utils/constants';

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
                <TextField placeholder={"Full Name"} isSecure={false} label={"Full Name"}></TextField>
                <TextField placeholder={"Username"} isSecure={false} label={"Username"}></TextField>
                <TextField placeholder={"Email"} isSecure={false} label={"Email"}></TextField>
                <TextField placeholder={"Password"} isSecure={true} label={"Password"}></TextField>
                
                <Button name={"SignUp"} onScreenChange={()=>this.props.navigation.navigate("Home")}></Button>
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