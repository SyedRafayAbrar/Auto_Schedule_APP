import React, { Component } from 'react';
import { View,StyleSheet,Text,Image } from 'react-native';
import { fonts, Custom_Width } from '../constants';

class Home extends Component {
    state = {  }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inner_container}>
                    
                </View>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    container:{
        
        flex:1,
        
        alignItems:"center"
    },
    inner_container:{
        flex:1,
        backgroundColor:"gray",
        alignItems:"center"
    },

    _header:{
        fontFamily:fonts.bold,
        color:"rgb(39,44,49)",
        fontSize:30,
        textAlign:"center"
        
    }
})
export default Home;