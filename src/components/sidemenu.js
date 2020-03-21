
import React from 'react';
import { TouchableOpacity,StyleSheet, Text } from 'react-native';
import { fonts } from '../utils/constants';
const sidemenuBtn = (props) => {
    return (
        <TouchableOpacity style={styles._touchable} onPress={props.onScreenChange}>
            <Text style={{color:"black", fontSize:30, fontFamily:fonts.med}}>{props.name}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    _touchable: 
        {  borderBottomWidth:1,borderTopWidth:1,height: 40,marginTop:20, justifyContent: 'center', alignItems: 'center',borderRadius:5 }
    
})
export default sidemenuBtn;