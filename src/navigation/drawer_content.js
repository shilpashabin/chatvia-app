import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, Image, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { DrawerContentScrollView, DrawerItem, } from '@react-navigation/drawer';
import { Divider } from 'react-native-elements';
import Modal from 'react-native-modal';

import mainStyle from '../config/styles';
import SnoozeData from '../screens/Snooze_Notification/snooze_data';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DrawerContent = ({ navigation, ...props }) => {
    const [snoozeModalVisible, setSnoozeModalVisible] = useState(false);
    const [angle, SetRotationangle] = useState('0deg');

    const DrawerView = () => {
        if (angle == '0deg') {
            SetRotationangle('180deg');
        } else SetRotationangle('0deg')
    }

    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor="rgba(0,0,0,0.2)" translucent={true} />
            <DrawerContentScrollView {...props}>
                <TouchableWithoutFeedback onPress={DrawerView}>
                    <View style={styles.topContainer}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.profileImage} source={require('../assets/profile_photo.png')} />
                        </View>
                        <Text style={styles.nameText}>Alex Mathew</Text>
                        <Text style={styles.gmailText}>alexmathew23@gmail.com</Text>
                        <MaterialIcons style={[styles.arrowIcon, { transform: [{ rotate: angle }] }]} name="arrow-drop-down" size={25} color="#fff" />
                    </View>
                </TouchableWithoutFeedback>

                {/* BottomContainer */}
                {angle == '0deg' ?
                    <View>
                        <DrawerItem style={styles.drawerItemStyle} {...props}
                            icon={({ color, size }) => (
                                <MaterialIcons
                                    name="tag-faces"
                                    size={size}
                                    color={color} />
                            )}
                            label="Status"
                            onPress={() => navigation.navigate('Status')}
                        />
                        <DrawerItem style={styles.drawerItemStyle} {...props}
                            icon={({ color, size }) => (
                                <MaterialIcons
                                    name="notifications-off"
                                    size={size}
                                    color={color} />
                            )}
                            label="Snooze notifications"
                            onPress={() => {
                                setSnoozeModalVisible(true);
                                navigation.closeDrawer();
                            }}
                        />
                        <Divider />
                        <DrawerItem style={styles.drawerItemStyle} {...props}
                            icon={({ color, size }) => (
                                <MaterialIcons
                                    name="mail"
                                    size={size}
                                    color={color} />
                            )}
                            label="Invites"
                            onPress={() => navigation.navigate("Invites")}
                        />
                        <DrawerItem style={styles.drawerItemStyle} {...props}
                            icon={({ color, size }) => (
                                <MaterialIcons
                                    name="archive"
                                    size={size}
                                    color={color} />
                            )}
                            label="Archived"
                            onPress={() => navigation.navigate("Archived")}
                        />
                        <Divider />
                        <DrawerItem style={styles.drawerItemStyle} {...props}
                            icon={({ color, size }) => (
                                <MaterialIcons
                                    name="settings"
                                    size={size}
                                    color={color} />
                            )}
                            label="Settings"
                            onPress={() => navigation.navigate('SettingsStack')}
                        />
                        <DrawerItem style={styles.drawerItemStyle} {...props}
                            icon={({ color, size }) => (
                                <MaterialIcons
                                    name="help"
                                    size={size}
                                    color={color} />
                            )}
                            label="Help & feedback"
                            onPress={() => null}
                        />
                        <Divider />
                        <DrawerItem style={styles.drawerItemStyle} {...props}
                            icon={({ color, size }) => (
                                <MaterialIcons
                                    name="privacy-tip"
                                    size={size}
                                    color={color} />
                            )}
                            label="Privacy polcy"
                            onPress={() => null}
                        />
                        <DrawerItem style={styles.drawerItemStyle} {...props}
                            icon={({ color, size }) => (
                                <MaterialIcons
                                    name="policy"
                                    size={size}
                                    color={color} />
                            )}
                            label="Program policy"
                            onPress={() => null}
                        />
                        <DrawerItem style={styles.drawerItemStyle} {...props}
                            icon={({ color, size }) => (
                                <MaterialIcons
                                    name="list-alt"
                                    size={size}
                                    color={color} />
                            )}
                            label="Terms of service"
                            onPress={() => null}
                        />
                    </View>
                    :
                    <View>
                        <DrawerItem style={styles.drawerItemStyle} {...props}
                            icon={({ color, size }) => (
                                <MaterialIcons
                                    name="add"
                                    size={size}
                                    color={color} />
                            )}
                            label="Add account"
                            onPress={() => null}
                        />
                        <DrawerItem style={styles.drawerItemStyle} {...props}
                            icon={({ color, size }) => (
                                <MaterialIcons
                                    name="settings"
                                    size={size}
                                    color={color} />
                            )}
                            label="Manage accounts"
                            onPress={() => null}
                        />
                    </View>}

                {/* SNOOZEMODAL */}
                <View>
                    <Modal
                        isVisible={snoozeModalVisible}
                        style={{ margin: 0 }}
                        backdropOpacity={0.3}
                        onBackdropPress={() => setSnoozeModalVisible(false)}>
                        <View style={styles.snoozeModal}>
                            <Text style={{ fontSize: 20 }}>Snooze notifications</Text>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <SnoozeData />
                            </ScrollView>
                        </View>
                    </Modal>
                </View>

            </DrawerContentScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    topContainer: {
        height: 175,
        backgroundColor: mainStyle.colors.secondary,
        marginTop: -30,
        paddingLeft: 15,
        paddingVertical: 10
    },
    imageContainer: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        backgroundColor: 'white',
        marginTop: 30,
    },
    profileImage: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        resizeMode: 'cover'
    },
    nameText: {
        color: '#fff',
        fontSize: 18,
        marginTop: 10
    },
    gmailText: {
        color: 'rgb(230,230,230)',
        fontSize: 15,
    },
    arrowIcon: {
        position: 'absolute',
        bottom: 15,
        right: 15,
    },

    // Snooze

    snoozeModal: {
        width: '90%',
        borderRadius: 5,
        backgroundColor: '#fff',
        alignSelf: 'center',
        padding: 20,
        height: '70%'
    },
    hour: {
        fontSize: 16,
        color: 'grey',
        marginTop: 20,
    },
    hourView: {
        width: '100%',
        backgroundColor: 'white',
    },
})

export default DrawerContent;


