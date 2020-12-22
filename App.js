import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback } from 'react-native';

import ChatScreen from './src/screens/home_screen/chat_screen/index';
import ContactTile from './src/components/contact';


const App = () => {
  return (
    <View>
      <ChatScreen/>
    </View>
    
  );
};

export default App;
