import React, { useState } from 'react';
import { Text,View,SafeAreaView,StyleSheet,Image, TouchableOpacity, StatusBar} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import mainStyle from '../../config/styles';
import Modal from 'react-native-modal';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import OptionCard from '../../components/option_card';

const StatusBarHeight = StatusBar.currentHeight;
const options = ['Help & Feedback'];
const HiddenScreen = ({navigation}) => {
  const [optionmodalVisible, setOptionModal] = useState(false);
  return (
    <View style={{backgroundColor:'white', height:'100%' }}>
      <StatusBar backgroundColor="rgba(0,0,0,0.2)" translucent={true} />
        <View style={styles.header}>
          <TouchableOpacity onPress={()=> navigation.goBack(null)}>
          <MaterialIcons name="arrow-back" size={23} color="#fff" />
          </TouchableOpacity>
          <View style={styles.titleBox}>
              <Text style={styles.headerText}>Hidden contacts</Text>
              <TouchableOpacity onPress={() => setOptionModal(true)}>
                  <SimpleLineIcons name="options-vertical" size={16} color="#fff" />
              </TouchableOpacity>
              <Modal
                isVisible={optionmodalVisible}
                animationIn={'fadeIn'}
                animationOut={'fadeOut'}
                style={{margin: 1}}
                backdropOpacity={0}
                onBackdropPress={() => setOptionModal(false)}>
                <View style={styles.optionModal}>
                    <OptionCard
                        data={options}
                        selectedItem={(item) => console.log(item)}
                    />
                </View>
              </Modal>
          </View>
      </View>
      {/* <View style={styles.viewImage}> 
      <Image source={require('../../assets/sample/hidden.png')}  style = {styles.image}  resizeMode='contain'>
        </Image> 
      </View> */}
      <View style={{alignSelf:'center', justifyContent:'center', height:500}}>
        <Text style={{fontSize:17}}>
          No hidden contacts
        </Text>
      </View>
      </View>

  )
};

export default HiddenScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: mainStyle.colors.primary,
    height: 55 + StatusBarHeight,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: StatusBarHeight,
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
  optionModal: {
    position: 'absolute',
    top: 0,
    right: 5,
  },
      viewImage:{
        marginVertical:70,
      height:100, 
    }, 
    image: {
      alignSelf: 'center',
      marginVertical:70,
      height:100,   
      },
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 55,
    backgroundColor:'green',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 5,
    paddingLeft: 15
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
});