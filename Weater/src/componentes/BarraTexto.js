import React from 'react';
import {View, StyleSheet, TouchableOpacity   } from 'react-native';
import Texto from './Texto.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';



export default function BarraTexto({ }){
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Texto texto='Today' negrito='bold' tamanho={17} cor='#232323'/>
            <View style={{flexDirection: 'row',  alignItems:'center'}}>
                <TouchableOpacity onPress={() => navigation.navigate('Next 7 days')}>
                <Texto  texto='Next 7 days' negrito='bold' tamanho={17} cor='#747474'/>
                </TouchableOpacity >
                <Icon name="chevron-right" size= {17} color='#747474' style={{paddingLeft: 10}}/>
            </View>
            
        </View>
    ) 
}
const styles = StyleSheet.create({
    container:{
        marginTop:20,
        marginBottom:20,
        width: '85%',
        flexDirection: 'row',
        alignItems:'flex-start',
        justifyContent: 'space-between',
    }
})