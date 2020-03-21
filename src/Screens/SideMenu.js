import React, { Component } from 'react';
import { View,Button,SafeAreaView,StyleSheet,Text,Image,TouchableOpacity,Platform,Alert,} from 'react-native';
import { fonts, Custom_Width } from '../utils/constants';
import SideMenuButton from '../components/sidemenu'

class SideMenu extends Component {
    constructor(props){
        super(props);

        this.state = {
            'data':[],
            'isReloaded' : false
        }
    }


onPress = () => {
    this.setState({data:userList,isReloaded:true})
}

  render() {
    let pic = {
      uri: 'http://68.183.118.157:8000/static/dist/img/AdminLTELogo.png'
    };
   return(

        <SafeAreaView style={styles.container}>
           <Image source={pic} style={{alignSelf:"center",width: 193, height: 110}}/>
           <SideMenuButton name={"Add Teacher"} onScreenChange={()=>this.props.navigation.navigate("addTeacher")}/>
           <SideMenuButton name={"Add Room"} onScreenChange={()=>this.props.navigation.navigate("addRoom")}/>
           <SideMenuButton name={"Add Course"} onScreenChange={()=>this.props.navigation.navigate("addRoom")}/>
        </SafeAreaView>

  
  
          
       
   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
        backgroundColor: "white",
        shadowOpacity: 0.6,
        shadowColor: "darkgrey"

  },
  
});


export default SideMenu;