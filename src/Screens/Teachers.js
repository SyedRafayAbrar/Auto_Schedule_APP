import React, { Component } from 'react';
import { View,Button,StyleSheet,Text,Image,TouchableOpacity,Platform,Alert, FlatList, } from 'react-native';
import { fonts, Custom_Width } from '../constants';



let userList = [
    {
        'id':'1',
        'fn':'Ali',
        'ln':'Ghafoor',
        'age':15,
        'gpa':3.48
      },
      {
        'id':'2',
        'fn':'Ali',
        'ln':'Ghafoor',
        'age':15,
        'gpa':3.48
      },
      {
        'id':'3',
        'fn':'Ali',
        'ln':'Ghafoor',
        'age':15,
        'gpa':3.48
      },
      {
        'id':'4',
        'fn':'Ali',
        'ln':'Ghafoor',
        'age':15,
        'gpa':3.48
      },
      {
        'id':'5',
        'fn':'Ali',
        'ln':'Ghafoor',
        'age':15,
        'gpa':3.48
      },
      {
        'id':'6',
        'fn':'Ali',
        'ln':'Ghafoor',
        'age':15,
        'gpa':3.48
      }
];

class Teachers extends Component {
    constructor(props){
        super(props);

        this.state = {
            'data':[],
            'isReloaded' : false
        }
    }

    onItemClicked(item){
        Alert.alert("Title",item.fn);
    }

    
  _renderItem = ({item}) => 
  <View style={{flex:1,width:'100%', padding:20,borderColor:'#FF0000',borderWidth:1}}>
      <Text style={{textAlign:'center',margin:10}}>{item.fn}</Text>
      <Text style={{textAlign:'center',margin:10}}>{item.ln}</Text>
      <TouchableOpacity onPress={this.onItemClicked.bind(this,item)} style={{alignItems:'center',justifyContent:'center'}}>
        <Text style={{textAlign:'center',margin:10,fontSize:16,fontWeight:'600'}}>Click Here</Text>
      </TouchableOpacity>
  </View> 

onPress = () => {
    this.setState({data:userList,isReloaded:true})
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
    backgroundColor: '#F5FCFF',
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
});


export default Teachers;