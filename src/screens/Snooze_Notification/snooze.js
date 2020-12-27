import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import Modal from 'react-native-modal';
import SnoozeData from './snooze_data';



const Snooze = () => {
  const [snoozeModalVisible, setSnoozeModalVisible] = useState(false);
  return (
    <View>
      <TouchableOpacity onPress={()=>setSnoozeModalVisible(true)}>
        <View
          style={{
            backgroundColor: 'red',
            width: 100,
            height: 50,
            alignSelf: 'center',
            justifyContent: 'center',
            marginVertical: 100,
            borderRadius: 8,
          }}>
          <Text style={{alignSelf: 'center'}}>Modal</Text>
        </View>
      </TouchableOpacity>
      <Modal
        isVisible={snoozeModalVisible}
        style={{margin: 0}}
        backdropOpacity={0.3}
        onBackdropPress={() => setSnoozeModalVisible(false)}>
        <View style={style.snoozeModal}>
          <Text style={{fontSize: 20}}>Snooze notifications</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
          <SnoozeData />
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

export default Snooze;

const style = StyleSheet.create({
  snoozeModal: {
    width: '90%',
    borderRadius: 5,
    backgroundColor: '#fff',
    alignSelf: 'center',
    padding: 20,
    height:'70%'
  },
  hour: {
    fontSize: 16,
    color: 'grey',
    marginTop: 20,
  },
  hourView: {
    width: '100%',
    backgroundColor: 'white',
  },
});

{
  /* <TouchableOpacity>
                        <View style={style.hourView}>
                        <Text style={style.hour}>Off</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <View style={style.hourView}>
                        <Text style={style.hour}>1 hour</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <View style={style.hourView}>
                        <Text style={style.hour}>2 hour</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <View style={style.hourView}>
                        <Text style={style.hour}>4 hour</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <View style={style.hourView}>
                        <Text style={style.hour}>8 hour</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <View style={style.hourView}>
                        <Text style={style.hour}>1 day</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <View style={style.hourView}>
                        <Text style={style.hour}>3 days</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <View style={style.hourView}>
                        <Text style={style.hour}>1 week</Text>
                        </View>
                    </TouchableOpacity> */
}
