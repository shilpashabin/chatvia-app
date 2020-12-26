import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import mainStyle from '../../config/styles';
import Ripple from 'react-native-material-ripple';
import ContactTile from '../../components/contact';
import UserData from './data';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const StatusBarHeight = StatusBar.currentHeight;

const USERS = new UserData();
const Frequent_Users = USERS.FrequentUsers;

const HomeScreen = () => {

    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <ContactTile
            data={item.image}
            name={item.name}
            subname={item.message}
            rightname={item.lastseen}
            onPress={() => navigation.navigate('Chat Screen', { name: item.name, lastseen: item.lastseen })}
        />
    );


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

                <FlatList
                    data={Frequent_Users}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                />
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