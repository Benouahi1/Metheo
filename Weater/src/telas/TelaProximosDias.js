import React from 'react';
import {View, StyleSheet} from 'react-native';
import Texto from '../componentes/Texto.js';
import BarraTextoTela2 from '../componentes/BarraTextoTela2.js';
import Next7days from '../componentes/next7days.js';



export default function TelaProximosDias() {
   const time = 1662904800 * 1000;
   const objDate = new Date(time);
   const humanDateFormat = objDate.toLocaleString();

   const time2 = 1662991200 * 1000;
   const objDate2 = new Date(time2);
   const humanDateFormat2 = objDate2.toLocaleString();




    
    return (
        <View style = {styles.container}>
            <View style={styles.div1}>
            <BarraTextoTela2/>
            </View>
            <View style={styles.div2}>
            <Texto texto='Next 7 days' negrito='bold' tamanho={20} cor='#D6E3FF'/>
            </View>
            <View style = {styles.div3}>
             <Next7days/>
            </View>
        </View>
    )
}



const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#427BFF',
        alignItems: 'center'

    },
    div1: {
        width: '85%',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        marginTop: 40,
        height: '12%'
       
    },div2: {
        width: '82%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingTop: 14,
        height: '8%'
       
    },
    div3: {
        width: '87%',
        alignItems: 'flex-start',
        height: '10%',
        paddingLeft: 5
    }
    
})