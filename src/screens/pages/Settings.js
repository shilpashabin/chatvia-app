import React, { useState } from 'react';
import { Text,View,SafeAreaView,StyleSheet, StatusBar,TouchableOpacity} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import SectionHead from '../../components/section_heading';
import SwitchTile from '../../components/switch_tile';
import TextTile from '../../components/text_tile';
import DividerTile from '../../components/divider';
import ContactTile from '../../components/contact';
import mainStyle from '../../config/styles';
const StatusBarHeight = StatusBar.currentHeight;

const Settings = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
       <StatusBar backgroundColor="rgba(0,0,0,0.2)" translucent={true} />
    <View style={{backgroundColor:'white', height:'100%', width:'100%'}}>
      
        <View style={styles.upperContainer}>
            <View style={styles.headerContainer}>
            <TouchableOpacity onPress={()=> navigation.goBack(null)}>
            <MaterialIcons name="arrow-back" size={25} color="#fff" />
            </TouchableOpacity>
            <View style={styles.innerContainer}>
        <View style={styles.nameContainer}>
              <Text style={styles.headerHeading} >Settings</Text>
            </View></View></View></View> 
     
      <View>
            <SectionHead heading='General Settings' /> 
            <SwitchTile text='Browse in ChatVia' subText='Let the ChatVia browses open web links' />
              <SectionHead heading='Account' /> 
              <TextTile  headText='Alex Mathew' subText='alexmathew23@gmail.com' onpress={()=> navigation.navigate("SettingsAccount")}/>
              <DividerTile/>
              <TextTile  headText='Add account' onpress={()=> setModalVisible(true)}/>
            <DividerTile/>

      </View>

      {/* ADD ACCOUNT MODAL */}

      <View>
          <Modal
                isVisible={modalVisible}
                backdropOpacity={0.3}
                style={{margin:10}}
                animationIn={'fadeIn'}
                animationOut={'fadeOut'}
                onBackdropPress={()=> setModalVisible(false)}>
      
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Choose Account</Text>
         
                       <ContactTile name="Alex Mathew" subname="alexmathew23@gmail.com" ></ContactTile>
                

               <View style={{flexDirection:'row',padding:20,}}>
                <Text style={{fontSize:16,color:'grey'}} onPress={() => {
                setModalVisible(!modalVisible);
              }} >Add account</Text>
              
            </View>
          </View>
        </View>
      </Modal>
        </View>


    </View>
    </View>

  )
};

export default Settings;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 55 + StatusBarHeight,
    backgroundColor:mainStyle.colors.primary,
    alignItems: 'center',
    paddingTop: StatusBarHeight,
    paddingLeft: 15,
    
},
headerHeading: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',  
},
nameContainer: {
  marginLeft: 16,

},
innerContainer: {
  flexDirection: 'row',
  marginHorizontal: 2,
  justifyContent: 'flex-start',
  alignSelf: 'center',
  marginHorizontal: 5,
  width: '70%',


 
},
optionButton: {
  paddingRight: 20,
  paddingLeft: 20,
  paddingVertical: 20,
},

// ACcount Modal

centeredView: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  padding:20
},
modalView: {
  margin: 10,
  backgroundColor: "white",
   borderRadius: 6,
  padding: 10,
  alignItems: "center",
 },
modalText: {
  alignSelf:'flex-start',
  padding:10,
  fontWeight:'bold',
  fontSize:18
},
});