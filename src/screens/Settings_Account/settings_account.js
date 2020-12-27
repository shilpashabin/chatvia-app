import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import SwitchTile from '../../components/switch_tile';
import DividerTile from '../../components/divider';
import TextTile from '../../components/text_tile';
import SectionHead from '../../components/section_heading';
import mainStyle from '../../config/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SettingsAccount = () =>{
    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{width:'100%', backgroundColor:'#fff', }}>
                    <View style={style.header}>
                        <MaterialIcons name="arrow-back" size={25} color="#fff" />
                        <View style={style.titleBox}>
                            <Text style={style.headerText}>AISWARYA P V</Text>
                            <Text style={style.subtext}>aiswaryapv3123@gmail.com</Text>
                        </View>
                    </View>
                    <View>
                        <SectionHead heading ="General settings"/>
                        <TextTile headText="Manage your Google Account"/>
                        <DividerTile/>
                        <TextTile headText="Share your status" subText="Your status will not be visible"/>
                        <SectionHead heading ="Notifications" />
                        <TextTile headText="Messages" subText="Vibrate and play sound"/>
                        <DividerTile/>
                        <TextTile headText="Incoming calls" subText="Vibrate and play sound" />
                        <View style={style.seperate}></View>
                        <SectionHead heading="How others can get in touch with you" />
                        <TextTile headText="Customise invites" />
                        <View style={{height:5, width:'100%'}}></View>
                        <SectionHead heading="Account" />
                        <TextTile headText="Discoverability settings" />
                        <DividerTile/>
                        <TextTile headText="Hidden contacts" />
                        <DividerTile/>
                        <TextTile headText="Blocked contacts" />
                        <DividerTile/>
                        <TextTile headText="Sign out" />
                        <SectionHead heading="Improve ChatVia" />
                        <SwitchTile text="Improve Hangouts" subText="Report additional diagnostics to help improve ChatVia"/>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default SettingsAccount;

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
        justifyContent: 'space-around',
        paddingLeft: 20,
      },
      headerText: {
        fontSize: 20,
        color: 'white',  
      },
      subtext:{
          fontSize:17,
          color:'#fff'
      },
      seperate:{
          height:10,
          width:'100%'
      }
});