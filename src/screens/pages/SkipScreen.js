
import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
 Image,
} from 'react-native';

const image = { uri: "https://thumbs.dreamstime.com/b/young-millennial-holding-smart-phone-flat-editable-vector-illustration-clip-art-92027390.jpg" };
const SkipScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:'white'}}>
      
      <View style={{backgroundColor:'white',}}>
      <Text style={{fontWeight:"bold",marginLeft:35,marginTop:20}}>Find your friends</Text>
      <Text style={styles.text}>Allow ChatVia to access your contacts so that 
      {'\n'}
      you can find your friends faster.
      </Text>
      </View>
     
      <Image source={image} style={styles.image}>
        </Image>




       
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
   
  },
  text:{
   
    marginLeft:35,
    margin:16
    
  },




});
export default SkipScreen;