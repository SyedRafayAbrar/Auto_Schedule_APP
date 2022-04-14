import React from 'react';

import { TouchableOpacity,StyleSheet,Text,TextInput,Dimensions, View } from 'react-native';
import { Custom_Width, fonts } from '../utils/constants';

const textfield = (props) => {
    return (
        <View style={styles.container}> 
            <Text style={{color:"black", fontFamily:fonts.med}}>{props.label}</Text>
            <TextInput secureTextEntry={props.isSecure} placeholder={props.placeholder} style={styles._textfield}></TextInput>
        </View>
        
        
    );
}
const styles=StyleSheet.create({
    container:{
        width: Custom_Width(20),
        justifyContent:"center",
    },
    _textfield:{
        marginBottom:10,
        paddingLeft:10,
        borderRadius: 10,
        justifyContent:"center",
        height:50,
        borderBottomWidth:1,
        borderColor:"gray",
        width: Custom_Width(20),
        // backgroundColor:"transparent",
    }
})
export default textfield;