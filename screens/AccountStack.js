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
import LogInScreen from "./LogInScreen";
import SignUpScreen from "./SignUpScreen";

const Stack = createStackNavigator();

export default function AccountStack(){
  return(
      <Stack.Navigator mode="modal" headerMode="none">
        <Stack.Screen
          name="Log In Screen" component={LogInScreen}
            options={{headerShown: false}}
        />
        <Stack.Screen name="Sign Up Screen" component={SignUpScreen}
            options={{headerShown: false}}/>
      </Stack.Navigator>
    
  )
}