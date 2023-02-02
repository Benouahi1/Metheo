
import React, { useState,useEffect } from 'react'
import LinhaDia from '../componentes/LinhaDia.js';
const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
 
import api2,{api} from '../services/apiDaily'

function GetLinha (props){
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
        const date = ` / ${day} ${months[month]}`
        return(date);
    }
    


 
    return(
        <LinhaDia x = {2} imgTempo = {`http://openweathermap.org/img/wn/${data.list ? data.list[props.x].weather[0].icon :null}@4x.png` } dia={unixToWeekday(data.list ? data.list[props.x].dt:null)} data={unixToDate(data.list ? data.list[props.x].dt:null)} tprin={Math.round(data.list ? data.list[props.x].temp.max:null)+'º'} tsec={Math.round(data.list ? data.list[props.x].temp.min:null)+'º'} t1={21} t2={16} c1='#E4EDFF' c2 ='#9EBBFF'  />
        
    )

    }




export default function NextDays() {
 return (
   <>
        <GetLinha x={1}/>
        <GetLinha x={2}/>
        <GetLinha x={3}/>
        <GetLinha x={4}/>
        <GetLinha x={5}/>
        <GetLinha x={6}/>
        <GetLinha x={7}/>
   </>
  );
}