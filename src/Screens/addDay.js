import React, { Component } from 'react';
import { View,StyleSheet,Text,Image,Switch,TouchableOpacity} from 'react-native';
import Button from '../components/button'
import axios from 'axios'
import TextField from '../components/textfield'

import AddTeacherModal from './AddTeacherModal';

import { fonts, Custom_Width,SCREEN_WIDTH } from '../utils/constants';
class addDay extends Component {
    state = {
        
       switch1Value: false,
       switch2Value: false,
   
    }

  
     onUserInvite = (item) => {
        const items = this.state.selectedUsers;
        items.push(item)
        this.setState({ selectedUsers: items });
    }

   

    toggleSwitch1 = (value) => {
        
        this.setState({switch1Value: value})
        console.log('Switch 1 is: ' + this.state.switch1Value)
     }

     toggleSwitch2 = (value) => {
        this.setState({switch2Value: value})
        
        console.log('Switch 1 is: ' + this.state.switch2Value)
     }
     switchFunc=()=>{
        if (this.state.switch1Value){

        }
     }

     onRemoveUser = (item, index) => {
        const items = this.state.selectedUsers.filter((sitem) => sitem.id !== item.id);
        this.setState({ selectedUsers: items });
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{marginBottom:50,}}>
                <Text style={styles._header}>Add<Text style={{ fontFamily:fonts.light,
        fontSize:30,
        textAlign:"center"}}> Day</Text>
                </Text>
                
                <View style={{height:1,
        backgroundColor:"gray"}}></View>
                </View>
                
                <TextField placeholder={"Day Name"} isSecure={false} label={"Day Name"}></TextField>

             
                <Button name={"Submit"} onScreenChange={()=>this.props.navigation.navigate("addDay")}></Button>

               
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
export default addDay;