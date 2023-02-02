import React, { useState,useEffect } from 'react'
import { View,StyleSheet,Image } from 'react-native';
import Texto from './Texto.js';
const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

import api2, { api } from "../services/apiOneCall";



export default function StatusHoje(props) {

  function unixToWeekday(unix){
    var timestamp = new Date(unix*1000)
    var formatted = timestamp;
    var day = formatted.getDay();
    return(weekdays[day])}


function unixToDate(unix){
    var timestamp = new Date(unix*1000)
    var formatted = timestamp;
    var day = formatted.getDate();
    var month = formatted.getMonth();
    const date = `${day} ${months[month]}`
    return(date);
}


function unixToHours(unix){
    var timestamp = new Date(unix*1000)
    var formatted = timestamp;
    var hours = String(formatted.toLocaleTimeString());
    return(hours.slice(0,5))
}



const [data, setData] = useState({});
const [url, setUrl] = useState(api);
useEffect(() => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setData(data);
    });
}, [url]);
useEffect(() => {
  (async function () {
    setUrl(
      await api2()
        .then((response) => response)
        .then((data) => {
          return data;
        })
    );
  })();
}, []);



fetch(url).then(res => res.json()).then(data => {
    setData(data)
})


const dataTypeLoad= props.type == 0 || props.type == 1  ? data.current: data.hourly;
const dataType = props.type == 0 || props.type == 1  ? data.current: data.hourly[props.type];
var temperatura =  Math.round(dataTypeLoad? dataType.temp :null);
var tempo = dataTypeLoad ? dataType.weather[0].main : null;
var weatherICON = dataTypeLoad ? dataType.weather[0].icon :null;
var timestamp = dataTypeLoad ? dataType.dt : null;
const img = {uri: 'http://openweathermap.org/img/wn/'+ weatherICON +'@4x.png'}
// const img = {uri: 'https://ssl.gstatic.com/onebox/weather/48/'+weatherICON+'.png'}


 return (
   <View style={styles.container}>
    <View style={styles.divContainer}>
    <Image style={styles.imgWeatherDia} source={img}/>
    <Texto  texto={tempo} negrito="bold" tamanho={24} cor='#ffff'/>
   
    <Texto  texto={`${unixToWeekday(timestamp)}, ${unixToDate(timestamp)}`} negrito="bold" tamanho={13} cor='#8DB2FB'/>
    <Texto  texto={unixToHours(timestamp)} negrito="bold" tamanho={13} cor='#8DB2FB'/>
   </View>
   <View style={styles.divContainer}><Texto  texto={temperatura} negrito="bold" tamanho={80} cor='#ffff'/></View>  
   </View>
  );
}


const styles = StyleSheet.create({
  container: {
      position: 'absolute',
      top:0,
      width: '100%',
      height: '70%',
  },
  divContainer:{
    height:'50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent:'space-around',
  },
  imgWeatherDia:{
    width:100,
    height:100,
  }
  
})