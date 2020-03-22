import React, { Component } from 'react';
import { StyleSheet, View, Text,Picker } from 'react-native';


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

class AddSemester extends Component {
    state = {
        selectedHours: 0,
        selectedtime:"",
        selectedMinutes: 0,
        
      }
      render() {
        const { selectedHours, selectedMinutes } = this.state;
        
        return (
          <View style={styles.container}>
           
           <Picker
            selectedValue={this.state.language}
            style={{height: 50, width: 100}}
            onValueChange={(itemValue, itemIndex) =>
            this.setState({selectedtime: itemValue})
                }>
                {get_time_List(15,6).map(element => 
                <Picker.Item label={element} value="java" />
                )}
 
  <Text>{ Date.now().toString}</Text>
   
   {/* <DatePickerIOS></DatePickerIOS> */}
</Picker>

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
  });
  

export default AddSemester;