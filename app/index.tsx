import Greetings from "@/components/greetings";
import PanelGrid from "@/components/panelGrid";
import SearchBar from "@/components/searchBar";
import styles from "@/theme";
import React from "react";
import { Text, View } from "react-native";

export default function Index() {

      const [nombre, setNombre] = React.useState("");

  return (
    <View
      style={styles.mainContainer}>
      <Greetings name="Fernando" message="How can I help you today"/>
      <PanelGrid/>
      <SearchBar nombre={nombre} setNombre={setNombre}/>
      <Text>{nombre}</Text>
    </View>
  );
}
