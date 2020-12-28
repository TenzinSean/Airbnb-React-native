import React from "react";
import { View, Text, Pressable } from "react-native";

import styles from "./styles.js"


const GuestsScreen = (props) => {
    return (
        <View style={{ 
            flexDirection: "row", 
            justifyContent: 'space-between',
            paddingVertical: 20,
            marginHorizontal: 20,
            borderBottomWidth:1,
            borderColor: "#fff",
            }}>
            {/* Row 1: Adults */}
            <View>
                <Text style={{ fontWeight: "bold"}} >Adults</Text>
                <Text style={{ color: "#8d8d8d"}}>Ages 13 or above</Text>
            </View>
            <View style={{ flexDirection: "row"}}>
                <Pressable 
                    onPress={() => console.warn("- clicked")}
                    style={styles.button}
                >
                    <Text style={{marginHorizontal: 20, color: "#474747"}}>-</Text>
                </Pressable>

                <Text style={{marginHorizontal: 20, fontSize: 16}}>0</Text>
                <Pressable 
                    onPress={() => console.warn("+ clicked")}
                    style={styles.button}
                >
                    <Text style={{fontSize: 20, color:"#474747"}}>+</Text>
                </Pressable>
                </View>
            </View>
    );
};

export default GuestsScreen;