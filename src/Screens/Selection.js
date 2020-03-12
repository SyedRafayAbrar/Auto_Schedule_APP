import React, { Component } from 'react';
import { View,StyleSheet,Text,Image } from 'react-native';
import Button from '../components/button'
import TextField from '../components/textfield'
import { fonts, Custom_Width } from '../constants';
class Selection extends Component {
    state = {  }
    render() {
        let pic = {
            uri: 'http://68.183.118.157:8000/static/dist/img/AdminLTELogo.png'
          };
        return (
            
            <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{flex:4, backgroundColor: 'white',justifyContent:"center", alignContent:"center",alignItems:"center"}}>
        <Image source={pic} style={{width: 193, height: 110}}/>
        
        <View style={{marginBottom:50,}}>
                <Text style={styles._header}>AUTO<Text style={{ fontFamily:fonts.light,
        fontSize:30,
        textAlign:"center"}}> SCHEDULER</Text>
                </Text>
                
                <View style={{height:1,
        backgroundColor:"gray"}}></View>
                </View>
        </View>
        
        <View style={{flex:1}} >
        
        <View style={{ flex: 1, flexDirection: 'row', justifyContent:"center"}}>
        <Button name={"SignUp"} onScreenChange={()=>this.props.navigation.navigate("SignUp")}></Button>
        
        <View style={{width:10, }}></View>
        <Button name={"SignIn"} navItem={"SignIn"} onScreenChange={()=>this.props.navigation.navigate("SignUp")}></Button>
        </View>
        </View>
       
      </View>
    
        );
    }
}

const styles=StyleSheet.create({
    container:{
        // backgroundColor:"white",
        flex:1,
        
        alignItems:"center"
    },
    _header:{
        fontFamily:fonts.bold,
        color:"rgb(39,44,49)",
        fontSize:30,
        textAlign:"center"
        
    }
})
export default Selection;