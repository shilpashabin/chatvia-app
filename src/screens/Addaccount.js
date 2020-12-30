import React, { useState } from "react";
import {StyleSheet, Text,View,} from "react-native";
  import ContactTile from '../components/contact';
  import Modal from 'react-native-modal';

  const Addaccount = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const renderItem = ({ item }) => (
      <ContactTile
          data={item.image}
          name={item.name}
          subname={item.message}
          rightname={item.lastseen}
         
      />
  );
      return(
        <View>
          <Modal
                isVisible={true}
                backdropOpacity={0.3}
                style={{margin:10}}
                animationIn={'fadeIn'}
                animationOut={'fadeOutDown'}
                onBackdropPress={()=> setModalVisible(false)}>
      
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Choose Account</Text>
         
                       <ContactTile name="SHILPA SHILPA" subname="websoullabs@gmail.com" ></ContactTile>
                

               <View style={{flexDirection:'row',padding:20,}}>
                <Text style={{fontSize:16,color:'grey'}} onPress={() => {
                setModalVisible(!modalVisible);
              }} >Add account</Text>
              
            </View>
          </View>
        </View>
      </Modal>

     
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
        
      },
    
      
      modalText: {
        alignSelf:'flex-start',
        padding:10,
        fontWeight:'bold',
        fontSize:18
      },
    
     
   });
  export default Addaccount;


