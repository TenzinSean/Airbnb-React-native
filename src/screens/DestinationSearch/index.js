import React, {useState} from "react";
import { View, Text, TextInput, FlatList } from "react-native";
import Entype from 'react-native-vector-icons/Entypo';

import styles from "./styles.js";


import SearchResults from "../../../assets/data/search";


const DestinationSearch = (props) => {
    
    const [inputText, setInputText] = useState("");


    return (
        <View style={styles.container}>
           {/* Input component */}

           <TextInput 
            style={styles.textInput}
            placeholder="where are you going ?"
            value={inputText}
            onChangeText={setInputText}
           />

           {/* List of destination */}
           <FlatList 
                data={SearchResults}
                renderItem={({item}) => (
                    <View style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Entype name={"location-pin"} size={35}/>
                        </View>
                        <Text style={styles.locationText}>{item.description}</Text>
                    </View>
                )}
           />

        </View>
    );
};


export default DestinationSearch;

