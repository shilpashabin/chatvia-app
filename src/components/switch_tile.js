import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch, TouchableOpacity} from 'react-native';
import mainStyle from '../config/styles';

const SwitchTile = ({text, subText}) =>{
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleSwitchOn = () => setIsEnabled((previousState) => previousState);
  function onSwitch  (){
    toggleSwitchOn ();
    toggleSwitch ();
  }

  return (
   <TouchableOpacity onPress={()=> onSwitch()}>

      <View style={{backgroundColor:'white', width:'100%'}}>
          <View style={style.switch}>
              <View>
                  <Text style={style.text}>{text}</Text>
                  <Text style={style.subText}>{subText}</Text>
              </View>
              <View style={{height:40}}>
                  <Switch
                      trackColor={{false: '#bdbdbd', true: '#e8eae6'}}
                      thumbColor={isEnabled ? mainStyle.colors.primary : '#ececec'}
                      onValueChange={toggleSwitch}
                      value={isEnabled}
                      style={{marginRight:20}}
                  />
              </View>
            </View>
        </View>
   </TouchableOpacity>
  );
}
export default SwitchTile;

const style = StyleSheet.create({
  text: {
    
    color: '#464647',
    paddingLeft:10
  },
  switch: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    backgroundColor: 'white',
    paddingLeft: 5,
    paddingBottom:10
  },
  subText: {
    fontSize: 14,
    color: 'grey',
    paddingLeft:10
  },
});


