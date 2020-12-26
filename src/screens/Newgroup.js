import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, FlatList,Fab } from 'react-native';
import { Divider } from 'react-native-elements';
// import Modal from 'react-native-modal';
// import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ContactTile from '../components/contact';
import { ScrollView } from 'react-native-gesture-handler';

import FloatingActionButton from 'react-native-floating-action-button';

const Newgroup = () => {

  const renderItem = ({ item }) => (
    <ContactTile
        data={item.image}
        name={item.name}
        subname={item.message}
        rightname={item.lastseen}
        onPress={() => navigation.navigate('Chat Screen', { name: item.name, lastseen: item.lastseen })}
    />
);



return (
      <View>
        <ScrollView>
         <View style={styles.headerContainer}>
                            <MaterialIcons name="arrow-back" size={25} color="#fff" />
                            <View style={styles.innerContainer}>
                                <View style={styles.nameContainer}>
                                    <Text style={styles.headerHeading}>New group</Text>
                                    {/* <Text style={styles.lastseenText}>Active yesterday</Text> */}
                                </View>
                                </View>
                                </View>

{/*floating buttn*/}
   <View style={styles.floatstyle}>
<FloatingActionButton  
    text="checkmark"
    iconName="checkmark"
    iconType="Ionicons"
    iconColor="white"
    textColor="white"
    shadowColor="white"
    rippleColor="white"
    backgroundColor="green"
    
    
/></View>

         {/* New Group */}
         <View style={styles.newGroupContainer}>
                    <View style={styles.IconContainer}>
                        <MaterialIcons name="group-add" size={30} color="#fff" />
                    </View>
                    <TextInput
                        style={styles.searchBoxInput}
                        placeholder="Name your group"
                    />
                </View>
                <Divider />
                 {/* Search Box */}
                <View style={styles.searchBox}>
                    <MaterialIcons name="search" size={20} color="rgba(0,0,0,0.5)" />
                    <TextInput
                        style={styles.searchBoxInput}
                        placeholder="contact name"
                    />
                </View>
                <Divider />

                <View>
                  <Text style={styles.textfrequent}>Frequent</Text>
                  <ContactTile name="Arun" subname="heloooo"  rightname="today"></ContactTile>
                  <ContactTile name="Rahul"  ></ContactTile>
                  <ContactTile name="Divya" subname="heloooo" rightname="yesterday"></ContactTile>
                  <ContactTile name="Reena" subname="heloooo" ></ContactTile>
                  <ContactTile name="Rakhil"  ></ContactTile>
                  <ContactTile name="Athul" subname="heloooo" rightname="active 2 hours"></ContactTile>
                </View>

                <View>
                <Text style={styles.textfrequent}>On Chatvia</Text>
                <ContactTile name="Rahul"  ></ContactTile>
                <ContactTile name="Karthika"  ></ContactTile>
                <ContactTile name="Nelson"  ></ContactTile>
                <ContactTile name="Das"  ></ContactTile>
                <ContactTile name="Ribin"  ></ContactTile>
                <ContactTile name="Amaya"  ></ContactTile>
        </View>

        <View>
        <Text style={styles.textfrequent}>Not on Chatvia</Text>
        <ContactTile name="Arun" subname="8714499073"  rightname="Invite"></ContactTile>
        <ContactTile name="Abhi" subname="8714499073"  rightname="Invite"></ContactTile>
        <ContactTile name="Abina" subname="8714499073"  rightname="Invite"></ContactTile>
        <ContactTile name="Babith" subname="8714499073"  rightname="Invite"></ContactTile>
        <ContactTile name="Adhil" subname="8714499073"  rightname="Invite"></ContactTile>
        <ContactTile name="Bency" subname="8714499073"  rightname="Invite"></ContactTile>
        <ContactTile name="Devika" subname="8714499073"  rightname="Invite"></ContactTile>
        <ContactTile name="Dheedhi" subname="8714499073"  rightname="Invite"></ContactTile>
        <ContactTile name="Dilna" subname="8714499073"  rightname="Invite"></ContactTile>
        </View>

        </ScrollView>
      </View>

  

                )};

                export default Newgroup;

  const styles=StyleSheet.create({

    mainContainer: {
      flex: 1,
      backgroundColor: '#FEFEFE',
  },
  optionButtonPressable: {
      width: 100,
      height: 65,
      borderRadius: 60 / 2,
      overflow: 'hidden',
      marginRight: -40
  },
  optionButtonContainer: {
      width: 50,
      height: '100%',
      borderRadius: 60 / 2,
      paddingLeft: 20,
      alignItems: 'center',
      justifyContent: 'center',
  },
  searchBox: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 70,
      paddingLeft: 20
  },
  searchBoxInput: {
      height: '100%',
      fontSize: 16,
      paddingLeft: 20
  },
  newGroupContainer: {
      flexDirection: 'row',
      height: 50,
      alignItems: 'center',
      backgroundColor: '#FEFEFE',
      // elevation: 3,
     
      
  },
  IconContainer: {
      width: 40,
      height: 40,
      borderRadius: 40 / 2,
      backgroundColor: '#425863',
      marginLeft: 15,
      alignItems: 'center',
      justifyContent: 'center'
  },
  groupText: {
      fontSize: 18,
      fontWeight: '600',
      marginLeft: 15
  },
  subHeading: {
      color: 'rgba(0,0,0,0.6)',
      fontSize: 16,
      marginTop: 20,
      marginBottom: 10,
      paddingHorizontal: 15
  },
  optionCardStyle: {
      position: 'absolute',
      top: 3,
      right: 2
  },
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 55,
    backgroundColor: '#425863',
    alignItems: 'center',
    paddingBottom: 5,
    paddingLeft: 15,
    position:'absolute',
},
headerHeading: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
   
},
nameContainer: {
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
textfrequent:{
  fontSize:16,
  padding:20,
  backgroundColor:'#FFF',
  color:'grey'
},
floatstyle:{
  alignItems:'flex-end',
  top:20,
  position:'relative'
  
}

  })  ;            

        