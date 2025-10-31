import Panel from "@/components/panel";
import styles from "@/theme";
import { View } from "react-native";


export default function PanelRow () {

    return (

        <View style={styles.panelRowContainer}>
            <Panel/>
            <Panel/>
        </View>
    )
}