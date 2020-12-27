// import React from 'react';
// import {StyleSheet, Text, View, Image} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';

// const ContactTile = ({data, name, subname, rightname, onPress}) => {
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={onPress}>
//         <View style={{flexDirection: 'row', marginVertical:10}}>
//           <View>
//             <Image style={styles.imageicon} source= {data} />
//           </View>

//           <View style={styles.insidecontainer}>
//             <Text style={styles.maintext}>{name}</Text>
//             <Text>{subname}</Text>
//           </View>

//           <View style={{width:"75%",textAlign:'right',alignItems:'center',justifyContent:'center'}}>
//             <Text style={styles.rightside}>{rightname}</Text>
//           </View>
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     backgroundColor: '#FFF',
//     width: '100%',
//     alignSelf: 'center',
//     flexDirection: 'row',
//   },
//   insidecontainer: {
//     flexDirection: 'column',
//     padding: 8,
//   },
//   imageicon: {
//     marginLeft: 10,
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor:'green'
//   },
//   rightside: {
//     textAlign: 'right',
//     marginTop: 10,
//     fontSize: 14,
//   },
//   maintext: {
//     fontSize: 16,
//   },
// });

// export default ContactTile;



import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import mainStyle from '../config/styles';

const ContactTile = ({data, name, subname, rightname,}) => {
  return (
    <View  style={{backgroundColor:"white", width:'100%', height: 70, flexDirection:'row'}}>
        <View style={styles.circle}>
            <Image style={styles.imageicon} source={data}/>
        </View>
        <View style={{flexDirection:'row',width:'82%', justifyContent:'space-between', backgroundColor:'white', paddingRight:20}}>
            <View style={styles.leftcontainer}>
                <Text style={styles.maintext}>{name}</Text>
                <Text style={{color:'grey'}}>{subname}</Text>
            </View>
            
            <View style={{justifyContent:'center'}}>
                <Text style={styles.right}>{rightname}</Text>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
  leftcontainer: {
    backgroundColor:'white',
    padding:5,
    paddingLeft:10,
    alignItems:'flex-start',
    justifyContent:'center',
  },
  imageicon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  right:{
    color:'grey',
    alignSelf:'center',
    
  },
  circle:{
    backgroundColor:mainStyle.colors.primary, 
    height:50, 
    width:50, 
    borderRadius :50/2,   
    alignSelf:'center',
    justifyContent:'flex-start',
    marginLeft:10
  },
});

export default ContactTile;



















