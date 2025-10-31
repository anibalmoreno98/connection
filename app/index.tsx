import Greetings from "@/components/greetings";
import PanelGrid from "@/components/panelGrid";
import SearchBar from "@/components/searchBar";
import styles from "@/theme";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.mainContainer}>
      <Greetings name="Fernando" message="How can I help you today"/>
      <PanelGrid/>
      <SearchBar/>
    </View>
  );
}
