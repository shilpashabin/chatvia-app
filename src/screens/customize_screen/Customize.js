import React, {useState } from 'react';
import { View, Text, StyleSheet,TouchableWithoutFeedback ,TouchableOpacity,Alert,Modal,} from 'react-native';
import SwitchTile from '../../components/switch_tile';
import Divider from '../../components/divider'
import Ripple from 'react-native-material-ripple';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import OptionCard from '../../components/option_card';
import RadioButtonRN from 'radio-buttons-react-native';

const Customize = () =>{
    const [optionButtonState, setOptionButtonState] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const options = [ "Help & feedback",]
    const Data = [
        {label: 'Can contact you directly',},
        {label: 'Can send you an invite',},
    ];
return(
    <View>

<Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>People who have your email</Text>
            <View style={{width:300,height:100}}>

            <RadioButtonRN data={Data} selectedBtn={(e) => console.log(e)} box={false} 
           textStyle={{fontSize:18,padding:5,paddingLeft:10,}}
           boxStyle={{marginLeft:10,flexDirection:'row',marginTop:10}}
           circleSize={10} />

               </View>
               <View style={{flexDirection:'row',paddingTop:20,}}>
                <Text onPress={() => {
                setModalVisible(!modalVisible);
              }} style={{color:'green',}}>CANCEL</Text>
                {/* <Text style={{paddingLeft:40,color:'green'}}>DELETE</Text> */}
            </View>
          </View>
        </View>
      </Modal>


        <View style={styles.container}>
            
            <TouchableWithoutFeedback onPress={() => setOptionButtonState(false)} touchSoundDisabled={true}>
            <View>
                        <View style={styles.upperContainer}>
            <View style={styles.headerContainer}>
            <MaterialIcons name="arrow-back" size={25} color="#fff" />
    
            <View style={styles.innerContainer}>
                                    <View style={styles.nameContainer}>
                                        <Text style={styles.headerHeading}>Customize invites</Text>
                                      
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


                
         
    </View>
    <SwitchTile text="Get notified about invitation"></SwitchTile>
    <Divider></Divider>
       <TouchableOpacity
        style={styles.openButton1}
        onPress={() => {
          setModalVisible(true);
        }}
      >   
       <Text style={styles.textStyle}>People who have your email</Text>
        <Text style={styles.textStyle1}>Can send you an invite</Text>
      </TouchableOpacity>
  
    <Divider></Divider>

    <TouchableOpacity
        style={styles.openButton1}
        onPress={() => {
          setModalVisible(true);
        }}
      >   
       <Text style={styles.textStyle}>People who have your phone number</Text>
        <Text style={styles.textStyle1}>Can send you an invite</Text>
      </TouchableOpacity>

    <Divider></Divider>
    <TouchableOpacity
        style={styles.openButton1}
        onPress={() => {
          setModalVisible(true);
        }}
      >   
       <Text style={styles.textStyle}>Everyone else</Text>
        <Text style={styles.textStyle1}>Can send you an invite</Text>
      </TouchableOpacity>

    </View>
);
};

const styles=StyleSheet.create ({
    container:{
    backgroundColor:'#FFF'
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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        // alignItems: "center",
         marginTop: 10
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
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
       padding: 10,
        },
      textStyle: {
        color: "black",
      
       paddingLeft:10,
       fontSize:17,
      },
      textStyle1: {
        color: "grey",
        paddingLeft:10,
       fontSize:15,
      },
      modalText: {
        alignSelf:'flex-start',
        fontWeight:'bold',
        fontSize:18
      },
});

export default Customize;