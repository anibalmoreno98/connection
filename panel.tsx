import { FontAwesome5 } from '@expo/vector-icons';
import { Text, View } from "react-native";
import styles from "./theme";


export default function Panel (){
    
    return (
        <View style={styles.panelContainer}>
            <FontAwesome5 name="file-alt" size={24} color="black"/>
            <Text>Edit</Text>
            <Text numberOfLines={1}>Sign, add text, mark, lorem ipsumMMMMMMMMMMMMMMMMMMMMMMMMMMMMM</Text>
        </View>
    );
}