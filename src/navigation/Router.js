import React from 'react'
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigatior } from "@react-navigation/stack";
import DestinationSearch from "../screens/DestinationSearch";
import GuestsScreen from "../screens/Guests";



const Stack = createStackNavigatior();


const Router = (props) => {
    return (
       <NavigationContainer>
           <Stack.Navigator >
               <Stack.Screen 
                     name={"Destination Search"}
                     component={DestinationSearch}
                     options={{
                         title: "Search your destination"
                     }}
                />

                {/* <Stack.Screen 
                     name={"Guests"}
                     component={GuestsScreen}
                     options={{
                         title: "How many poeple?"
                     }}
                /> */}
           </Stack.Navigator>
       </NavigationContainer>
    )
}

export default Router;
