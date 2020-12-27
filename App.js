import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback } from 'react-native';

import ChatScreen from './src/screens/home_screen/chat_screen/index';
import ContactTile from './src/components/contact';
import People from './src/screens/home_screen/People/people_screen';
import SettingsAccount from './src/screens/Settings_Account/settings_account';
import Snooze from './src/screens/Snooze_Notification/snooze';
import Status from './src/screens/Status/share_status';

//  import ChatScreen from './src/screens/home_screen/chat_screen/index';
// import ContactTile from './src/components/contact';
    //  import Archived from './src/screens/archived_screen/Archived';
    //  import Options from  './src/screens/chatoption_screen/Options';
      // import Customize from './src/screens/customize_screen/Customize';
//  import Invites from './src/screens/invites_screen/Invites';
  //  import Demo from './src/screens/chatoption_screen/demo'
  // import Addaccount from './src/screens/Addaccount';
   import Newgroup from './src/screens/Newgroup';

const App = () => {
  return (
    <View>
      <Status/>
    </View>
    
  );
};

export default App;
