import React, {useState, useEffect} from 'react';
import { View, Text, Image, TextInput, Platform, StyleSheet, StatusBar, PermissionsAndroid, } from 'react-native';
import mainStyle from '../../config/styles';
import Ripple from 'react-native-material-ripple';
import Contacts from 'react-native-contacts';



const StatusBarHeight = StatusBar.currentHeight;
const WelcomePage = ({navigation}) =>{
    
    // let [contacts, setContacts] = useState([]);

    // useEffect(() => {
    //     if (Platform.OS === 'android') {
    //       PermissionsAndroid.request(
    //         PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
    //           title: 'Contacts',
    //           message: 'This app would like to view your contacts.',
    //         }).then(() => {
    //           loadContacts();
    //         }
    //       );
    //     } else {
    //       loadContacts();
    //     }
    //   }, []);

    //   const loadContacts = () => {
    //     Contacts.getAll((err, contacts) => {
    //       contacts.sort(
    //         (a, b) => 
    //           a.givenName.toLowerCase() > b.givenName.toLowerCase(),
    //       );
    //       console.log('contacts -> ', contacts);
    //       if (err === 'denied') {
    //         alert('Permission to access contacts was denied');
    //         console.warn('Permission to access contacts was denied');
    //       } else {
    //         setContacts(contacts);
    //         console.log('contacts', contacts);
    //       }
    //     });
    //   }; 
    
    
    return(
        <View style={{height:'100%', width:'100%', alignItems:'center',paddingTop: StatusBarHeight, backgroundColor:'#fff'}}>
            <StatusBar backgroundColor="rgba(0,0,0,0.2)" translucent={true} />
            <View style={style.headView}>
                <Text style={style.head}>Find your friends</Text>
                <Text style={{marginTop:10, fontSize:17, color:'#343434'}}>Allow ChatVia to access your contacts so that you can find your friends faster</Text>
            </View>

            <View style={style.imageView}>
                <Image source={require('../../assets/sample/vector.jpg')} style={style.image}/>
            </View>

            <View style={style.footer}>
                <Ripple style={style.button} onPress={()=>{navigation.navigate("SkipChatVia")}}>
                    <View>
                        <Text>SKIP</Text>
                    </View>

                </Ripple>
                <Ripple style={style.button} onPress={()=>{navigation.navigate("ChatVia")}}>
                    <View>
                        <Text>NEXT</Text>
                    </View>

                </Ripple>

            </View>

        </View>
    );
}

export default WelcomePage;

const style= StyleSheet.create({
    headView:{ justifyContent:'center',
    width:'100%', paddingLeft:30,marginTop:30},
    head:{
        alignSelf:'flex-start',
        fontSize:25,
        fontWeight:'600'
       
    },
    footer:{
        width:'100%',
        height:50,
        flexDirection:'row',
        position:'absolute',
        bottom:0,
        
    },
    button:{
        width:'50%',
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        borderRightColor:'#dee3de',
        borderRightWidth:1,
        borderTopColor:'#dee3de',
        elevation:10
    },
    imageView:{
        height:'80%',
        width:'100%',
       backgroundColor:'pink',
        justifyContent:'center',
        position:'absolute',
        bottom:10

    },
    image:{
        height:'100%',
        width:'100%',
        alignSelf:'center',
        
        }

});