import React,{useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Texto from './Texto.js';
import{local} from '../services/localizacao'



export default function Localizacao(props){
    const[city,setCity] = useState();
    const[district,setDistrict] = useState();

    useEffect(() => {
        (async function () {
  await local().then((response) => response).then((data) => {
    setCity(data[0].city != null ? data[0].city: data[0].subregion);
    setDistrict(data[0].district != null ? data[0].district: data[0].city);
})

        })();
      }, []);


    return(
        <View style={styles.container}>
            <View style ={styles.textRow}>
            <Texto texto={district != undefined ? `${district}, ` : null} negrito='normal' tamanho={props.tam1} cor ={props.cor1}/>
            <Texto texto={city}negrito='normal' tamanho={props.tam2} cor={props.cor2}/>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
   container:{
    width: '85%',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: "2%",
    display:'flex',
   },
   textRow:{
    flexDirection: 'row', 
    alignItems: 'flex-end',
    flexWrap: 'wrap',
}

})