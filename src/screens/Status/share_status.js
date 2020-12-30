import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import mainStyle from '../../config/styles';
import Ripple from 'react-native-material-ripple';


const Status = ({navigation}) => {
    return(
        <View style={{height : '100%', width : '100%', backgroundColor :'#455a64', alignItems:'center'}}>
            <View style={style.headView}>
                <Text style={style.head}>Share your status</Text>
                <Text style={{color:'#e8eae6', fontSize:17}}>Sahre plans, iedas or your mood </Text>
            </View>

            <View style={style.inputView}>
                <View style={style.profilepic}></View>
                <View style={style.input}>
                    <TextInput
                    placeholder="shhare your status"
                    placeholderTextColor="#e8eae6"
                    style={{height:50, borderBottomColor:'cyan', borderBottomWidth:2, width:'100%', paddingTop:10}}></TextInput>
                    <Text style={{alignSelf:'flex-end', color:'#e8eae6'}}>0/140</Text>
                </View>
            </View>
            <View style={{ alignSelf:'flex-start',  marginLeft:30, marginTop:20}}>
                <Text style={{alignSelf:'flex-start', color:'#e8eae6', fontSize:17}}>Your status will be visible to everyone that you use ChatVia with.</Text>
            </View>
            <View style={style.footer}>
                <Ripple style={style.button} onPress={()=>navigation.goBack(null)}>
                    <View>
                        <Text>CALNCEL</Text>
                    </View>

                </Ripple>
                <Ripple style={style.button}>
                    <View>
                        <Text>UPDATE</Text>
                    </View>

                </Ripple>

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
        marginTop:40,
        alignSelf:'flex-start'
    },
    inputView:{
        width:'100%',
        height:70,
        // backgroundColor:'pink',
        flexDirection:'row',
        marginTop:10
    },
    profilepic:{
        width:60,
        height:60,
        borderRadius:60/2,
        borderColor:'#fff',
        borderWidth:1.5,
        backgroundColor:mainStyle.colors.primary,
        margin:10,
        marginHorizontal:20
    },
    input:{
        width:'65%'
    },
    footer:{
        width:'100%',
        height:60,
        flexDirection:'row',
        position:'absolute',
        bottom:0
    },
    button:{
        width:'50%',
        backgroundColor:'#e8eae6',
        alignItems:'center',
        justifyContent:'center',
        borderRightColor:'#dee3de',
        borderRightWidth:1
    }
 
});