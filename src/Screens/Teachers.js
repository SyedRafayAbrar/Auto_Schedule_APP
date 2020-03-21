import React, { Component } from 'react';
import axios from 'axios';
import { View,Button,StyleSheet,Text,Image,TouchableOpacity,Platform,Alert, FlatList, } from 'react-native';
import { fonts, Custom_Width } from '../utils/constants';



// let userList = [
//     {
//         'id':'1',
//         'fn':'Ali',
//         'ln':'Ghafoor',
//         'age':15,
//         'gpa':3.48
//       },
//       {
//         'id':'2',
//         'fn':'Ali',
//         'ln':'Ghafoor',
//         'age':15,
//         'gpa':3.48
//       },
//       {
//         'id':'3',
//         'fn':'Ali',
//         'ln':'Ghafoor',
//         'age':15,
//         'gpa':3.48
//       },
//       {
//         'id':'4',
//         'fn':'Ali',
//         'ln':'Ghafoor',
//         'age':15,
//         'gpa':3.48
//       },
//       {
//         'id':'5',
//         'fn':'Ali',
//         'ln':'Ghafoor',
//         'age':15,
//         'gpa':3.48
//       },
//       {
//         'id':'6',
//         'fn':'Ali',
//         'ln':'Ghafoor',
//         'age':15,
//         'gpa':3.48
//       }
// ];

class Teachers extends Component {
    constructor(props){
        super(props);

        this.state = {
            'data':[],
            'isReloaded' : false
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

      <Text style={styles.item_Header_Text}>{item.professor_name}</Text>
      <Text style={styles.itemText}>{item.professor_email}</Text>
     
      <TouchableOpacity onPress={this.onItemClicked.bind(this,item)} style={{borderBottomWidth:1,
        borderColor:"white",marginTop:10,alignItems:'center'}}>
        <Text style={{textAlign:'center',color:"white",margin:10,fontSize:16,fontWeight:'600'}}>Click Here to see availability</Text>
      </TouchableOpacity>
  </View> 

onPress = () => {
  axios.get('http://68.183.118.157:8000/api/professors').then(res=>{
    const professors = res.data.data
    
    console.log(professors)
    this.setState({data:professors,isReloaded:true})
  })
    
}
renderCondition(){
    if (this.state.isReloaded == false){
        return <TouchableOpacity style={{width:100,height:100,alignItems:'center',justifyContent:'center'}} onPress={this.onPress}><Text>Test</Text></TouchableOpacity>
        
    }else{
return ( <FlatList
    style ={{flex:1,width:'100%',padding:10}}
    data={this.state.data}
    renderItem={this._renderItem}
    keyExtractor={(item, index) => item.id}/>)
    }
}



  render() {
    return (
        
    
      <View style={styles.container}>
          {this.renderCondition()}
          
         
      </View>
      
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white",
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
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
});


export default Teachers;

