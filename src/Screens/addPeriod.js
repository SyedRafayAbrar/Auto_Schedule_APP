import React, { Component } from 'react';
import { StyleSheet, View, Text,Picker,Modal,TouchableOpacity } from 'react-native';
import { fonts, Custom_Width,SCREEN_WIDTH } from '../utils/constants';


get_time_List=(interval,start_Time)=>{
    var result = [];                      // Results will go here
    var am_pm = "AM"
//    interval = 15
    var int = 60/interval
    var interVal_Hour = 0
    for(var i = start_Time;i<24;i++){
        // interVal_Hour += i
        if (i == 12){
            am_pm = "PM"
        }
        for(var j = 0;j<int;j++){
            interVal_Hour+=interval
            if (interVal_Hour == 60){
                
                var r = `${i+1}:00 ${am_pm}`
            result.push(r)
            }else{
                var r = `${i}:${interVal_Hour} ${am_pm}`
            result.push(r)
            }
            
        }
        interVal_Hour = 0
    }
  
    console.log(result); // show results
return result
}



getTime=()=>{
    // for get_time_List(15,6);
    {get_time_List(15,6).map(element => 
        <Picker.Item label={element} value="java" />
      ) }
   
}

class AddPeriod extends Component {
   
    PickerModal=()=>{
      
        if(this.state.isModalShowing){
        <Modal>
        <Picker 
                selectedValue={this.state.language}
                style={{height: 50, width: 100}}
                onValueChange={(itemValue, itemIndex) =>
                    isFrom ? this.setState({fromTime: itemValue}):this.setState({toTime: itemValue})
                    }>
                    {get_time_List(15,6).map(element => 
                    <Picker.Item label={element}/>
                    )}
        </Picker>
        </Modal>
        }
        this.setState({
            isModalShowing:!(this.state.isModalShowing)
        });
    }
    ToPickerModal=()=>{
      
        if(this.state.isModalShowing){
        <Modal>
        <Picker 
                selectedValue={this.state.language}
                style={{height: 50, width: 100}}
                onValueChange={(itemValue, itemIndex) =>
                    isFrom ? this.setState({fromTime: itemValue}):this.setState({toTime: itemValue})
                    }>
                    {get_time_List(15,6).map(element => 
                    <Picker.Item label={element}/>
                    )}
        </Picker>
        </Modal>
        }
        this.setState({
            isModalShowing:!(this.state.isModalShowing)
        });
    }
    
    state = {
        
        selectedHours: 0,
        selectedtime:"",
        selectedMinutes: 0,
        isModalShowing:false,
        fromTime:"",
        toTime:""
        
      }
      render() {
        const { selectedHours, selectedMinutes } = this.state;
        
        return (
            

          <View style={styles.container}>
}
            <View style={{marginBottom:50,}}>
                <Text style={styles._header}>Add<Text style={{ fontFamily:fonts.light,
        fontSize:30,
        textAlign:"center"}}> Period</Text>
                </Text>
                
                <View style={{height:1,
        backgroundColor:"gray"}}></View>
                </View>
                <Text>From</Text>
        <TouchableOpacity onPress={this.PickerModal} style={{marginTop:20,borderWidth:1,paddingLeft:5,paddingRight:5,height:60,borderRadius:5}}>
        <Text style={{ marginTop:10,fontFamily:fonts.bold,
        color:"rgb(39,44,49)",
        fontSize:30,
        textAlign:"center"}}>Press to select From Timings</Text>
        </TouchableOpacity>
        <Text>To</Text>
        <TouchableOpacity onPress={this.ToPickerModal} style={{marginTop:20,borderWidth:1,paddingLeft:5,paddingRight:5,height:60,borderRadius:5}}>
        <Text style={{ marginTop:10,fontFamily:fonts.bold,
        color:"rgb(39,44,49)",
        fontSize:30,
        textAlign:"center"}}>Press to select Timings</Text>
        </TouchableOpacity>
           
          </View>
        );
      }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginLeft:50,
      marginRight:50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    _header:{
        fontFamily:fonts.bold,
        color:"rgb(39,44,49)",
        fontSize:30,
        textAlign:"center"
        
    }
  });
  

export default AddPeriod;


