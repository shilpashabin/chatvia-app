import React,{useState} from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Modal from 'react-native-modal';

import mainStyle from '../../config/styles';

import Ripple from 'react-native-material-ripple';
import ContactTile from '../../components/contact';
import UserData from './data';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const StatusBarHeight = StatusBar.currentHeight;

const USERS = new UserData();
const Frequent_Users = USERS.FrequentUsers;

const HomeScreen = () => {
    const [modalVisible, setModalVisible] = useState(true);
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <ContactTile
            data={item.image}
            name={item.name}
            subname={item.message}
            rightname={item.lastseen}
            onPress={() => navigation.navigate('Chat Screen', { name: item.name, lastseen: item.lastseen })}
        />
    );


    return (
        <View>

            <StatusBar backgroundColor="rgba(0,0,0,0.2)" translucent={true} />
            <View style={{ height: '100%' }}>
                {/* Header */}
                <View style={styles.headerContainer}>
                    <Ripple onPress={() => navigation.openDrawer()}>
                        <MaterialIcons style={styles.menuIcon} name="menu" size={30} color="#fff" />
                    </Ripple>
                    <Text style={styles.headerHeading}>ChatVia</Text>
                </View>

                {/* Content */}

                <FlatList
                    data={Frequent_Users}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                />
            </View>

            {/* NewButton */}
            <TouchableOpacity onPress={() => navigation.navigate('New conversation')} activeOpacity={0.8} style={styles.newIconContainer}>
                <MaterialIcons name="add" size={25} color="#fff" />
            </TouchableOpacity>


             {/* ADD ACCOUNT MODAL */}

    <View>
          <Modal
                isVisible={modalVisible}
                backdropOpacity={0.3}
                style={{margin:10}}
                animationIn={'fadeIn'}
                animationOut={'fadeOut'}
                >
      
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Choose Account</Text>
         
                            <ContactTile name="Alex Mathew" subname="alexmathew23@gmail.com" ></ContactTile>
                

                            <View style={{flexDirection:'row',padding:20,}}>
                                <Text style={{fontSize:16,color:'grey'}} onPress={() => {
                                        setModalVisible(false);
                                    }} >Add account</Text>
              
                            </View>
                        </View>
                    </View>
            </Modal>
    </View>

        </View >
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        height: 55 + StatusBarHeight,
        backgroundColor: mainStyle.colors.primary,
        alignItems: 'center',
        paddingTop: StatusBarHeight
    },
    menuIcon: {
        paddingLeft: 15,
        paddingRight: 20,
        paddingVertical: 10,
    },
    headerHeading: {
        color: "#fff",
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10
    },
    newIconContainer: {
        position: 'absolute',
        bottom: 15,
        right: 15,
        width: 55,
        height: 55,
        borderRadius: 55 / 2,
        elevation: 10,
        backgroundColor: mainStyle.colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
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
})

export default HomeScreen;