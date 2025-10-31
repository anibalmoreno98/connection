import styles from '@/theme';
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { TextInput, View } from "react-native";

interface SearchBarProps{
    nombre: string;
    setNombre: any;
}


export default function SearchBar ({nombre, setNombre}:SearchBarProps){


    return (
        <View style={styles.searchBarContainer}>
            <FontAwesome5 name="search" size={24} color="black" />
            <TextInput style={styles.searchBarInput}
                    value={nombre}
                    onChangeText={setNombre}
                placeholder="Escribe aquí"
            />
            <FontAwesome5 name="question" size={24} color="black" />
        </View>
    );
}
