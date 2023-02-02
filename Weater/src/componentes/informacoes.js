import React from 'react';
import {View, StyleSheet} from 'react-native';
import Texto from './Texto.js';
import Icon from 'react-native-vector-icons/Feather';



export default function InformacoesHoje(props){
    return (
        <View style={[styles.container,{backgroundColor:props.color,borderLeftWidth:props.borderLeft}]}> 
        <View><Icon name={props.icone} size= {30} color='#ffff'/></View>
        <View style={styles.infoContainer}>
        <Texto texto={props.txtTipo} negrito='row' tamanho={13} cor="#f0f8ffa6"/>
        <Texto texto={props.txtValor} negrito='bold' tamanho={13} cor="#ffff"/>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '50%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor:'#f0f8ff',
        borderLeftWidth : 1,
        borderLeftColor:'#f0f8ff',
        display:'flex',
        flexDirection: 'row',
        justifyContent:'space-evenly',
    },
    infoContainer:{
        marginLeft: 10, 
        width:'45%'}

})
