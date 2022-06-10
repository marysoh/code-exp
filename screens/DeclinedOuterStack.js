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
import React, { useEffect, useState } from "react";
import PendingStack from './PendingStack';
import PendingScreen from "./PendingScreen";
import ReportScreen from "./ReportScreen";
import ViewReportScreen from "./ViewReportScreen";
import DeclinedStack from "./DeclinedStack";

const Stack = createStackNavigator();

export default function DeclinedOuterStack(){
  return(
      <Stack.Navigator mode="modal" headerMode="none">
        <Stack.Screen
          name="Declined Stack" component={DeclinedStack}
            options={{headerShown: false}}
        />
        <Stack.Screen name="View Report3" component={ViewReportScreen}/>
      </Stack.Navigator>
    
  )
}