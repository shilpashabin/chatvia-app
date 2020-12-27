import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Switch} from 'react-native';
import mainStyle from '../config/styles';

const SectionHead = ({heading}) => {
  return (
    <View style={style.section}>
     <Text style={style.heading}>
         {heading}
     </Text>
    </View>
  );
};

export default SectionHead;

const style = StyleSheet.create({
  heading:{
      color: mainStyle.colors.primary,
      fontSize:20,
      padding:10
  },
  section:{
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    backgroundColor: 'white',
    paddingLeft: 5,
  },
});
