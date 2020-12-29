import React, { Component } from 'react';
import { Text,View,SafeAreaView,StyleSheet} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import SwitchTile from '../../components/switch_tile';
import TextTile from '../../components/text_tile';
import DividerTile from '../../components/divider'

const MessageScreen = () => {
  
  return (
    <View style={{backgroundColor:'white'}}>
        <View style={styles.upperContainer}>
            <View style={styles.headerContainer}>
              <MaterialIcons name="arrow-back" size={25} color="#fff"/>
            <View style={styles.innerContainer}>
        <View style={styles.nameContainer}>
              <Text style={styles.headerHeading} >Messages</Text>
            </View></View></View></View> 
     
      <View style={{backgroundColor:'white'}}>
            
            <SwitchTile text='Notification'/>
            <DividerTile/>
              <TextTile  headText='Sound' subText='ChatVia Message'/>
              <DividerTile/>
              <SwitchTile text='Vibrate'/>
            <DividerTile/>

      </View>
       
    </View>

  )
};

export default MessageScreen;

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
  
  
    
},
nameContainer: {
  marginLeft: 16,

},
innerContainer: {
  flexDirection: 'row',
  marginHorizontal: 2,
  justifyContent: 'flex-start',
  alignSelf: 'center',
  marginHorizontal: 5,
  width: '70%',


 
},
optionButton: {
  paddingRight: 20,
  paddingLeft: 20,
  paddingVertical: 20,
},
});