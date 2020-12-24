import React from "react";
import { 
    View, 
    Text, 
    ImageBackground ,
    Pressable,
} from "react-native";
import styles from "./styles.js"
import Fontisto from "react-native-vector-icons/Fontisto";


const HomeScreen = (props) => {
    return (
        <View>
            <Pressable
                style={styles.searchButton}
                onPress={() => console.warn("Explore Btn clicked")}
            >
                <Fontisto name="search" size={25} color={"#f15454"}/>
                <Text style={styles.searchButtonText}>Where are you going ?</Text>
             </Pressable>
            <ImageBackground 
                source={require('../../../assets/images/wallpaper.jpg')} 
                style={styles.image}
            >
               <Text style={styles.title}>
                   Airbnb 
               </Text>

               <Pressable
                style={styles.button}
                onPress={() => console.event("Explore Btn clicked")}
               >
                   <Text style={styles.buttonText}>Explore nearby stays</Text>
               </Pressable>
            </ImageBackground>
        </View>
    );
};

export default HomeScreen;