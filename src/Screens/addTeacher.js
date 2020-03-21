import React, { Component } from 'react';
import { View,StyleSheet,Text,Image,Switch,TouchableOpacity} from 'react-native';
import Button from '../components/button'
import axios from 'axios'
import TextField from '../components/textfield'

import AddTeacherModal from './AddTeacherModal';

import { fonts, Custom_Width,SCREEN_WIDTH } from '../utils/constants';
class addTeacher extends Component {
    state = {
        isTimeModalVisible: false,
       switch1Value: false,
       users: [
    ],
    selectedUsers: [
       
    ],
    }

    componentDidMount(){
        axios.get('http://68.183.118.157:8000/api/time_day').then(res=>{
            // console.log(res.data)
            var day_time = []
            {res.data.data.map(element => 
                day_time.push({"id":element.id,"name":element.day_time})
                // <Text>{element}</Text>
              ) }
            this.setState({
                users:day_time
            })
        })
    }
     onUserInvite = (item) => {
        const items = this.state.selectedUsers;
        items.push(item)
        this.setState({ selectedUsers: items });
    }

     toggleAddTeacherModal = () => {
        // this.setState({data:professors,isReloaded:true})
        this.setState({
            isTimeModalVisible:!this.state.isTimeModalVisible
        })
    }

    toggleSwitch1 = () => {
        this.setState({switch1Value: !this.state.switch1Value})
        
        console.log('Switch 1 is: ' + this.state.switch1Value)
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
        textAlign:"center"}}> Teacher</Text>
                </Text>
                
                <View style={{height:1,
        backgroundColor:"gray"}}></View>
                </View>
                
                <TextField placeholder={"Teacher Name"} isSecure={false} label={"Name"}></TextField>

                <TextField placeholder={"Teacher Email"} isSecure={false} label={"Teacher Email"}></TextField>
                
                {/* SWITCH START */}

              <View style={{width:SCREEN_WIDTH,flexDirection:"row",alignItems:"center"}}>
              
              <View  style={{justifyContent:"flex-start",flex: 2,marginLeft:10}}>
              <Text>Toggle this to for Permanant Teacher</Text>
              </View>

                <View style={{alignItems:"flex-end", flex: 1,marginRight:10}} >

                    <Switch onValueChange = {this.toggleSwitch1} value = {this.state.switch1Value}/>  
                </View>

                    </View>  
                    
                    {/* SWITCH END */}


                    {/* <Text style={{ marginTop:10,fontFamily:fonts.med,
        color:"rgb(39,44,49)",
        fontSize:20,
        textAlign:"center"}}> Timings</Text> */}
        
        <TouchableOpacity onPress={this.toggleAddTeacherModal} style={{marginTop:20,borderWidth:1,paddingLeft:5,paddingRight:5,height:60,borderRadius:5}}>
        <Text style={{ marginTop:10,fontFamily:fonts.bold,
        color:"rgb(39,44,49)",
        fontSize:30,
        textAlign:"center"}}>Press to select Timings</Text>
        </TouchableOpacity>
        <AddTeacherModal
                    isModalVisible={this.state.isTimeModalVisible}
                    toggleModal={this.toggleAddTeacherModal}
                    onItemSelect={this.onUserInvite}
                    selectedUsers={this.state.selectedUsers}
                    onRemoveItem={this.onRemoveUser}
                    users={this.state.users}
                />
                <Button name={"Submit"} onScreenChange={()=>this.props.navigation.navigate("addTeacher")}></Button>

               
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
export default addTeacher;