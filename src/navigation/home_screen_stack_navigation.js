import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import mainStyle from '../config/styles';

import HomeScreen from '../screens/home_screen/index';
import NewConversation from '../screens/home_screen/new_conversation';
import ChatScreen from '../screens/home_screen/chat_screen/index';
import Options from '../screens/chatoption_screen/Options';
import People from '../screens/home_screen/People/people_screen';
import Newgroup from '../screens/Newgroup';

const Stack = createStackNavigator();

const HomeScreenStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: mainStyle.colors.primary },
            headerTintColor: "#fff"
        }}>
            <Stack.Screen name="ChatVia" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="New conversation" component={NewConversation} />
            <Stack.Screen name="Chat Screen" component={ChatScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Options" component={Options} options={{ headerShown: false }} />
            <Stack.Screen name="People" component={People} options={{ headerShown: false }} />
            <Stack.Screen name="Newgroup" component={Newgroup} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default HomeScreenStack;