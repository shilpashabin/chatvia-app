import React from 'react';
import {View, Text} from 'react-native';
import SwitchTile from './src/components/switch_tile';

const App = () => {
  return (
    <View style={{flex: 1, marginTop: 20}}>
      <SwitchTile
        text="Last Seen"
        subText="show the last time you were using ChatVia"
      />
      <SwitchTile text="Settings" />
    </View>
  );
};

export default App;
