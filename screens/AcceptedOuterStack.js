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
import AcceptedStack from "./AcceptedStack";

const Stack = createStackNavigator();

export default function AcceptedOuterStack(){
  return(
      <Stack.Navigator mode="modal" headerMode="none">
        <Stack.Screen
          name="Accepted Stack" component={AcceptedStack}
            options={{headerShown: false}}
        />
        <Stack.Screen name="View Report2" component={ViewReportScreen}/>
      </Stack.Navigator>
    
  )
}