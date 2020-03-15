import { TouchableOpacity,StyleSheet,Text,TextInput,Dimensions, View } from 'react-native';

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