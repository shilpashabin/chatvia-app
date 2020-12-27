
import * as React from 'react';
import { Dimensions } from 'react-native';
import {
  
  StyleSheet,
  View,
  Text,
  TouchableOpacity
 
} from 'react-native';



const Tab =  ({ color,tab,onPress, }) => {
  
  return( 
  <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={{color}}>{tab.name}</Text>
  </TouchableOpacity>

  );
};

const styles = StyleSheet.create({

    
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:5,
        backgroundColor:'#E8E8E8',

    },

});
export default Tab;