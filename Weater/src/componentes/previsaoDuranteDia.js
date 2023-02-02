import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView,TouchableOpacity } from "react-native";
import CardPrevisao from "./cardTempo";
import TempoHoje from '../componentes/TempoHoje.js';

var x = 0;


import api2, { api } from "../services/apiOneCall";




function GetCard(props) {
  function unixToHour(unix) {
    var timestamp = new Date(unix * 1000);
    var formatted = timestamp;
    var hours = formatted.getHours();
    return hours;
  }
  if (
    unixToHour(props.data.hourly ? props.data.hourly[x].dt : null) % 2 != 0 &&
    props.data.hourly
      ? props.data.hourly[x].dt
      : null != null
  ) {
    x++;
  }
    return (
      <TouchableOpacity onPress={props.status == 2 ? null : props.function}>
      <CardPrevisao
        status={props.status}
        txtHora= {props.id == 0 ? "Now" : unixToHour(props.data.hourly ? props.data.hourly[x + props.id].dt : null) + ":00"}
        corH={props.status == 2 ? "#f4f4f4" : "#141414a3"}
        corT={props.status == 2 ? "#ffffff" : "#141414"}
        txtTemperatura={props.id == 0 ? Math.round(props.data.current ? props.data.current.temp : null) +"º": Math.round(props.data.hourly ? props.data.hourly[x + props.id].temp : null) + "º"}
        imgTempo={`http://openweathermap.org/img/wn/${props.id == 0 ? props.data.current ? props.data.current.weather[0].icon : null : props.data.hourly? props.data.hourly[props.id + x].weather[0].icon
        : null}@2x.png`}
      />
    </TouchableOpacity>
    );

  }


export default function ContainerPrevisao(props) {
  const [data, setData] = useState({});
  const [activeCard, setActiveCard] = useState(0);
  const [url, setUrl] = useState(api);
  const [cards, setCards] = useState([
    { id: 0,  status: 2 },
    { id: 2,  status: 1 },
    { id: 4,  status: 1 },
    { id: 6,  status: 1 },
    { id: 8,  status: 1 },
    { id: 10, status: 1 },
    { id: 12, status: 1 },
    { id: 14, status: 1 },
    { id: 16, status: 1 },
    { id: 18, status: 1 },
    { id: 20, status: 1 },
    { id: 22, status: 1 },
  ]);

  const setActive = (index) =>{
    cards.forEach(card =>{
      card.status=1
    })
  setCards([...cards],cards[index].status=2)
  setActiveCard(index*2 + x)
    }

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



  return (
    <>
    <TempoHoje activeCard={activeCard}/> 
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {cards.map((card, index) => (
          <GetCard
            data={data}
            id={card.id}
            horario={card.horario}
            key={card.id}
            status={card.status}
            function={()=>{setActive(index)}}
          />
        ))}
      </ScrollView>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "85%",
    height: "11%",
  },
  ScrollView: {
    marginVertical: 0,
  },
  CardNow: {
    backgroundColor: "#427BFF",
  },
});
