import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import PendingScreen from './PendingScreen';

const InnerStack = createStackNavigator();

export default function PendingStack(){
  return(
    <InnerStack.Navigator>
      <InnerStack.Screen 
      name="Pending" 
      component = {PendingScreen} 
      options={{
        title: "NS app",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 24,
        },
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#B7CADB",
          height: 75,
          borderBottomColor: "grey",
          borderBottomWidth: 2,
        },
      }}/>
    </InnerStack.Navigator>
  )
}
