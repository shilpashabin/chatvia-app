import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView, TouchableWithoutFeedback , TouchableOpacity} from 'react-native';

import mainStyle from '../../config/styles';
import OptionCard from '../../components/option_card';
import ContactTile from '../../components/contact';
import Ripple from 'react-native-material-ripple';
import Modal from 'react-native-modal';


import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';


const StatusBarHeight = StatusBar.currentHeight;
const options = [ "Help & feedback"]
const Archived = ({navigation}) => {

    const [optionButtonState, setOptionButtonState] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const renderItem = ({ item }) =>(
        <ContactTile
            data={item.image}
            name={item.name}
            subname={item.message}
            rightname={item.lastseen}
            
        />
                        );

    return (
        <>
            <StatusBar backgroundColor="rgba(0,0,0,0.2)" translucent={true} />

            <TouchableWithoutFeedback onPress={() => setOptionButtonState(false)} touchSoundDisabled={true}>
                <View style={{height:'100%', backgroundColor:'#fff'}}>
                    <View style={styles.upperContainer}>
                        {/* Header */}
                        <View style={styles.headerContainer}>
                            <TouchableOpacity onPress={()=> navigation.goBack(null)}>
                            <MaterialIcons name="arrow-back" size={25} color="#fff" />
                            </TouchableOpacity>

                            <View style={styles.innerContainer}>
                                <View style={styles.nameContainer}>
                                    <Text style={styles.headerHeading}>Archived conversation</Text>
                                    {/* <Text style={styles.lastseenText}>Active yesterday</Text> */}
                                </View>
                                {/* <Ripple onPress={() => setModalVisible(true)}>
                                    <MaterialIcons style={styles.videoCallButton} name="videocam" size={28} color="#fff" />
                                </Ripple> */}
                            </View>
                            <Ripple onPress={() => setOptionButtonState(true)}>
                                <SimpleLineIcons style={styles.optionButton} name="options-vertical" size={16} color="#fff" />
                            </Ripple>
                        </View>

                        {/* Mesaage Screen */}
                        <ScrollView style={styles.chatScreenContainer} contentContainerStyle={styles.chatContainerStyle}>
         
                                <ContactTile name="arun" subname="heloooo" rightname="9:34PM"></ContactTile>
                                <ContactTile name="shabin" subname="heloooo" rightname="yesterday"></ContactTile>
                                <ContactTile name="aiwariya" subname="heloooo" rightname="12:34PM"></ContactTile>
                                <ContactTile name="rakhil" subname="heloooo" rightname="today"></ContactTile>
                                <ContactTile name="athira" subname="heloooo" rightname="12/12/20"></ContactTile>
                                <ContactTile name="shilpa" subname="heloooo" rightname="12/24/20"></ContactTile>
                        </ScrollView>
                        
                    
                    </View>



                    
                </View>
            </TouchableWithoutFeedback>

            {/* OptionCard */}
            <View style={styles.optionCardContainer}>
                {optionButtonState ? <View>
                    <OptionCard
                        data={options}
                        selectedItem={(item) => console.log(item)} />
                </View> : <View></View>}
            </View>

            {/* VideoCall Modal */}
            <Modal
                isVisible={modalVisible}
                style={{ margin: 0 }}
                backdropOpacity={0.3}
                onBackdropPress={() => setModalVisible(false)}
            >
               <View>
                   
               </View>
            </Modal>

        </>
    );
}

const styles = StyleSheet.create({
    upperContainer: {
        // height: '100%'
    },
    headerContainer: {
        flexDirection: 'row',
        width: '100%',
        height: 55 + StatusBarHeight,
        backgroundColor: mainStyle.colors.primary,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: StatusBarHeight,
        paddingLeft: 15
    },
    headerHeading: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    // lastseenText: {
    //     color: '#fff',
    //     fontWeight: 'bold'
    // },
    // videoCallButton: {
    //     paddingHorizontal: 15,
    //     paddingVertical: 15,
    //     borderRadius: 60,
    // },
     optionButton: {
        paddingRight: 20,
       paddingLeft: 20,
         paddingVertical: 20,
     },
    optionCardContainer: {
        position: 'absolute',
        top: 25,
        right: 5,
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
    chatScreenContainer: {
        marginBottom: 100
    },
    chatContainerStyle: {
        width: '100%',
        backgroundColor: '#E8EEEC',
    },
    // bottomBarContainer: {
    //     backgroundColor: "#fff",
    //     position: 'absolute',
    //     width: '100%',
    //     bottom: 0,
    //     backgroundColor: 'white',
    // },
    // inputText: {
    //     fontSize: 16
    // },
    // inputTextBox: {
    //     paddingHorizontal: 15,
    // },
    // chatOptionsContainer: {
    //     flexDirection: 'row',
    //     height: 50,
    //     width: '70%',
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    //     paddingHorizontal: 15,
    //     elevation: 10
    // },
    // sendButtonContainers: {
    //     position: 'absolute',
    //     bottom: 8,
    //     right: 15,
    //     width: 40,
    //     height: 40,
    //     borderRadius: 40 / 2,
    //     backgroundColor: '#E8EEEC',
    //     elevation: 3,
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },
    modalContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#fff',
    },
    itemContainer: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 15,
        alignItems: 'center'
    },
    itemText: {
        fontSize: 16,
        marginLeft: 20
    },
    newItemText: {
        fontSize: 16,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: mainStyle.colors.primary,
        paddingHorizontal: 4,
        paddingLeft: 6,
        marginLeft: 10,
        color: mainStyle.colors.primary,
        fontWeight: 'bold'
    },
})

export default Archived;