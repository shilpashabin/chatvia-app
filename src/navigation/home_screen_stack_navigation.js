import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import mainStyle from '../config/styles';

import HomeScreen from '../screens/home_screen/index';
import NewConversation from '../screens/home_screen/new_conversation';
import ChatScreen from '../screens/home_screen/chat_screen/index';
import WelcomePage from '../screens/Welcome/welcome';

const Stack = createStackNavigator();

const HomeScreenStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: mainStyle.colors.primary },
            headerTintColor: "#fff"
        }} initialRouteName ={WelcomePage}>
            <Stack.Screen name="WelcomePage" component={WelcomePage} options={{ headerShown: false }} />
            <Stack.Screen name="ChatVia" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="New conversation" component={NewConversation} />
            <Stack.Screen name="Chat Screen" component={ChatScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default HomeScreenStack;