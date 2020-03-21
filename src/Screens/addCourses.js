import React, { Component } from 'react';
import { View,StyleSheet,Text,Image,Switch,TouchableOpacity, FlatList} from 'react-native';
import Button from '../components/button'
import axios from 'axios'
import TextField from '../components/textfield'

import AddTeacherModal from './AddTeacherModal';

import { fonts, Custom_Width,SCREEN_WIDTH } from '../utils/constants';
import { ScrollView } from 'react-native-gesture-handler';
class addCourses extends Component {
    state = {
        isTimeModalVisible: false,
       switch1Value: false,
       switch2Value:false,
       users: [
    ],
    selectedUsers: [
       
    ],
    }

    componentDidMount(){
        axios.get('http://68.183.118.157:8000/api/professors').then(res=>{
            console.log(res.data)
            var day_time = []
            {res.data.data.map(element => 
                day_time.push({"id":element.professor_id,"name":element.professor_name})
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

     onItemClicked(item){
        days = ""
        {item.availability.map(element => 
          days+=element
          // <Text>{element}</Text>
        ) }
          Alert.alert("Title",days);
      }


     _renderItem = ({item}) => 
     <View style={styles.itemContainer}>
   
         <Text style={styles.item_Header_Text}>{item.name}</Text>
         <Text style={styles.itemText}>{item.id}</Text>
        
         <TouchableOpacity onPress={this.onItemClicked.bind(this,item)} style={{borderBottomWidth:1,
           borderColor:"white",marginTop:10,alignItems:'center'}}>
           <Text style={{textAlign:'center',color:"white",margin:10,fontSize:16,fontWeight:'600'}}>Click Here to see availability</Text>
         </TouchableOpacity>
     </View> 


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
        textAlign:"center"}}> Course</Text>
                </Text>
                
                <View style={{height:1,
        backgroundColor:"gray"}}></View>
                </View>
                
                <TextField placeholder={"Course Code"} isSecure={false} label={"Course Code"}></TextField>

                <TextField placeholder={"Course Name"} isSecure={false} label={"Course Name"}></TextField>

                <TextField placeholder={"Course Capacity"} isSecure={false} label={"Course Capacity"}></TextField>
                
                {/* SWITCH START */}

                <View style={{width:SCREEN_WIDTH,flexDirection:"row",alignItems:"center"}}>
              
              <View  style={{justifyContent:"flex-start",flex: 2,marginLeft:10}}>
              <Text>Toggle this to for Computer LAB</Text>
              </View>

                <View style={{alignItems:"flex-end", flex: 1,marginRight:10}} >

                    <Switch onValueChange = {this.toggleSwitch1} value = {this.state.switch1Value}/>  
                </View>

                <View  style={{justifyContent:"flex-start",flex: 2,marginLeft:10}}>
              <Text>Toggle this to for Physics LAB</Text>
              </View>

                <View style={{alignItems:"flex-end", flex: 1,marginRight:10}} >

                    <Switch onValueChange = {this.toggleSwitch2} value = {this.state.switch2Value}/>  
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
        textAlign:"center"}}>Press to select Professors</Text>
        </TouchableOpacity>
        <AddTeacherModal
                    isModalVisible={this.state.isTimeModalVisible}
                    toggleModal={this.toggleAddTeacherModal}
                    onItemSelect={this.onUserInvite}
                    selectedUsers={this.state.selectedUsers}
                    onRemoveItem={this.onRemoveUser}
                    users={this.state.users}
                />
                <Button name={"Submit"} onScreenChange={()=>this.props.navigation.navigate("addCourse")}></Button>

               
                <FlatList
    style ={{flex:1,width:'100%',padding:10,marginTop:10}}
    data={this.state.selectedUsers}
    renderItem={this._renderItem}
    keyExtractor={(item, index) => item.id}/>
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
        
    },
    itemText:{
        fontFamily: fonts.light,
        textAlign:"left",
        color:"white",
        fontSize:30,
      },
      item_Header_Text:{
        fontFamily: fonts.med,
        textAlign:"left",
        color:"white",
        fontSize:50,
      },
      itemContainer:{

        flexDirection:"column",
        marginTop:20,
        flex:1,
        width:'100%',
        paddingLeft:20,
        paddingRight:20,
        paddingTop:20,
        paddingBottom:5,
        // padding:20,
        borderRadius:10,
        backgroundColor:"rgb(36,162,183)"
      }
})
export default addCourses;