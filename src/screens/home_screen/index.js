import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import mainStyle from '../../config/styles';
import Ripple from 'react-native-material-ripple';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const StatusBarHeight = StatusBar.currentHeight;

const HomeScreen = () => {

    const navigation = useNavigation();
    return (
        <View>

            <StatusBar backgroundColor="rgba(0,0,0,0.2)" translucent={true} />
            <View style={{ height: '100%' }}>
                {/* Header */}
                <View style={styles.headerContainer}>
                    <Ripple onPress={() => navigation.openDrawer()}>
                        <MaterialIcons style={styles.menuIcon} name="menu" size={30} color="#fff" />
                    </Ripple>
                    <Text style={styles.headerHeading}>ChatVia</Text>
                </View>

                {/* Content */}
                <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                    {/* <View style={{ width: 100, height: 500, backgroundColor: 'grey', }}></View>
                    <View style={{ width: 100, height: 500, backgroundColor: 'red', }}></View> */}
                    <Ripple onPress={() => navigation.navigate('Chat Screen', { name: 'Contact 1' })} style={{ marginHorizontal: 20, marginVertical: 5, backgroundColor: 'rgba(0,0,0,0.5)', alignItems: 'center', paddingVertical: 20 }}><Text>Contact 1</Text></Ripple>
                    <Ripple onPress={() => navigation.navigate('Chat Screen', { name: 'Contact 2' })} style={{ marginHorizontal: 20, marginVertical: 5, backgroundColor: 'rgba(0,0,0,0.5)', alignItems: 'center', paddingVertical: 20 }}><Text>Contact 2</Text></Ripple>
                    <Ripple onPress={() => navigation.navigate('Chat Screen', { name: 'Contact 3' })} style={{ marginHorizontal: 20, marginVertical: 5, backgroundColor: 'rgba(0,0,0,0.5)', alignItems: 'center', paddingVertical: 20 }}><Text>Contact 3</Text></Ripple>
                </ScrollView>
            </View>

            {/* NewButton */}
            <TouchableOpacity onPress={() => navigation.navigate('New conversation')} activeOpacity={0.8} style={styles.newIconContainer}>
                <MaterialIcons name="add" size={25} color="#fff" />
            </TouchableOpacity>

        </View >
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        height: 55 + StatusBarHeight,
        backgroundColor: mainStyle.colors.primary,
        alignItems: 'center',
        paddingTop: StatusBarHeight
    },
    menuIcon: {
        paddingLeft: 15,
        paddingRight: 20,
        paddingVertical: 10,
    },
    headerHeading: {
        color: "#fff",
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10
    },
    scrollViewContainer: {
    },
    newIconContainer: {
        position: 'absolute',
        bottom: 15,
        right: 15,
        width: 55,
        height: 55,
        borderRadius: 55 / 2,
        elevation: 10,
        backgroundColor: mainStyle.colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default HomeScreen;