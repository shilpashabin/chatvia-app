import React, { useState } from "react";
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import ContactTile from '../components/contact';

  const Addaccount = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const renderItem = ({ item }) => (
      <ContactTile
          data={item.image}
          name={item.name}
          subname={item.message}
          rightname={item.lastseen}
          onPress={() => navigation.navigate('Chat Screen', { name: item.name, lastseen: item.lastseen })}
      />
  );
      return(
        <View>
            <Modal
        animationType="slide"
        transparent={true}
        backdropOpacity={0.3}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Choose Account</Text>
            {/* <View style={{marginTop:10}}><Text style={{fontSize:16,textAlign:'justify'}}>
               you will permanently lose your copy of this conversation's history.Others participants will 
               still be able to view the conversation,including photos you sent.You can delete photos you
               sent by going to <Text style={{color:'green',textDecorationLine:'underline'}}>Google Album Archive Learn more.</Text>
               </Text></View> */}
               {/* <View style={{flexDirection:'row'}}>
               <Image source={require("../../../assets/sample/tele2.png")}/>
               <View style={{flexDirection:'column'}}>
                   <Text>shilpababuraj92@gmail.com</Text>
                   <Text>shilpa</Text>
               </View>
               </View> */}
                       <ContactTile name="SHILPA SHILPA" subname="websoullabs@gmail.com" ></ContactTile>
                

               <View style={{flexDirection:'row',padding:20,}}>
                <Text style={{fontSize:16,color:'grey'}} onPress={() => {
                setModalVisible(!modalVisible);
              }} >Add account</Text>
                {/* <Text style={{paddingLeft:40,color:'green'}}>DELETE</Text> */}
            </View>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        style={styles.openButton1}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Add Account</Text>
      </TouchableOpacity>
        </View>
      )
  };

   const styles=StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding:20
      },
      modalView: {
        margin: 10,
        backgroundColor: "white",
        // borderRadius: 20,
        padding: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton1: {
        // backgroundColor: "#F194FF",
        // borderRadius: 20,
        // padding: 20,
        // elevation: 2
      },
      textStyle: {
        color: "black",
        padding:20,
       fontSize:16,
      },
      modalText: {
        alignSelf:'flex-start',
        padding:10,
        fontWeight:'bold',
        fontSize:18
      },
    
      optionText:{
        color:'green',
        fontSize:14,
        margin:15,
        fontWeight:'bold'
        },
   });
  export default Addaccount;


