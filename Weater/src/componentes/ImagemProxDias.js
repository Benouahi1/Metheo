import React from 'react';
import {View, StyleSheet,Image} from 'react-native';
import Texto from './Texto.js';


export default function IconeProxDias(props){
    
    return (
        <View style={styles.container}>
            <Image source={{uri:props.imgTempo}} style={{width:50, height:50}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 50 ,
        alignItems: 'flex-start',
        justifyContent: 'center',
    }
})