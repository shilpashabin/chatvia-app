import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import mainStyle from '../../../config/styles';
import Modal from 'react-native-modal';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import OptionCard from '../../../components/option_card';
import DividerTile from '../../../components/divider';
import PeopleBottomModal from './people_bottom_modal';
import SwitchTile from '../../../components/switch_tile';

const options = ['Help & Feedback'];
const People = ({ navigation }) => {
  const [optionmodalVisible, setOptionModal] = useState(false);


  return (
    <View style={{ backgroundColor: 'white' }}>
      <StatusBar translucent={false} />
      <View style={style.header}>
        <TouchableOpacity onPress={() => navigation.goBack(null)}>
          <MaterialIcons name="arrow-back" size={23} color="#fff" />
        </TouchableOpacity>
        <View style={style.titleBox}>
          <Text style={style.headerText}>People</Text>
          <TouchableOpacity onPress={() => setOptionModal(true)}>
            <SimpleLineIcons name="options-vertical" size={16} color="#fff" />
          </TouchableOpacity>
          <Modal
            isVisible={optionmodalVisible}
            animationIn={'fadeIn'}
            animationOut={'fadeOut'}
            style={{ margin: 1 }}
            backdropOpacity={0}
            onBackdropPress={() => setOptionModal(false)}>
            <View style={style.optionModal}>
              <OptionCard
                data={options}
                selectedItem={(item) => console.log(item)}
              />
            </View>
          </Modal>
        </View>
      </View>
      <View style={{ marginTop: 10, width: '100%', height: 50 }}>
        <Text style={style.sub}>Create Group with Aiswarya</Text>
      </View>
      <DividerTile />
      <PeopleBottomModal />
    </View>
  );
};

export default People;

const style = StyleSheet.create({
  header: {
    backgroundColor: mainStyle.colors.primary,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  titleBox: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
  },
  headerText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  optionCardContainer: {
    position: 'absolute',
    top: 0,
    right: -15,
  },
  sub: {
    fontSize: 16,
    alignItems: 'center',
    padding: 10,
  },
  optionModal: {
    position: 'absolute',
    top: 0,
    right: 0,
  },

});
