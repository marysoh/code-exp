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
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
                tabBarInactiveBackgroundColor: "#949ba0",
                tabBarActiveBackgroundColor: "#686D71",
                tabBarInactiveTintColor: "#000000",
                tabBarActiveTintColor: "#ffffff",
                tabBarIconStyle: { marginTop: 4},
                tabBarLabelStyle: { fontSize: 13, color: '#f8ca12', paddingBottom: 3},
                tabBarStyle: {height: 55, position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 4, borderTopWidth: 0},
                style: { borderColor: '#011f3b' },
                headerShown: false,
                unmountOnBlur: true,
            }}>
        <Tab.Screen name="Pending Main" component={PendingOuterStack} options={{ headerShown: false, title: '', tabBarLabel: 'Pending', tabBarLabelStyle:{fontSize:14}, tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="pending-actions" size={24} color={color} />), 
          }}/>
        <Tab.Screen name="Accepted Main" component={AcceptedOuterStack} options={{ headerShown: false, title: '', tabBarLabel: 'Accepted', tabBarLabelStyle:{fontSize:14}, tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="sticker-check-outline" size={24} color={color} />)
        }}/>
        <Tab.Screen name="Declined Main" component={DeclinedOuterStack} options={{ headerShown: false, title: '', tabBarLabel: 'Declined', tabBarLabelStyle:{fontSize:14}, tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="sticker-remove-outline" size={24} color={color} />
        )}}/>
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

  icon:{

  }
});
