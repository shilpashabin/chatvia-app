import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, StatusBar, FlatList } from 'react-native';

import { Divider } from 'react-native-elements';
import Modal from 'react-native-modal';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import FloatingActionButton from 'react-native-floating-action-button';
import OptionCard from '../components/option_card';
import ContactTile from '../components/contact';
import UserData from './home_screen/data';

const USERS = new UserData();
const Frequent_Users = USERS.FrequentUsers;
const ChatVia_Users = USERS.ChatViaUser;
const UnRegistered_Users = USERS.UnRegisteredUsers;
const StatusBarHeight = StatusBar.currentHeight;

const Newgroup = () => {
    const [optionButtonState, setOptionButtonState] = useState(false);

    // React.useLayoutEffect(() => {
    //     navigation.setOptions({
    //         headerRight: () => (
    //             <View style={styles.optionButtonPressable}>
    //                 <Pressable
    //                     android_ripple={{ color: 'rgba(255,255,255,0.1)' }}
    //                     onPress={() => setOptionButtonState(true)}
    //                 >
    //                     <View style={styles.optionButtonContainer}>
    //                         <SimpleLineIcons style={styles.optionButton} name="options-vertical" size={16} color="#fff" />
    //                     </View>
    //                 </Pressable>
    //             </View>
    //         ),
    //     });
    // }, [navigation]);

    const renderItem = ({ item }) => (
        <ContactTile
            data={item.image}
            name={item.name}
            subname={item.message}
            rightname={item.lastseen}
            // onPress={() => navigation.navigate('Chat Screen', { name: item.name, lastseen: item.lastseen })}
        />
    );

    
    return (
        <>
<StatusBar backgroundColor="rgba(0,0,0,0.2)" translucent={true} />
<View style={styles.headerContainer}>
                            <MaterialIcons name="arrow-back" size={25} color="#fff" />
                            <View style={styles.innerContainer}>
                                <View style={styles.nameContainer}>
                                    <Text style={styles.headerHeading}>New group</Text>
                                     {/* <Text style={styles.lastseenText}>Active yesterday</Text>  */}
                                </View>
                                </View>
                                </View>

{/*floating buttn*/}
<View style={styles.floatstyle}>
<FloatingActionButton  
    text="checkmark"
    iconName="checkmark"
    iconType="Ionicons"
    iconColor="white"
    textColor="white"
    shadowColor="white"
    rippleColor="white"
    backgroundColor="green"
    
    
/></View>



            <View style={styles.mainContainer}>
               {/* New Group */}
         <View style={styles.newGroupContainer}>
                    <View style={styles.IconContainer}>
                        <MaterialIcons name="group-add" size={30} color="#fff" />
                    </View>
                    <TextInput
                        style={styles.searchBoxInput}
                        placeholder="Name your group"
                    />
                </View>
                <Divider />
                {/* Search Box */}
                <View style={styles.searchBox}>
                    <MaterialIcons name="search" size={20} color="rgba(0,0,0,0.5)" />
                    <TextInput
                        style={styles.searchBoxInput}
                        placeholder="contact name"
                    />
                </View>
                <Divider />

                <View style={{ flex: 1 }}>
                    <FlatList
                        data={Frequent_Users}
                        keyExtractor={(item) => item.id.toString()}
                        ListHeaderComponent={<Text style={styles.subHeading}>Frequent</Text>}
                        renderItem={renderItem}
                        ListFooterComponent={
                            <FlatList
                                data={ChatVia_Users}
                                keyExtractor={(item) => item.id.toString()}
                                ListHeaderComponent={<Text style={styles.subHeading}>On ChatVia</Text>}
                                renderItem={renderItem}
                                ListFooterComponent={
                                    <FlatList
                                        data={UnRegistered_Users}
                                        keyExtractor={(item) => item.id.toString()}
                                        ListHeaderComponent={<Text style={styles.subHeading}>Not On ChatVia</Text>}
                                        renderItem={renderItem}
                                    />
                                }
                            />
                        }
                    />

                </View>


            </View>

            <Modal
                isVisible={optionButtonState}
                style={{ margin: 0 }}
                backdropOpacity={0}
                animationIn='fadeIn'
                animationOut='fadeOut'
                animationInTiming={100}
                animationOutTiming={100}
                onBackdropPress={() => setOptionButtonState(false)}
            >
                <View style={styles.optionCardStyle}>
                    <OptionCard data={['Help & feedback']} />
                </View>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FEFEFE',
    },
    optionButtonPressable: {
        width: 100,
        height: 65,
        borderRadius: 60 / 2,
        overflow: 'hidden',
        marginRight: -40
    },
    optionButtonContainer: {
        width: 50,
        height: '100%',
        borderRadius: 60 / 2,
        paddingLeft: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 70,
        paddingLeft: 20
    },
    searchBoxInput: {
        height: '100%',
        fontSize: 16,
        paddingLeft: 20
    },
    newGroupContainer: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        backgroundColor: '#FEFEFE',
        // elevation: 3
       
    },
    IconContainer: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        backgroundColor: '#425863',
        marginLeft: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    groupText: {
        fontSize: 18,
        fontWeight: '600',
        marginLeft: 15
    },
    subHeading: {
        color: 'rgba(0,0,0,0.6)',
        fontSize: 16,
        marginTop: 20,
        marginBottom: 10,
        paddingHorizontal: 15
    },
    optionCardStyle: {
        position: 'absolute',
        top: 3,
        right: 2
    },
    floatstyle:{
        alignItems:'flex-end',
        top:20,
        position:'relative'
        
      },
     
      
      headerContainer: {
        flexDirection: 'row',
        width: '100%',
        height: 55 + StatusBarHeight,
        backgroundColor: '#425863',
        alignItems: 'center',
        paddingTop: StatusBarHeight,
        paddingLeft: 15,
        position:'absolute',
    },
    headerHeading: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
       
    },
    nameContainer: {
      marginLeft: 20
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

})

export default Newgroup;
