import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { TouchableOpacity,StyleSheet, Text } from 'react-native';
import { fonts } from '../constants';
const button = (props,navigation) => {
    return (
        <TouchableOpacity style={styles._touchable} onPress={() => navigation.navigate('{props.navItem}')}>
            <Text style={{color:"white", fontFamily:fonts.med}}>{props.name}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    _touchable: 
        { width: 150, height: 40,marginTop:10, justifyContent: 'center', alignItems: 'center', backgroundColor: "rgb(43,157,179)",borderRadius:5 }
    
})
export default button;