import React from 'react';
import {View } from 'react-native';
import {Divider} from 'react-native-elements';

const DividerTile = () =>{
    return(
        <View style={{width:'100%',height:10}}>
            <Divider style={{backgroundColor:'#ececec',height: 1.5,marginBottom:5}}
            />
        </View>
    );
}

export default DividerTile;