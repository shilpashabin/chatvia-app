import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import mainStyle from '../config/styles';

import HomeScreen from '../screens/home_screen/index';
import SkipHomeScreen from '../screens/home_screen/skip_chatscreen';
import NewConversation from '../screens/home_screen/new_conversation';
import ChatScreen from '../screens/home_screen/chat_screen/index';
import WelcomePage from '../screens/Welcome/welcome';

const PeopleScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>People</Text>
        </View>
    )
}

const OptionScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Options</Text>
        </View>
    )
}

const Stack = createStackNavigator();

const HomeScreenStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: mainStyle.colors.primary },
            headerTintColor: "#fff"
        }} initialRouteName ={WelcomePage}>
            <Stack.Screen name="WelcomePage" component={WelcomePage} options={{ headerShown: false }} />
            <Stack.Screen name="ChatVia" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SkipChatVia" component={SkipHomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="New conversation" component={NewConversation} />
            <Stack.Screen name="Chat Screen" component={ChatScreen} options={{ headerShown: false }} />
            <Stack.Screen name="PeopleScreen" component={PeopleScreen} />
            <Stack.Screen name="OptionScreen" component={OptionScreen} />
        </Stack.Navigator>
    );
}

export default HomeScreenStack;