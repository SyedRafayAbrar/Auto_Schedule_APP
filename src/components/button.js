import React from 'react';


import { TouchableOpacity,StyleSheet, Text } from 'react-native';
import { fonts } from '../utils/constants';
const button = (props) => {
    return (
        <TouchableOpacity style={styles._touchable} onPress={props.onScreenChange}>
            <Text style={{color:"white", fontFamily:fonts.med}}>{props.name}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    _touchable: 
        { alignSelf:"center",width: 150, height: 40,marginTop:10, justifyContent: 'center', alignItems: 'center', backgroundColor: "rgb(43,157,179)",borderRadius:5 }
    
})
export default button;