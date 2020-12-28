/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Entype from 'react-native-vector-icons/Entypo';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import HomeScreen from "./src/screens/Home";
import SearchResultsPage from "./src/screens/SearchResults";
import DestionationSearchScreen from "./src/screens/DestinationSearch";
import GuestsScreen from "./src/screens/Guests";

import Post from "./src/components/Post";

import feed from "./assets/data/feed";

const post1 = feed[0];
const post2 = feed[1];


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        {/* <Post  post={post2}/> */}
        {/* <SearchResultsPage /> */}
        {/* <DestionationSearchScreen /> */}
        <GuestsScreen />
      </SafeAreaView>
    </>
  );
};



export default App;
