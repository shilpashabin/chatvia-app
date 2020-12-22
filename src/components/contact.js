import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ContactTile = ({data, name, subname, rightname, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={{flexDirection: 'row', marginVertical:10}}>
          <View>
            <Image style={styles.imageicon} source= {data} />
          </View>

          <View style={styles.insidecontainer}>
            <Text style={styles.maintext}>{name}</Text>
            <Text>{subname}</Text>
          </View>

          <View style={{width: '60%'}}>
            <Text style={styles.rightside}>{rightname}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  insidecontainer: {
    flexDirection: 'column',
    padding: 8,
  },
  imageicon: {
    marginLeft: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  rightside: {
    textAlign: 'right',
    marginTop: 10,
    fontSize: 16,
  },
  maintext: {
    fontSize: 16,
  },
});

export default ContactTile;
