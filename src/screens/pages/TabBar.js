
import React,{useState} from 'react';
import { Dimensions } from 'react-native';
import {StyleSheet,View,Text,SafeAreaView,} from 'react-native';
import Tab from '../pages/Tab';

const {width} = Dimensions.get('screen')
const TabBar =  ({state,navigation}) => {
    
    const [selected, setSelected] = useState('Skip')
  const { routes } = state;
  const renderColor = currentTab => (currentTab === selected ? '#000000' : '#666666');


  const handlePress = (activeTab,index) =>{
      setSelected(activeTab);

      if(state.index !== index){
        navigation.navigate(activeTab)

      }
      console.log(state.index);
  };
  
  
  
  
  return (
    
      <View style={styles.wrapper}>
          <View style={styles.container}>
                {routes.map((route,index) => (
                    <Tab
                        tab={route}
                     onPress={ () => handlePress(route.name)} 
                     color={renderColor(route.name)}
                     key={route.key}
                    />
                 )) }


          </View>
          </View>

  );
}

const styles = StyleSheet.create({

    wrapper:{
        position:'absolute',
        bottom:1,
        width,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#E8E8E8',
        height:40,
        elevation:5
        
    },
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:5,
        height:40,
        width:250,
        alignSelf:'center',
        
         backgroundColor:'#E8E8E8',
        

    },

});
export default TabBar;