import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView, TextInput, TouchableWithoutFeedback, Pressable } from 'react-native';

import mainStyle from '../../../config/styles';
import OptionCard from '../../../components/option_card';
import InputScrollView from 'react-native-input-scroll-view';
import Ripple from 'react-native-material-ripple';
import Modal from 'react-native-modal';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const StatusBarHeight = StatusBar.currentHeight;

const options = ["People", "Options", "Create new group", "Add to Home screen", "Help & feedback"]


const ChatScreen = ({ route, navigation }) => {

    const [optionButtonState, setOptionButtonState] = useState(false);
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <View>
            <StatusBar backgroundColor="rgba(0,0,0,0.2)" translucent={true} />

            <TouchableWithoutFeedback onPress={() => setOptionButtonState(false)} touchSoundDisabled={true}>
                <View>
                    <View style={styles.upperContainer}>
                        {/* Header */}
                        <View style={styles.headerContainer}>
                            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                                <MaterialIcons style={styles.backButton} name="arrow-back" size={25} color="#fff" />
                            </TouchableWithoutFeedback>
                            <View style={styles.innerContainer}>
                                <View style={styles.nameContainer}>
                                    <Text style={styles.headerHeading}>{route.params.name}</Text>
                                    <Text style={styles.lastseenText}>Active {route.params.lastseen}</Text>
                                </View>
                                <Ripple onPress={() => setModalVisible(true)}>
                                    <MaterialIcons style={styles.videoCallButton} name="videocam" size={28} color="#fff" />
                                </Ripple>
                            </View>
                            <TouchableWithoutFeedback onPress={() => setOptionButtonState(true)}>
                                <SimpleLineIcons style={styles.optionButton} name="options-vertical" size={16} color="#fff" />
                            </TouchableWithoutFeedback>
                        </View>

                        {/* Mesaage Screen */}
                        <ScrollView style={styles.chatScreenContainer} contentContainerStyle={styles.chatContainerStyle}></ScrollView>
                    </View>


                    {/* BottomBar */}
                    <View style={styles.bottomBarContainer}>
                        <View style={{ height: 50 }}>
                            <InputScrollView style={styles.inputTextBox}>
                                <TextInput style={styles.inputText} placeholder="Write a message"
                                    onChangeText={text => console.log(text)}
                                    onFocus={() => setOptionButtonState(false)}
                                    multiline />
                            </InputScrollView>
                        </View>
                        <View style={styles.chatOptionsContainer}>
                            <Pressable style={styles.bottomIcon} android_ripple={{ color: 'rgba(0,0,0,0.3)' }}><Fontisto name="smiley" size={21} color="rgba(0,0,0,0.5)" /></Pressable>
                            <Pressable style={styles.bottomIcon} android_ripple={{ color: 'rgba(0,0,0,0.3)' }}><MaterialIcons name="image" size={25} color="rgba(0,0,0,0.5)" /></Pressable>
                            <Pressable style={styles.bottomIcon} android_ripple={{ color: 'rgba(0,0,0,0.3)' }}><MaterialIcons name="photo-camera" size={25} color="rgba(0,0,0,0.5)" /></Pressable>
                            <Pressable style={styles.bottomIcon} android_ripple={{ color: 'rgba(0,0,0,0.3)' }}><MaterialIcons name="videocam" size={25} color="rgba(0,0,0,0.5)" /></Pressable>
                            <Pressable style={styles.bottomIcon} android_ripple={{ color: 'rgba(0,0,0,0.3)' }}><MaterialCommunityIcons name="sticker-emoji" size={25} color="rgba(0,0,0,0.5)" /></Pressable>
                        </View>
                        <View style={styles.sendButtonContainers}>
                            <MaterialIcons name="send" size={20} color="rgba(0,0,0,0.5)" />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>

            {/* OptionCard */}
            <View style={styles.optionCardContainer}>
                {optionButtonState ? <View>
                    <OptionCard
                        data={options}
                        selectedItem={(item) => {
                            console.log(item)
                            switch (item) {
                                case 'People':
                                    navigation.navigate('People');
                                    setOptionButtonState(false);
                                    break;
                                case 'Options':
                                    navigation.navigate('Options');
                                    setOptionButtonState(false);
                                    break;
                                case 'Create new group':
                                    navigation.navigate('Newgroup');
                                    setOptionButtonState(false);
                                    break;
                            }
                        }}
                    />
                </View> : <View></View>}
            </View>

            {/* VideoCall Modal */}
            <Modal
                isVisible={modalVisible}
                style={{ margin: 0 }}
                backdropOpacity={0.3}
                onBackdropPress={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <Ripple style={styles.itemContainer}>
                        <MaterialIcons name="video-call" size={30} color="rgba(0,0,0,0.5)" />
                        <Text style={styles.itemText}>Share a Meet video call link</Text>
                        <Text style={styles.newItemText}>New</Text>
                    </Ripple>
                    <Ripple style={styles.itemContainer}>
                        <MaterialCommunityIcons name="video-box" size={30} color="rgba(0,0,0,0.5)" />
                        <Text style={styles.itemText}>Call Alex with video</Text>
                    </Ripple>
                    <Ripple style={styles.itemContainer}>
                        <MaterialIcons name="phone" size={28} color="rgba(0,0,0,0.5)" />
                        <Text style={styles.itemText}>Call Alex with audio only</Text>
                    </Ripple>
                    <Ripple style={styles.itemContainer} onPress={() => setModalVisible(false)}>
                        <MaterialIcons name="close" size={28} color="rgba(0,0,0,0.5)" />
                        <Text style={styles.itemText}>Cancel</Text>
                    </Ripple>
                </View>
            </Modal>

        </View>
    );
}

const styles = StyleSheet.create({
    upperContainer: {
        height: '100%'
    },
    headerContainer: {
        flexDirection: 'row',
        width: '100%',
        height: 55 + StatusBarHeight,
        backgroundColor: mainStyle.colors.primary,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 5,
        paddingTop: StatusBarHeight
    },
    backButton: {
        lineHeight: 55,
        paddingHorizontal: 15
    },
    headerHeading: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    lastseenText: {
        color: '#fff',
        fontWeight: 'bold'
    },
    videoCallButton: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 60,
    },
    optionButton: {
        paddingRight: 20,
        paddingLeft: 20,
        paddingVertical: 20,
    },
    optionCardContainer: {
        position: 'absolute',
        top: StatusBarHeight + 3,
        right: 0,
    },
    innerContainer: {
        flexDirection: 'row',
        marginHorizontal: 2,
        justifyContent: 'space-between',
        alignSelf: 'center',
        width: '70%',
        alignItems: 'center'
    },
    nameContainer: {
        paddingLeft: 10
    },
    chatScreenContainer: {
        marginBottom: 100
    },
    chatContainerStyle: {
        width: '100%',
        backgroundColor: '#E8EEEC',
    },
    bottomBarContainer: {
        backgroundColor: "#fff",
        position: 'absolute',
        width: '100%',
        bottom: 0,
        backgroundColor: 'white',
    },
    inputText: {
        fontSize: 16
    },
    inputTextBox: {
        paddingHorizontal: 15,
    },
    chatOptionsContainer: {
        flexDirection: 'row',
        width: '70%',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 10
    },
    bottomIcon: {
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    sendButtonContainers: {
        position: 'absolute',
        bottom: 8,
        right: 15,
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        backgroundColor: '#E8EEEC',
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
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

export default ChatScreen;