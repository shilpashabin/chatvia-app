import React, {useState } from 'react';
import { View, Text, StyleSheet,TouchableWithoutFeedback,Image } from 'react-native';
import Ripple from 'react-native-material-ripple';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import OptionCard from '../../components/option_card';

const Invites = () =>
{
    const [optionButtonState, setOptionButtonState] = useState(false);
    const options = [ "Help & feedback",]
    

    return(
        <View>
            <View style={styles.container}>
            
            <TouchableWithoutFeedback onPress={() => setOptionButtonState(false)} touchSoundDisabled={true}>
            <View>
                        <View style={styles.upperContainer}>
            <View style={styles.headerContainer}>
            <MaterialIcons name="arrow-back" size={25} color="#fff" />
    
            <View style={styles.innerContainer}>
                                    <View style={styles.nameContainer}>
                                        <Text style={styles.headerHeading}>Invites</Text>
                                      
                                    </View>
                                    <Ripple onPress={() => setOptionButtonState(true)}>
                                    <SimpleLineIcons style={styles.optionButton} name="options-vertical" size={16} color="#fff" />
                                </Ripple>
                                </View>
    
                                 {/* OptionCard */}
                <View style={styles.optionCardContainer}>
                    {optionButtonState ? <View>
                        <OptionCard
                            data={options}
                            selectedItem={(item) => console.log(item)} />
                    </View> : <View></View>}
                </View>
                
                </View>
                </View>
                </View>
                </TouchableWithoutFeedback>


                
         
    </View>
    <View style="styles.imgcontainer">
    <Image style={styles.inviteimg}
        source={require('../../assets/sample/invite.png')}/>
        <Text style={styles.imgtext}>No invites</Text>
    </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
           backgroundColor:'grey'
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
        inviteimg:{
            width:300,
            height:300,
            alignSelf:'center',
            margin:50,
        
        },
       imgcontainer:{
        flex: 1,
        justifyContent: "center",
        // paddingHorizontal: 10
       } ,
       imgtext:{
           alignSelf:'center',
           fontSize:16,
           fontWeight:"600",
           
       }
});

export default Invites;