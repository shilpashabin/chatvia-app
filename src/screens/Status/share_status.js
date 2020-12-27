import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


const Status = () => {
    return(
        <View style={{height : '100%', width : '100%', backgroundColor :'#455a64'}}>
            <View style={style.headView}>
                <Text style={style.head}>Share your status</Text>
            </View>
        </View>
    );
};

export default Status;

const style = StyleSheet.create({
    head:{
        fontSize : 22,
        fontWeight : 'bold',
        color : '#fff'
    },
    headView:{
        marginLeft:30,
        marginTop:40
    }
 
});