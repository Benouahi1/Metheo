import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import InformacoesHoje from "./informacoes.js";

import api2, { api } from "../services/apiOneCall";




export default function BlocoInformacoes(props) {
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

  const dataType  = props.type == 0 || props.type == 1  ? data.current: data.hourly[props.type];
  const dataTypeLoad  = props.type == 0 || props.type == 1  ? data.current: data.hourly;

  var vento = Math.round((dataTypeLoad ? dataType.wind_speed : null) * 3.6);
  var feels = Math.round(dataTypeLoad ? dataType.feels_like : null);
  var uvi = dataTypeLoad ? dataType.uvi : null;
  var pressure = dataTypeLoad ? dataType.pressure : null;
  return (
    <View style={styles.container}>
      <InformacoesHoje
        icone="wind"
        txtTipo="WIND"
        txtValor={vento + " Km/h"}
        borderLeft={0}
      />
      <InformacoesHoje
        icone="thermometer"
        txtTipo="FEELS LIKE"
        txtValor={feels + " º"}
        borderLeft={1}
      />
      <InformacoesHoje
        icone="sun"
        txtTipo="INDEX UV"
        txtValor={uvi}
        borderLeft={0}
      />
      <InformacoesHoje
        icone="activity"
        txtTipo="PRESSURE"
        txtValor={pressure + " mbar"}
        borderLeft={1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
});
