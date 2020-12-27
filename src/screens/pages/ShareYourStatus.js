import React, { Component } from 'react';
import { Text,View,SafeAreaView,StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


import SwitchTile from '../../components/switch_tile';

import DividerTile from '../../components/divider'
const Sharestatus = () => {
  
  return (

    <View style={{backgroundColor:'white'}}>
        <View style={styles.upperContainer}>
            <View style={styles.headerContainer}>
              <MaterialIcons name="arrow-back" size={25} color="#fff"/>
            <View style={styles.innerContainer}>
        <View style={styles.nameContainer}>
              <Text style={styles.headerHeading} >Share Your Status</Text>
            </View>
            </View></View></View> 
       

      
      
      <View style={{backgroundColor:'white',width:'100%'}}>
            
            <SwitchTile text='Last seen' subText='show the last time were using ChatVia'/>
             <DividerTile/>
             <SwitchTile text='Device' subText='show which device you on(phone,tablet)'/>
             
            <DividerTile/>

      </View>
     

       
    </View>

  )
};

export default Sharestatus;
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 55,
    backgroundColor:'green',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 5,
    paddingLeft: 15
},
headerHeading: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    
},nameContainer: {
  marginLeft: 20
},
innerContainer: {
  flexDirection: 'row',
  marginHorizontal: 2,
  justifyContent: 'space-between',
  alignSelf: 'center',
  marginHorizontal: 10,
  width: '70%',
  alignItems: 'center'
},
optionButton: {
  paddingRight: 20,
  paddingLeft: 20,
  paddingVertical: 20,
},
});