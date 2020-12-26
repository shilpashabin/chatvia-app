import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, TouchableHighlight, Pressable } from 'react-native';

import MainNavigation from './src/navigation/main_navigation';
import ChatScreen from './src/screens/home_screen/chat_screen/index';
import DiscoverabilityScreen from './src/screens/home_screen/discoverability_settings/index'


const App = () => {
  return (
    <MainNavigation />
  );
}


export default App;