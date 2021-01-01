import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import mainStyle from '../config/styles';

const TextTile = ({headText, subText, onpress}) => {
  return (
    <TouchableOpacity onPress={onpress}>
      <View style={style.section}>
        <Text style={style.headText}>{headText}</Text>
        <Text style={style.subText}>{subText}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TextTile;

const style = StyleSheet.create({
  headText: {
    color: '#464647',
    fontSize:16,
    paddingLeft: 10,
  },
  subText: {
    fontSize:12,
    color: 'grey',
    paddingLeft: 10,
  },
  section: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    paddingLeft: 5,
    marginTop:5,
    marginBottom:15
  },
});