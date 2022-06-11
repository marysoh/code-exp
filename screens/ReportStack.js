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
import ReportScreen from './ReportScreen';
import ReportNoTemplateScreen from "./ReportNoTemplateScreen";

const InnerStack = createStackNavigator();

export default function ReportStack(){
  return(
    <InnerStack.Navigator>
      <InnerStack.Screen 
      name="Report" 
      component = {ReportScreen} 
      options={{
        title: "Report",
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
      <InnerStack.Screen name="Report No Template" 
      component = {ReportNoTemplateScreen}/>
    </InnerStack.Navigator>
  )
}
