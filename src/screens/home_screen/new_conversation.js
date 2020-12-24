import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, } from 'react-native';

import { Divider } from 'react-native-elements';
import Modal from 'react-native-modal';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import OptionCard from '../../components/option_card';

const NewConversation = ({ navigation }) => {
    const [optionButtonState, setOptionButtonState] = useState(false);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={styles.optionButtonPressable}>
                    <Pressable
                        android_ripple={{ color: 'rgba(255,255,255,0.1)' }}
                        onPress={() => setOptionButtonState(true)}
                    >
                        <View style={styles.optionButtonContainer}>
                            <SimpleLineIcons style={styles.optionButton} name="options-vertical" size={16} color="#fff" />
                        </View>
                    </Pressable>
                </View>
            ),
        });
    }, [navigation]);

    return (
        <View style={styles.mainContainer}>
            {/* Search Box */}
            <View style={styles.searchBox}>
                <MaterialIcons name="search" size={30} color="rgba(0,0,0,0.5)" />
                <TextInput
                    style={styles.searchBoxInput}
                    placeholder="Name, email, or phone"
                />
            </View>
            <Divider />

            {/* New Group */}
            <View style={styles.newGroupContainer}>
                <View style={styles.IconContainer}>
                    <MaterialIcons name="group-add" size={30} color="#fff" />
                </View>
                <Text style={styles.groupText}>New group</Text>
            </View>

            <Modal
                isVisible={optionButtonState}
                style={{ margin: 0 }}
                backdropOpacity={0}
                animationIn='fadeIn'
                animationOut='fadeOut'
                animationInTiming={100}
                animationOutTiming={100}
                onBackdropPress={() => setOptionButtonState(false)}
            >
                <View style={styles.optionCardStyle}>
                    <OptionCard data={['Help & feedback']} />
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
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
        height: 75,
        alignItems: 'center',
        backgroundColor: '#FEFEFE',
        elevation: 3
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
    optionCardStyle: {
        position: 'absolute',
        top: 3,
        right: 2
    },
})

export default NewConversation;