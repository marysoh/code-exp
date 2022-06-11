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
import ReportNoTemplateScreen from "./ReportNoTemplateScreen";

const Stack = createStackNavigator();

export default function PendingOuterStack(){
  return(
      <Stack.Navigator mode="modal" headerMode="none">
        <Stack.Screen
          name="Pending Stack" component={PendingStack}
            options={{headerShown: false}}
        />
        <Stack.Screen name="Report Template" component ={ReportScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Report No Template" component ={ReportNoTemplateScreen} options={{headerShown: false}}/>
        <Stack.Screen name="View Report" component={ViewReportScreen}/>
      </Stack.Navigator>
    
  )
}