import React, { useRef, useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Localizacao from "../componentes/Localizacao.js";
import Icon from "react-native-vector-icons/Feather";
import ContainerPrevisao from "../componentes/previsaoDuranteDia.js";
import { captureRef } from "react-native-view-shot";
import * as Sharing from "expo-sharing";

import { useNavigation } from '@react-navigation/native';

import Update from "../services/updateScreen";

export default function TelaTempoHoje(props) {
  const [key, setKey] = useState()
  Update(setKey)
  const viewRef = useRef();
  const navigation = useNavigation();

  const shareWeather = async () => {
    try {
      const uri = await captureRef(viewRef, {
        result: "tmpfile",
        quality: 0.7,
        format: "png",
      });
      await Sharing.shareAsync(uri);
    } catch (err) {
      console.error(err);
    }
  };




  return (
    <View style={styles.container} ref={viewRef} key={key}>
      <View style={styles.iconsTop}>
        <Icon name="menu" size={30} color="#747474" onPress={()=>navigation.openDrawer()}/>
      
      </View>
      <Localizacao tam1={28} tam2={20} cor1="#121212" cor2="#323232" />
      <ContainerPrevisao />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    justifyContent: "center",
  },
  iconsTop: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-start",
    width: "85%",
    paddingTop: 50,
    paddingBottom: 10,
  },
});


