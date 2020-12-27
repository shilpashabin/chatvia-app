import React, {useState, useEffect} from 'react';
import {
  PermissionsAndroid,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
 Image,
 Button
} from 'react-native';
// import { PERMISSIONS_TYPE } from '../../AppPermission';


const image = { uri: "https://thumbs.dreamstime.com/b/young-millennial-holding-smart-phone-flat-editable-vector-illustration-clip-art-92027390.jpg" };




const NextScreen = () => {

  // let [contacts, setContacts] = useState([]);

  // useEffect(() => {
  //   if (Platform.OS === 'android') {
  //     PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
  //         title: 'Contacts',
  //         message: 'This app would like to view your contacts.',
  //       }).then(() => {
  //         loadContacts();
  //       }
  //     );
  //   } else {
  //     loadContacts();
  //   }
  // }, []);

  // const loadContacts = () => {
  //   Contacts.getAll((err, contacts) => {
  //     contacts.sort(
  //       (a, b) => 
  //         a.givenName.toLowerCase() > b.givenName.toLowerCase(),
  //     );
  //     console.log('contacts -> ', contacts);
  //     if (err === 'denied') {
  //       alert('Permission to access contacts was denied');
  //       console.warn('Permission to access contacts was denied');
  //     } else {
  //       setContacts(contacts);
  //       console.log('contacts', contacts);
  //     }
  //   });
  // };
















  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:'white'}}>
      
      <View style={{backgroundColor:'white',}}>
      <Text style={{fontWeight:"bold",marginLeft:35,marginTop:20}}>Find your friends</Text>
      <Text style={styles.text}>Allow Hangouts to access your contacts so that 
      {'\n'}
      you can find your friends faster.
      </Text>
      </View>
     
      <Image source={image} style={styles.image}>
      </Image>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
   
  },
  text:{
    
    marginLeft:35,
    margin:16
    
  },




});
export default NextScreen;