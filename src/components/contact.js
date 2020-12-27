import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import mainStyle from '../config/styles';

const ContactTile = ({data, name, subname, rightname,}) => {
  return (
    <View  style={{backgroundColor:"white", width:'100%', height: 70, flexDirection:'row'}}>
        <View style={styles.circle}>
            <Image style={styles.imageicon} source={data}/>
        </View>
        <View style={{flexDirection:'row',width:'82%', justifyContent:'space-between', backgroundColor:'white', paddingRight:20}}>
            <View style={styles.leftcontainer}>
                <Text style={styles.maintext}>{name}</Text>
                <Text style={{color:'grey'}}>{subname}</Text>
            </View>
            
            <View style={{justifyContent:'center'}}>
                <Text style={styles.right}>{rightname}</Text>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
  leftcontainer: {
    backgroundColor:'white',
    padding:5,
    paddingLeft:10,
    alignItems:'flex-start',
    justifyContent:'center',
  },
  imageicon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  right:{
    color:'grey',
    alignSelf:'center',
    
  },
  circle:{
    backgroundColor:mainStyle.colors.primary, 
    height:50, 
    width:50, 
    borderRadius :50/2,   
    alignSelf:'center',
    justifyContent:'flex-start',
    marginLeft:10
  },
});

export default ContactTile;
