import React from 'react';
import {View, StyleSheet,Image} from 'react-native';
import Texto from './Texto.js';


export default function CardPrevisao(props){  
    return (
        <View style={[styles.container ,{backgroundColor: props.status === 1 ? "#E2DEDD" : "#427BFF" }]}>
            <Texto texto={props.txtHora}  size={30} cor={props.corH}  negrito='row'/>
            <Image source={{uri: props.imgTempo}} style={{width:30, height:30}}/>
            <Texto texto={props.txtTemperatura} size={15} cor={props.corT} negrito='bold' />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: 50,
        marginRight:15,
        height: '100%',  
        border: '1px solid #0000002c',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        padding: 5,
        justifyContent: 'space-evenly',
    },
    CardActive:{
        bgColor:"#427BFF", 
        corH:'#ffff',
        corT:'#ffff',
      
    },
    CardDefault:{
        bgColor:"#E2DEDD"
    }
})