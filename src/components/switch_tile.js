import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Switch} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import mainStyle from '../config/styles';

const SwitchTile = ({text, onPress, subText}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={{width: '100%'}}>
       
      <View style={style.switch}>
        <View>
          <Text style={style.text}>{text}</Text>
          <Text style={style.subText}>{subText}</Text>
        </View>
        <View>
          <Switch
            trackColor={{false: '#bdbdbd', true: '#c0dece'}}
            thumbColor={isEnabled ? mainStyle.colors.primary : '#ececec'}
            ios_backgroundColor="#bdbdbd"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      
    </View>
  );
};

export default SwitchTile;

const style = StyleSheet.create({
  text: {
    fontSize: 20,
    color: mainStyle.colors.primary,
  },
  switch: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    height: 60,
    // backgroundColor: 'pink',
    paddingLeft: 5,
  },
  subText: {
    fontSize: 14,
    color: 'grey',
  },
});
