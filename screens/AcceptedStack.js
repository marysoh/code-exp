import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import PendingScreen from './PendingScreen';
import AcceptedScreen from "./AcceptedScreen";

const InnerStack = createStackNavigator();

//Accepted Header
export default function AcceptedStack(){
  return(
    <InnerStack.Navigator>
      <InnerStack.Screen 
      name="Accepted" 
      component = {AcceptedScreen} 
      options={{
        title: "Accepted",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 24,
        },
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#A0B9BF",
          height: 90,
          borderBottomColor: "grey",
          borderBottomWidth: 2,
        },
      }}/>
    </InnerStack.Navigator>
  )
}