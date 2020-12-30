import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const hours = [
    {
        id: '0',
        snooze: 'Off'
    },
    {
        id: '1',
        snooze: '1 hour'
    },
    {
        id: '2',
        snooze: '2 hour'
    },
    {
        id: '3',
        snooze: '4 hour'
    },
    {
        id: '4',
        snooze: '8 hour'
    },
    {
        id: '5',
        snooze: '1 day'
    },
    {
        id: '6',
        snooze: '3 day'
    },
    {
        id: '7',
        snooze: '1 week'
    },

]

const SnoozeData = () => {
    return hours.map((item, key) => {
        return (
            <View key={item.id}>

                <TouchableOpacity>
                    <View style={style.hourView}>
                        <Text style={style.hour}>{item.snooze}</Text>
                    </View>
                </TouchableOpacity>

            </View>
        )
    });
};

export default SnoozeData;

const style = StyleSheet.create({
    hour: {
        fontSize: 18,
        color: 'grey',
        marginTop: 20
    },
    hourView: {
        width: '100%',
        backgroundColor: 'white',
        marginVertical: 10
    }
})