import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import mainStyle from '../../../config/styles';
import ContactTile from "../../../components/contact";
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Modal from 'react-native-modal';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DividerTile from '../../../components/divider';

const img = require('../../../assets/sample/img1.jpg');


const PeopleBottomModal = () =>{
    const [peoplemodalVisible, setPeopleModalVisible] = useState(false);
    const [profilemodalVisible, setProfileModalVisible] = useState(false);
    const [blockModalVisible, setBlockModalVisible] = useState(false);
    function profile() {
        setPeopleModalVisible(false);
        setProfileModalVisible(true);
    };
    function block() {
        setPeopleModalVisible(false);
        setBlockModalVisible(true);
    };
    
   

    return(
        <View style={style.contact}>
            <View  style={{width: '90%'}}>
                <ContactTile name="Aiswarya" subname="Active 2h ago " data={img} />
            </View>

            <TouchableOpacity   style={{alignSelf: 'center',  marginRight: 10,  marginTop: 10,  justifyContent: 'flex-end'}} onPress={() => setPeopleModalVisible(true)}>
                <SimpleLineIcons name="options-vertical" size={16} color="#000" />
            </TouchableOpacity>

            {/* BottomModal */}

            <View>
                <Modal
                    isVisible={peoplemodalVisible}
                    style={{margin: 0}}
                    backdropOpacity={0.3}
                    onBackdropPress={() => setPeopleModalVisible(false)}>
                    <View style={style.peoplemodal}>
                    {/* BottomModalFileds */}
                        <View style={style.base}>
                            <View>
                                <View style={{flexDirection: 'row', marginTop: 5}}>
                                    <Text style={{padding: 5, fontSize: 20, marginBottom: 20}}>
                                        William{' '}
                                    </Text>
                                </View>

                                <TouchableOpacity>
                                    <View style={style.box}>
                                        <MaterialIcons
                                            name="message"
                                            size={25}
                                            color="rgba(0,0,0,0.5)"
                                            style={{marginTop: 3, marginRight: 5}}
                                        />
                                        <Text style={style.text}>Send message</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <View style={style.box}>
                                        <MaterialIcons
                                            name="video-call"
                                            size={30}
                                            color="rgba(0,0,0,0.5)"
                                        />
                                        <Text style={style.text}>Share Meet video call link</Text>
                                        
                                            <Text style={style.newItemText}>NEW</Text>
                                       
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <View style={style.box}>
                                        <MaterialCommunityIcons
                                            name="video-box"
                                            size={29}
                                            color="rgba(0,0,0,0.5)"
                                        />
                                        <Text style={style.text}>Call with video</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <View style={style.box}>
                                        <MaterialIcons name="call" size={28} color="rgba(0,0,0,0.5)" />
                                        <Text style={style.text}>Call with audio only</Text>
                                    </View>
                                </TouchableOpacity>


                                <DividerTile />


                                <TouchableOpacity onPress={ () => profile()}>
                                    <View style={style.box}>
                                        <MaterialCommunityIcons
                                            name="account"
                                            size={30}
                                            color="rgba(0,0,0,0.5)"
                                        />
                                        <Text style={style.text}>View profile</Text>
                                    </View>
                                </TouchableOpacity>


                                <TouchableOpacity onPress={ () => block()}>
                                    <View style={style.box}>
                                        <MaterialIcons
                                            name="block"
                                            size={25}
                                            color="rgba(0,0,0,0.5)"
                                            style={{marginRight: 5}}
                                        />
                                        <Text style={style.text}>Block</Text>
                                    </View>
                                </TouchableOpacity>


                            </View>
                        </View>
                    </View>
                </Modal>
            </View>


            {/* ProfileModale */}

            <View>
                <Modal
                isVisible={profilemodalVisible}
                style={{margin:0}}
                backdropOpacity={0.3}
                onBackdropPress={ ()=> setProfileModalVisible(false)}>
                    <View style={style.profilemodal}>

                        {/* profileIcon */}
                        <View style={style.profile}>
                            <MaterialCommunityIcons
                                name="account"
                                size={40}
                                color="#fff"
                                style={{alignSelf: 'center'}}
                            />
                        </View>
                        
                        {/* ProfileFields */}

                        <Text style={{alignSelf: 'center', padding: 35}}>
                            William
                        </Text>

                        <DividerTile />

                        <View style={style.iconRowView}>
                            <View style={style.iconbox}>
                                <AntDesign
                                    name="mail"
                                    size={23}
                                    color={mainStyle.colors.primary}
                                    style={{alignSelf: 'center'}}
                                />
                            </View>

                            <View style={style.iconbox}>
                                <MaterialCommunityIcons
                                    name="calendar"
                                    size={23}
                                    color={mainStyle.colors.primary}
                                    style={{alignSelf: 'center'}}
                                />
                            </View>

                            <View style={style.iconbox}>
                                <MaterialCommunityIcons
                                    name="message-outline"
                                    size={23}
                                    color="#dbd7d2"
                                    style={{alignSelf: 'center'}}
                                />
                            </View>

                            <View style={style.iconbox}>
                                <MaterialIcons
                                    name="call"
                                    size={23}
                                    color="#dbd7d2"
                                    style={{alignSelf: 'center'}}
                                />
                            </View>

                        </View>


                    </View>

                </Modal>
            </View>

            {/* BlockModal */}

            <View>
                <Modal
                isVisible={blockModalVisible}
                backdropOpacity={0.3}
                style={{margin:10}}
                animationIn={'fadeIn'}
                animationOut={'fadeOutDown'}
                onBackdropPress={()=> setBlockModalVisible(false)}>
                    <View style={style.blockModal}>
                        <Text style={{fontSize:18, fontWeight:'bold', paddingBottom:10}}>Block William ?</Text>
                        <Text style={style.blockText}>
                           If blocked, you will no longer recieve direct messages and notifications, but this person will still be present in any group ChatVia that you have in common.
                        </Text>
                        <Text style={style.blockText}>Blocking applies to other Google products as well, Some effects may not be reversible.</Text>
                        <Text style={style.blockText}>You can change who can start a conversation with you by customising your invitation settings</Text>
                        <View style={style.cancelView}>
                            <TouchableWithoutFeedback onPress={()=> setBlockModalVisible(false)}>
                            <Text style={{color:mainStyle.colors.primary}}>CANCEL</Text>
                            </TouchableWithoutFeedback>
                            <Text style={{color:mainStyle.colors.primary}}>BLOCK</Text>
                        </View>
                    </View>

                </Modal>
            </View>
        </View>
    );
}



export default PeopleBottomModal;

const style = StyleSheet.create({
    contact: {
        width: '100%',
        height: 80,
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
      },
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
      newItemText: {
        fontSize: 16,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: mainStyle.colors.primary,
        paddingHorizontal: 4,
        paddingLeft: 6,
        marginLeft: 10,
        color: mainStyle.colors.primary,
        fontWeight: 'bold'
    },

});