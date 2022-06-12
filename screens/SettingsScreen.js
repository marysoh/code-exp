import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import * as SQLite from "expo-sqlite";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState, useContext } from "react";
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from "../components/context";

export default function SettingsScreen(){

    const {signOut}= useContext(AuthContext);

    return(
        <View style={styles.container}>
            <View >
                <TouchableOpacity onPress= {()=> {signOut()}} style={styles.button}>
                    <Ionicons name="log-out-outline" size={24} color="black" />
                    <Text style={styles.text}>Log out</Text>
                </TouchableOpacity>    
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FDF6EC",
      alignItems: "center",
      justifyContent: "center",
    },
    text:{
        marginLeft:10,
        fontSize: 20,
    },
    button:{
        margin:10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
  });