import { TouchableOpacity,StyleSheet,Text,TextInput,Dimensions, View } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import { isIphoneX } from 'react-native-iphone-x-helper';
import { RFValue } from "react-native-responsive-fontsize";
export const colors = {
    orange: '#ff4b00',
    black: '#3c4245',
    graphite: '#202020',
    grey: '#919fa4',
    bg: '#f1f1f1',
    cardColor: '#ffffff',
    green: '#09a601',
    red: '#ff0000',
    darkgrey: '#d9d9d9',
    greyText: '#a7aeb5',
    darkgrey2: "#393e41",
    darkgrey3: "#575d63",
    searchBar: '#f1f1f1',
    grayishText: "#383838",
    border: "#c1cbda",
    sidemenu: "#fafafa",
    btnGreen: "#38b069",
    grad2: "#ef4269",
    grad1: "#f66b25",
    gradOrange: "#f47347",
    currGrey: "#929ba3",
    backGrey: '#e6e8e9'
  }
  
export function Custom_Width(size){
    return Dimensions.get('window').width-size
}

export function Ratio_Width(size){
    return size/Dimensions.get('window').width
}

export function Custom_Font(size){
    return Dimensions.get('window').height
}

export const fonts = {
    bold: "Effra-Bold",
    med: "EffraMedium-Regular",
    light: "EffraLight-Regular"
  }

  export const SCREEN_WIDTH = Dimensions.get('window').width;


export function RF(size) {
  return isIphoneX() ? RFValue(size) - 2 : RFValue(size);
}

export function WP(size) {
  return widthPercentageToDP(size)
}

export function HP(size) {
  return heightPercentageToDP(size)
}


export function CFL(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function floatPad(num) {
  return (Math.round(num * 100) / 100).toFixed(2);
}
