import React, { Component } from 'react';
import { StyleSheet, View, Text,Picker,Modal,TouchableOpacity } from 'react-native';
import { fonts, Custom_Width,SCREEN_WIDTH } from '../utils/constants';
import Button from '../components/button'

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
   
    componentDidMount(){
        this.setState({
            timeArray:get_time_List(15,6)
        })
    }

    state = {
        timeArray:[],
        selectedHours: 0,
        selectedtime:"",
        selectedMinutes: 0,
        isModalShowing:false,
        isFrom:false,
        fromTime:"",
        toTime:"",
      }


    PickerModal=()=>{
        this.setState({
            isModalShowing:!this.state.isModalShowing,
            isFrom:true
        });
        console.log(this.state.isFrom)
    }
    ToPickerModal=()=>{
        this.setState({
            isModalShowing:!this.state.isModalShowing,
            isFrom:false
        });
        console.log(this.state.isFrom)
    }

    closeModal=()=>{
        if (this.state.isFrom){
            this.setState({
                fromTime: this.state.fromTime != "" ? this.state.fromTime:this.state.timeArray[0]    
            });
            
        }else{
            this.setState({
               toTime: this.state.toTime != "" ? this.state.toTime:this.state.timeArray[0]
            });
            
        }
        this.setState({isModalShowing:false})
    }
    
  
      
      render() {
        const { selectedHours, selectedMinutes } = this.state;
        
        return (
         

          <View style={styles.container}>
            
            
            <Modal animationType="slide" transparent={true}
            visible={this.state.isModalShowing}
            onRequestClose={() => {
                console.log('Closing')
                if (this.state.isFrom){
                    this.setState({
                        fromTime: this.state.fromTime != "" ? this.state.fromTime:this.state.timeArray[0]    
                    });
                    
                }else{
                    this.setState({
                       toTime: this.state.toTime != "" ? this.state.toTime:this.state.timeArray[0]
                    });
                    
                }
              Alert.alert('Modal has been closed.');
            }}>
               <View style={{flex:1}}>
               <View style={{marginTop:150,flex:0.5}}>
                <TouchableOpacity onPress={this.closeModal}><Text style={{fontSize:30,alignSelf:"center"}}>close</Text></TouchableOpacity>
                </View>
                <View style={styles._ModalStyle}>
                    
            <Picker 
                    style={{height: 50, width: 100,justifyContent:"center",alignContent:"center",alignSelf:"center"}}
                    selectedValue={this.state.isFrom ? this.state.fromTime:this.state.toTime}
                    onValueChange={(itemValue, itemIndex) =>
                        this.state.isFrom ? this.setState({fromTime: itemValue}):this.setState({toTime: itemValue})
                        }>
                        {this.state.timeArray.map(element => 
                        <Picker.Item label={element} value={element} key={element}/>
                        )}
            </Picker>
            </View>
            </View>
            </Modal>
            


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
        fontSize:20,
        textAlign:"center"}}>{this.state.fromTime != "" ? this.state.fromTime:'Press to select From Timings'}</Text>
        </TouchableOpacity>
        <Text>To</Text>
        <TouchableOpacity onPress={this.ToPickerModal} style={{marginTop:20,borderWidth:1,paddingLeft:5,paddingRight:5,height:60,borderRadius:5}}>
        <Text style={{ marginTop:10,fontFamily:fonts.bold,
        color:"rgb(39,44,49)",
        fontSize:20,
        textAlign:"center"}}>{this.state.toTime != "" ? `${this.state.toTime}`:'Press to select To Timings'}</Text>
        </TouchableOpacity>
           <Button name={"Submit"}/>
          </View>
        );
      }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    _header:{
        fontFamily:fonts.bold,
        color:"rgb(39,44,49)",
        fontSize:30,
        textAlign:"center"
        
    },
    _ModalStyle:{
        marginLeft:50,
        marginRight:50,
        backgroundColor:"white",
        borderRadius:10,
        borderWidth:1,
        marginBottom:10,
        alignContent:"center",
        alignItems:"center",
        justifyContent:"center",
        flex:2
    }

  });
  

export default AddPeriod;


