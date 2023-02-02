import React from 'react';
import {View,StyleSheet,Text} from 'react-native';


export default function Texto(props){


    return(
        <View>
            <Text style={[styles.text,{fontWeight: props.negrito, fontSize: props.tamanho, color:props.cor}]}>{props.texto}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontFamily: 'Roboto',
    }
})