import Greetings from "@/components/greetings";
import PanelGrid from "@/components/panelGrid";
import styles from "@/theme";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.mainContainer}>
      <Greetings name="Fernando" message="How can I help you today"/>
      <PanelGrid/>
    </View>
  );
}
