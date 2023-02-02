import React from 'react';
import {View, StyleSheet} from 'react-native';
import Texto from './Texto.js';

export default function Data(props){
    return(
        <View style={styles.container}>
            <View style ={{flexDirection: 'row', alignItems: 'center'}}>
            <Texto texto={props.dia} negrito='bold' tamanho={props.tam1} cor ={props.cor1}/>
            <Texto texto={props.data} negrito='normal' tamanho={props.tam2} cor={props.cor2}/>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
   container:{
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',

   },

})