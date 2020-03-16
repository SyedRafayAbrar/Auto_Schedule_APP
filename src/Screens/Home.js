import React, { Component } from 'react';
import axios from 'axios'
import { View,StyleSheet,Text,Image,TouchableOpacity } from 'react-native';
import { fonts, Custom_Width } from '../constants';


class Home extends Component {
    state = {  
    'teacher_count':0,
    'course_count' : 0,
    'time_slots_count':0,
    'rooms_count':0
 }
 componentDidMount(){
    axios.get('http://68.183.118.157:8000/api/getcount')
    .then(res=>{
        console.log(res.data)
        this.setState({
            teacher_count:res.data.data.teacher_count,
            course_count:res.data.data.course_count,
            time_slots_count: res.data.data.timeslot_count,
            rooms_count:res.data.data.rooms_count

        })
    }).catch((err)=>{
        console.warn(err)
    })
 }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.innerContainer}>

                    <View style={{flex:1,flexDirection:"row"}}>
                        
                        <TouchableOpacity  style={styles._boxes0} onPress={()=>this.props.navigation.navigate('Teachers')}>
                        
                        <Text style={styles._title}>Lecturers</Text>
                        <Text style={styles._text}>{this.state.teacher_count}</Text>
                        
                        </TouchableOpacity>

                        <TouchableOpacity style={styles._boxes1} >

                        <Text style={styles._title}>Rooms</Text>
                        <Text style={styles._text}>{this.state.rooms_count}</Text>
                        </TouchableOpacity>

                    </View>
               

                    <View style={{flex:1,flexDirection:"row"}}>

                    <TouchableOpacity style={styles._boxes2} onPress={()=>this.props.navigation.navigate('Courses')}>
                        
                        <Text style={styles._title}>Courses</Text>
                        <Text style={styles._text}>{this.state.course_count}</Text>
                        
                        </TouchableOpacity>
                        <TouchableOpacity style={styles._boxes3}>
                        
                        <Text style={styles._title}>TimeSlots</Text>
                        <Text style={styles._text}>{this.state.time_slots_count}</Text>
                        
                        </TouchableOpacity>
                    </View>

                         
                <View style={{flex:0.4}}>
                    <TouchableOpacity style={{flex:1,margin:10, backgroundColor:"rgb(39,44,49)",borderRadius:10,justifyContent:"center"}}>
                    <Text style={styles._title}>Create Table</Text>
                    </TouchableOpacity>
                </View>

                    
                </View>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    container:{
        
        flex:1,
        
    },
    innerContainer:{
        margin:20,
        flex:1,
        
        flexDirection:"column"
    },
   _boxes0:{
       margin:5,
       borderRadius: 10,
    backgroundColor:"rgb(36,162,183)",
       alignContent:"center",
       justifyContent:"center",
    flex:1
   },
   _boxes1:{
    margin:5,
    borderRadius: 10,
    backgroundColor:"rgb(48,	166,	74	)",
       alignContent:"center",
       justifyContent:"center",
    flex:1
   },
   _boxes2:{
    margin:5,
    borderRadius: 10,
    backgroundColor:"rgb(253,192,47	)",
       alignContent:"center",
       justifyContent:"center",
    flex:1
   },
   _boxes3:{
    margin:5,
    borderRadius: 10,
       backgroundColor:"rgb(218,	55,	73	)",
       alignContent:"center",
       justifyContent:"center",
    flex:1
   },
    _header:{
        fontFamily:fonts.bold,
        color:"rgb(39,44,49)",
        fontSize:30,
        textAlign:"center"
        
    },
    _text:{
        
        fontFamily:fonts.bold,
        color:"white",
        fontSize:50,
        textAlign:"center"
    },_title:{
        
        fontFamily:fonts.bold,
        color:"white",
        fontSize:30,
        textAlign:"center"
    }

})
export default Home;

// 36	162	183	
// 48	166	74	
// 253	192	47	
// 218	55	73	