import React from 'react';
import {View, StyleSheet} from 'react-native';
import Temperatura from './Temperatura';
import Data from './Data';
import IconeProxDias from './ImagemProxDias';



export default function LinhaDia(props){
    



    return (
        <View style = {styles.container}>
            <View style={styles.div2}>
                 <View style={styles.div1}><IconeProxDias imgTempo = {props.imgTempo}/></View>
                 <View style={styles.div2}><Data dia={props.dia} data={props.data} tam1={16} tam2={14} cor1='#E6EEFF' cor2='#A0BDFF'/></View>
                 <View style= {styles.div3}><Temperatura principal= {props.tprin} secundaria ={props.tsec} tam1={props.t1} tam2= {props.t2}  cor1= {props.c1} cor2={props.c2}/></View>
            </View>
           
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '68%',
      justifyContent: 'flex-start',
      paddingTop: 15,
      paddingBottom: 15,
      
      //backgroundColor: '#427BFF',
    },
    div1:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '25%',
    },
    div2:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '83%',
    },
    div3: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '68%',
    }
  });