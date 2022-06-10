import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import PendingOuterStack from "./screens/PendingOuterStack";
import PendingScreen from "./screens/PendingScreen";
import PendingStack from "./screens/PendingStack";
import AcceptedScreen from "./screens/AcceptedScreen";
import DeclinedScreen from "./screens/DeclinedScreen";
import AcceptedOuterStack from "./screens/AcceptedOuterStack";
import DeclinedOuterStack from "./screens/DeclinedOuterStack";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Pending Main" component={PendingOuterStack} screenOptions={{ headerShown: false, title: '', }}/>
        <Tab.Screen name="Accepted Main" component={AcceptedOuterStack} screenOptions={{ headerShown: false, title: '', }}/>
        <Tab.Screen name="Declined Main" component={DeclinedOuterStack} screenOptions={{ headerShown: false, title: '', }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF6EC",
    alignItems: "center",
    justifyContent: "center",
  },
});
