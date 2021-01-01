import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity , StatusBar} from 'react-native';
import SwitchTile from '../../components/switch_tile';
import DividerTile from '../../components/divider';
import TextTile from '../../components/text_tile';
import SectionHead from '../../components/section_heading';
import mainStyle from '../../config/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const StatusBarHeight = StatusBar.currentHeight;


const SettingsAccount = ({navigation}) =>{
    return (
        <View>
            <StatusBar backgroundColor="rgba(0,0,0,0.2)" translucent={true} />
            <View style={style.header}>
                        <TouchableOpacity onPress={()=> navigation.goBack(null)}>
                        <MaterialIcons name="arrow-back" size={25} color="#fff" />
                        </TouchableOpacity>
                        <View style={style.titleBox}>
                            <Text style={style.headerText}>Alex Mathew</Text>
                            <Text style={style.subtext}>alexmathew23@gmail.com</Text>
                        </View>
                    </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{width:'100%', backgroundColor:'#fff', marginBottom:75 }}>
                    
                    <View>
                        <SectionHead heading ="General settings"/>
                        <TextTile headText="Manage your Google Account"/>
                        <DividerTile/>
                        <TextTile headText="Share your status" subText="Your status will not be visible" onpress={()=> navigation.navigate("Sharestatus")}/>
                        <SectionHead heading ="Notifications" />
                        <TextTile headText="Messages" subText="Vibrate and play sound" onpress={()=>navigation.navigate("MessageScreen")}/>
                        <DividerTile/>
                        <TextTile headText="Incoming calls" subText="Vibrate and play sound" onpress={()=> navigation.navigate("IncomingCallscreen")}/>
                        <View style={style.seperate}></View>
                        <SectionHead heading="How others can get in touch with you" />
                        <TextTile headText="Customise invites" onpress={()=> navigation.navigate("Customize")}/>
                        <View style={{height:5, width:'100%'}}></View>
                        <SectionHead heading="Account" />
                        <TextTile headText="Discoverability settings" onpress={()=> navigation.navigate("DiscoverabilityScreen")}/>
                        <DividerTile/>
                        <TextTile headText="Hidden contacts" onpress={()=> navigation.navigate("HiddenScreen")}/>
                        <DividerTile/>
                        <TextTile headText="Blocked contacts" onpress={()=> navigation.navigate("BlockedScreen")}/>
                        <DividerTile/>
                        <TextTile headText="Sign out" />
                        <SectionHead heading="Improve ChatVia" />
                        <SwitchTile text="Improve ChatVia" subText="Report additional diagnostics to help improve ChatVia"/>
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
        height: 55 + StatusBarHeight,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: StatusBarHeight,
        paddingHorizontal:10,
        elevation:8,
        paddingBottom:5
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