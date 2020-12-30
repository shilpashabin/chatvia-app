import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import mainStyle from '../config/styles';
import Settings from '../screens/pages/Settings';
import SettingsAccount from '../screens/Settings_Account/settings_account';
import Sharestatus from '../screens/pages/ShareYourStatus';
import MessageScreen from '../screens/pages/MessageScreen';
import IncomingCallscreen from '../screens/pages/IncomingCallScreen';
import Customize from '../screens/customize_screen/Customize';
import DiscoverabilityScreen from '../screens/home_screen/discoverability_settings/index';
import HiddenScreen from '../screens/pages/HiddenScreen';
import BlockedScreen from '../screens/pages/BlockedScreen';

const Stack = createStackNavigator();

const SettingsScreenStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: mainStyle.colors.primary },
            headerTintColor: "#fff"
        }} initialRouteName="Settings">
            <Stack.Screen name="Settings" component={Settings} options={{headerShown:false}}/>
            <Stack.Screen name="SettingsAccount" component={SettingsAccount} options={{headerShown:false}}/>
            <Stack.Screen name="Sharestatus" component={Sharestatus} options={{headerShown:true, title:"Share your status"}}/>
            <Stack.Screen name="MessageScreen" component={MessageScreen} options={{headerShown:true, title:"Messages"}}/>
            <Stack.Screen name="IncomingCallscreen" component={IncomingCallscreen} options={{headerShown:true, title:"Incoming calls"}}/>
            <Stack.Screen name="Customize" component={Customize} options={{headerShown:true, title:"Customise invitations"}}/>
            <Stack.Screen name="DiscoverabilityScreen" component={DiscoverabilityScreen} options={{headerShown:false}}/>
            <Stack.Screen name="HiddenScreen" component={HiddenScreen} options={{headerShown:false}}/>
            <Stack.Screen name="BlockedScreen" component={BlockedScreen} options={{headerShown:false}}/>
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