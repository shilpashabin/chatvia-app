import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import mainStyle from '../../config/styles';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Modal from 'react-native-modal';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DividerTile from '../../components/divider';
import Ripple from 'react-native-material-ripple';
import OptionCard from '../../components/option_card';
import SwitchTile from '../../components/switch_tile'
import RadioButtonRN from 'radio-buttons-react-native';
const img = require('../../assets/sample/img1.jpg');


const Customize = () =>{

    const [optionButtonState, setOptionButtonState] = useState(false);
    const options = [ "Help & feedback",]

    const [peoplemodalVisible, setPeopleModalVisible] = useState(false);
    const [profilemodalVisible, setProfileModalVisible] = useState(false);
    const [blockModalVisible, setBlockModalVisible] = useState(false);
    function people() {
      setPeopleModalVisible(false);
      setPeopleModalVisible(true);
  };
    function profile() {
        setPeopleModalVisible(false);
        setProfileModalVisible(true);
    };
    function block() {
        setPeopleModalVisible(false);
        setBlockModalVisible(true);
        
    };

    const Data1 = [
        {label: 'Can contact you directly',},
        {label: 'Can send you an invite',},
        {label: 'Cannot send invite',},
    ];
    const Data = [
        {label: 'Can contact you directly',},
        {label: 'Can send you an invite',},
      
    ];

    const Data2 = [
      {label: 'Can contact you directly',},
      {label: 'Can send you an invite',},
    
  ];
    
   

    return(

<View style={{backgroundColor:'white', height:'100%'}}>
   

           <View style={{marginTop:10}}>
           <SwitchTile text="Get notified about invitation" ></SwitchTile>
           </View>
              <DividerTile/>
        <TouchableOpacity  style={style.openButton1} onPress={ () => people()}>   
       <Text style={style.textStyle}>People who have your email</Text>
        <Text style={style.textStyle1}>Can send you an invite</Text>
      </TouchableOpacity>
        <DividerTile/>

    <TouchableOpacity style={style.openButton1}  onPress={ () => profile()}>   
       <Text style={style.textStyle}>People who have your phone number</Text>
        <Text style={style.textStyle1}>Can send you an invite</Text>
      </TouchableOpacity>
     <DividerTile/>

    <TouchableOpacity style={style.openButton1} onPress={ () => block()}>   
       <Text style={style.textStyle}>Everyone else</Text>
        <Text style={style.textStyle1}>Can send you an invite</Text>
      </TouchableOpacity>
      <DividerTile/>

      {/* emailModale */}
      <View>
                <Modal
                isVisible={peoplemodalVisible}
                backdropOpacity={0.3}
                style={{margin:10}}
                animationIn={'fadeIn'}
                animationOut={'fadeOutDown'}
                onBackdropPress={()=> setPeopleModalVisible(false)}>
                    <View style={style.blockModal}>
                        <Text style={{fontSize:19, fontWeight:'bold',paddingLeft:10}}>People who have your email</Text>
                        
            <RadioButtonRN data={Data2} selectedBtn={(e) => console.log(e)} box={false} 
           textStyle={{fontSize:18,padding:8,paddingLeft:10,}}
           boxStyle={{flexDirection:'row',marginTop:10}}
           circleSize={10}  activeColor={mainStyle.colors.primary} />
                        <View style={style.cancelView}>
                            <TouchableWithoutFeedback onPress={()=> setPeopleModalVisible(false)}>
                            <Text style={{color:mainStyle.colors.primary,paddingLeft:20,fontWeight:'bold'}}>CANCEL</Text>
                            </TouchableWithoutFeedback>
                            
                        </View>
                    </View>

                </Modal>
            </View>






        {/* PhoneModale */}

        <View>
        <Modal
                isVisible={profilemodalVisible}
                backdropOpacity={0.3}
                style={{margin:10}}
                animationIn={'fadeIn'}
                animationOut={'fadeOutDown'}
                onBackdropPress={()=> setProfileModalVisible(false)}>
                    <View style={style.blockModal}>
                        <Text style={{fontSize:19, fontWeight:'bold',paddingLeft:10}}>People who have your phone number</Text>
                        
            <RadioButtonRN data={Data} selectedBtn={(e) => console.log(e)} box={false} 
           textStyle={{fontSize:18,padding:8,paddingLeft:10,}}
           boxStyle={{flexDirection:'row',marginTop:10}}
           circleSize={10}  activeColor={mainStyle.colors.primary} />
                        <View style={style.cancelView}>
                            <TouchableWithoutFeedback onPress={()=> setProfileModalVisible(false)}>
                            <Text style={{color:mainStyle.colors.primary,paddingLeft:20,fontWeight:'bold'}}>CANCEL</Text>
                            </TouchableWithoutFeedback>
                            
                        </View>
                    </View>

                </Modal>
            </View>


         {/* everyoneModal */}

         <View>
                <Modal
                isVisible={blockModalVisible}
                backdropOpacity={0.3}
                style={{margin:10}}
                animationIn={'fadeIn'}
                animationOut={'fadeOutDown'}
                onBackdropPress={()=> setBlockModalVisible(false)}>
                    <View style={style.blockModal}>
                        <Text style={{fontSize:19, fontWeight:'bold',paddingLeft:10}}>Everyone else</Text>
                        
            <RadioButtonRN data={Data1} selectedBtn={(e) => console.log(e)} box={false} 
           textStyle={{fontSize:18,padding:8,paddingLeft:10,}}
           boxStyle={{flexDirection:'row',marginTop:10}}
           circleSize={10}  activeColor={mainStyle.colors.primary} />
                        <View style={style.cancelView}>
                            <TouchableWithoutFeedback onPress={()=> setBlockModalVisible(false)}>
                            <Text style={{color:mainStyle.colors.primary,paddingLeft:20,fontWeight:'bold'}}>CANCEL</Text>
                            </TouchableWithoutFeedback>
                            
                        </View>
                    </View>

                </Modal>
            </View>





           
        </View>
    );
}



export default Customize;

const style = StyleSheet.create({
    // contact: {
    //     width: '100%',
    //     height: 80,
    //     marginTop: 5,
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //   },
      peoplemodal:{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#fff',
        padding: 10,
      },
      new: {
        borderWidth: 1,
        borderColor: mainStyle.colors.primary,
        height: 20,
        marginTop: 5,
        padding: 3,
        borderRadius: 3,
      },
      text: {padding: 5, fontSize: 15, paddingLeft: 20},
      box: {flexDirection: 'row', marginTop: 8, marginVertical: 10, marginLeft: 5},
      profilemodal:{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#fff',
        padding: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingBottom: 55,
      },
      profile: {
        height: 70,
        width: 70,
        borderRadius: 70 / 2,
        padding: 10,
        alignSelf: 'center',
        position: 'absolute',
        top: -30,
        backgroundColor: mainStyle.colors.primary,
      },
      iconRowView:{
        width: '100%',
        height: 60,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        position: 'absolute',
        top: 83,
        left: 10,
      },
      iconbox: {
        width: 45,
        height: 45,
        borderRadius: 45 / 2,
        borderWidth: 1,
        borderColor: '#dbd7d2',
        alignSelf: 'flex-start',
        backgroundColor: '#fff',
        justifyContent: 'center',
      },
      blockModal:{
          alignSelf:'center',
          justifyContent:'center',
          backgroundColor:'white',
          borderRadius:4,
          padding:20,
          width:'90%'
      },
      blockText:{
          fontSize:16,
          paddingVertical:10,
          color:'grey'
      },
      cancelView:
        {
            flexDirection:'row', 
            alignSelf:'flex-end', 
            justifyContent:'space-around', 
            width:'40%',
            paddingVertical:20
      },

      optionText:{
        color:'green',
        fontSize:14,
        margin:15,
        fontWeight:'bold'
        },
        headerContainer: {
            flexDirection: 'row',
            width: '100%',
            height: 55,
            backgroundColor: 'green',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: 5,
            paddingLeft: 20
        },
        innerContainer: {
            flexDirection: 'row',
            marginHorizontal: 2,
            justifyContent: 'space-between',
            alignSelf: 'center',
            marginHorizontal: 10,
            width: '70%',
            alignItems: 'center'
        },
        headerHeading: {
            fontSize: 20,
            color: '#fff',
            fontWeight: 'bold',
           
        },
        nameContainer: {
     
        },
        optionButton: {
            paddingRight: 10,
            paddingLeft: 20,
            paddingVertical: 20,
        },
        optionCardContainer: {
            position: 'absolute',
            top: 5,
            right: 0,
        },

        openButton1: {
            padding: 10,
             },
           textStyle: {
             color: "black",
           
            // paddingLeft:10,
            fontSize:17,
           },
           textStyle1: {
             color: "grey",
            //  paddingLeft:10,
            fontSize:15,
           },

});