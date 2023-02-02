import React from 'react';
import {View, StyleSheet} from 'react-native';
import Texto from './Texto.js';

export default function Temperatura(props){
    return(
        <View style={styles.container}>
            <View style ={{flexDirection: 'row', alignItems: 'center'}}>
            <Texto texto={props.principal} negrito='normal' tamanho={props.tam1} cor ={props.cor1}/>
            <Texto texto=" / " negrito='normal' tamanho={18} cor ='#A0BDFF'/>
            <Texto texto={props.secundaria} negrito='normal' tamanho={props.tam2} cor={props.cor2}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
   container:{
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',

   },

})