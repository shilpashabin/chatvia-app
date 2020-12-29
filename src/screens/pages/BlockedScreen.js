import React, { Component } from 'react';
import { Text,View,SafeAreaView,StyleSheet,Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


const  BlockedScreen = () => {
  
  return (
    <View style={{backgroundColor:'white'}}>
        <View style={styles.upperContainer}>
            <View style={styles.headerContainer}>
              <MaterialIcons name="arrow-back" size={25} color="#fff"/>
            <View style={styles.innerContainer}>
        <View style={styles.nameContainer}>
              <Text style={styles.headerHeading} >Blocked contacts</Text>
            </View></View></View></View> 
      <View style={styles.viewImage}> 
      <Image source={require('../../assets/sample/blocked.png')}  style = {styles.image}  resizeMode='contain'>
        </Image> 
      </View>
      </View>

  )
};

export default BlockedScreen;

const styles = StyleSheet.create({
      viewImage:{
        flex:1,
    }, 
    image: {
      alignSelf: 'center',
      marginVertical:1
    },
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