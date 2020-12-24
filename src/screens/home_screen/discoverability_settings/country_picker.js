import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, FlatList, Modal, Pressable } from 'react-native';


const CountryCodePicker = ({ data, onSelectItem, selectedItem, defaultValue }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)} >
                <Text style={styles.countryCode}>{selectedItem ? selectedItem.dial_code : defaultValue}</Text>
            </TouchableWithoutFeedback>
            <Modal
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
                transparent={true}
            >
                <View style={styles.modalBackView}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalHeading}>Select your country code</Text>
                        <FlatList
                            data={data}
                            keyExtractor={item => item.name}
                            renderItem={({ item }) => (
                                <Pressable
                                    android_ripple={{ color: 'rgba(0,0,0,0.5)' }}
                                    onPress={() => {
                                        setModalVisible(false);
                                        onSelectItem(item);
                                    }}>
                                    <Text style={styles.countryText}>{item.name} ({item.dial_code})</Text>
                                </Pressable>
                            )}
                        />
                    </View>
                </View>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    countryCode: {
        color: '#fff',
        fontSize: 24,
    },
    modalBackView: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingBottom: 70
    },
    modalContainer: {
        backgroundColor: '#fff',
        marginHorizontal: 20,
        borderRadius: 3,
        marginTop: 20
    },
    modalHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.6)',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    countryText: {
        fontSize: 18,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
})

export default CountryCodePicker;