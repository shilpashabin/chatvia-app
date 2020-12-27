import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback } from 'react-native';

import ChatScreen from './src/screens/home_screen/chat_screen/index';
import ContactTile from './src/components/contact';
import People from './src/screens/home_screen/People/people_screen';
import SettingsAccount from './src/screens/Settings_Account/settings_account';
import Snooze from './src/screens/Snooze_Notification/snooze';
import Status from './src/screens/Status/share_status';


const App = () => {
  return (
    <View>
      <Status/>
    </View>
    
  );
};

export default App;
