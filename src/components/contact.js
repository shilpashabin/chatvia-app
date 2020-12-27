import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import mainStyle from '../config/styles';

const ContactTile = ({ data, name, subname, rightname, onPress }) => {
    return (
        <Pressable style={{ backgroundColor: '#fff', }} android_ripple={{ color: 'rgba(0,0,0,0.1)' }} onPress={onPress}>
            <View style={{ width: '100%', height: 70, flexDirection: 'row' }}>
                <View style={styles.circle}>
                    {data ? <Image style={styles.imageicon} source={data} /> : <Text style={styles.nameLetter}>{name[0]}</Text>}
                </View>
                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', paddingRight: 20 }}>
                    <View style={styles.leftcontainer}>
                        <Text style={styles.maintext}>{name}</Text>
                        <Text style={{ color: 'grey' }}>{subname}</Text>
                    </View>

                    <View style={{ justifyContent: 'center' }}>
                        <Text style={styles.right}>{rightname}</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({

    leftcontainer: {
        padding: 5,
        paddingLeft: 10,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    imageicon: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    right: {
        color: 'grey',
        alignSelf: 'center',

    },
    circle: {
        backgroundColor: mainStyle.colors.primary,
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15
    },
    nameLetter: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default ContactTile;
