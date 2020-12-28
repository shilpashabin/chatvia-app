import React, { useState } from "react";
import {StyleSheet,Text,TouchableOpacity,View,TouchableWithoutFeedback} from "react-native";
import mainStyle from '../../config/styles';
import Modal from 'react-native-modal';
import Ripple from 'react-native-material-ripple';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import OptionCard from '../../components/option_card';
import SwitchTile from '../../components/switch_tile';
import DividerTile from '../../components/divider';
import { ScrollView } from "react-native-gesture-handler";



    const Options = () => {
    const [optionButtonState, setOptionButtonState] = useState(false);
    const options = [ "Help & feedback",]
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <ScrollView>
      <Modal
      isVisible={modalVisible}
                backdropOpacity={0.3}
                style={{margin:10}}
                animationIn={'fadeIn'}
                animationOut={'fadeOutDown'}
                onBackdropPress={()=> setModalVisible(false)}>
      
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Delete Conversation</Text>
            <View style={{marginTop:10}}><Text style={{fontSize:16,textAlign:'justify',}}>
               you will permanently lose your copy of this conversation's history.Others participants will 
               still be able to view the conversation,including photos you sent.You can delete photos you
               sent by going to <Text style={{color:'green',textDecorationLine:'underline'}}>Google Album Archive Learn more.</Text>
               </Text></View>
               <View style={styles.cancelView}>
                            <TouchableWithoutFeedback onPress={()=> setModalVisible(false)}>
                            <Text style={{color:mainStyle.colors.primary}}>CANCEL</Text>
                            </TouchableWithoutFeedback>
                            <Text style={{color:mainStyle.colors.primary}}>BLOCK</Text>
                        </View>
          </View>
        </View>
      </Modal>


      <TouchableWithoutFeedback onPress={() => setOptionButtonState(false)} touchSoundDisabled={true}>
        <View>
                    <View style={styles.upperContainer}>
        <View style={styles.headerContainer}>
        <MaterialIcons name="arrow-back" size={25} color="#fff" />

        <View style={styles.innerContainer}>
                                <View style={styles.nameContainer}>
                                    <Text style={styles.headerHeading}>Options</Text>
                                  
                                </View>
                                <Ripple onPress={() => setOptionButtonState(true)}>
                                <SimpleLineIcons style={styles.optionButton} name="options-vertical" size={16} color="#fff" />
                            </Ripple>
                            </View>

                             {/* OptionCard */}
            <View style={styles.optionCardContainer}>
                {optionButtonState ? <View>
                    <OptionCard
                        data={options}
                        selectedItem={(item) => console.log(item)} />
                </View> : <View></View>}
            </View>
            </View>
            </View>
            </View>
            </TouchableWithoutFeedback>

            <Text style={styles.optionText}>Conversation</Text>
            <SwitchTile text="History"></SwitchTile>
            <DividerTile/>
            <Text style={styles.optionText}>Notification Options</Text>
            <SwitchTile text="Notifications"></SwitchTile>
            <DividerTile/>
            <Text style={styles.optionText}>Other actions</Text>
            {/* <TextTile headText="Archive conversation" ></TextTile> */}

            <TouchableOpacity >
        <Text style={styles.textStyle}>Archive conversation</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.openButton1}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Delete Conversation</Text>
      </TouchableOpacity>








      </ScrollView>
      
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
     marginTop: 20
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    
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
    fontWeight:'bold',
    fontSize:18
  },

  optionText:{
    color:'green',
    fontSize:14,
    margin:15,
    fontWeight:'bold'
    },
    headerContainer: {
        flexDirection: 'row',
        width: '100%',
        height: 55,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 5,
        paddingLeft: 20
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
    headerHeading: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    nameContainer: {
  
    },
    optionButton: {
        paddingRight: 10,
        paddingLeft: 20,
        paddingVertical: 20,
    },
    optionCardContainer: {
        position: 'absolute',
        top: 5,
        right: 0,
    },
    cancelView:
    {
        flexDirection:'row', 
        alignSelf:'flex-end',
        justifyContent:'space-around', 
        width:'50%',
        paddingVertical:20,
        
  }
});

export default Options;