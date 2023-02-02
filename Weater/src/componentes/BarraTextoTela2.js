import React from 'react';
import {View, StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Localizacao from './Localizacao.js';
import { useNavigation } from '@react-navigation/native';

export default function BarraTextoTela2(){

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.div1}>
            <TouchableOpacity style={{width:50}}onPress={() => navigation.navigate('Weater')}>
                <Icon name="chevron-left" size= {15} color='#E6EEFF' style={{paddingLeft: 5}}/></TouchableOpacity>
             </View>
             <View style={styles.div2}>
                <Localizacao tam1={21} tam2={17} cor1='#F5F5F5' cor2='#DBE9FA'/>
            </View>
        </View>
    ) 
}
const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
    },
   div1:{
        flexDirection: 'row',  
        alignItems:'center', 
        justifyContent:'flex-start',
        width: '16%',
   },
   div2:{
    flexDirection: 'row',  
    justifyContent:'flex-start',

}
})