import styles from "@/theme";
import { Text } from "react-native";

interface GreetingsProps{
    name: string;
    message:string
}

export default function Greetings ({name, message}:GreetingsProps){

    return (
        <Text style={styles.bigText}>Hi {name} {"/n"}
            <Text style={styles.darkColor}>{message}</Text>
        </Text>
    );
}