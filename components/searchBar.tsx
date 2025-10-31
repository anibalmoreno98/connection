import styles from '@/theme';
import { FontAwesome5 } from '@expo/vector-icons';
import { TextInput, View } from "react-native";


export default function SearchBar (){

    return (
        <View style={styles.searchBarContainer}>
            <FontAwesome5 name="search" size={24} color="black" />
            <TextInput
                style={styles.searchBarInput}
                placeholder="Escribe aquí"
            />
            <FontAwesome5 name="question" size={24} color="black" />
        </View>
    );
}
