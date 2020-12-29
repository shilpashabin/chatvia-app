import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import mainStyle from '../config/styles';

const Screen1 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button title="Go to Screen2" onPress={() => navigation.navigate('Screen2')} />
        </View>
    )
}

const Screen2 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button title="Go to Screen1" onPress={() => navigation.navigate('Screen1')} />
        </View>
    )
}

const Stack = createStackNavigator();

const SettingsScreenStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: mainStyle.colors.primary },
            headerTintColor: "#fff"
        }}>
            <Stack.Screen name="Screen1" component={Screen1} />
            <Stack.Screen name="Screen2" component={Screen2} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default SettingsScreenStack;