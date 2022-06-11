import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import * as SQLite from "expo-sqlite";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { Entypo } from "@expo/vector-icons";

export default function ViewReportScreen({navigation, route}){
    return(
    <ScrollView>
        {console.log(route)}
        {console.log(route.params.date)}
        <Text style={styles.text}>Title: </Text>
        <Text style={styles.content}>{route.params.title} </Text>
        <Text style={styles.text}>Date of Incident: </Text>
        <Text style={styles.content}>{route.params.date} </Text>
        <Text style={styles.text}>Type of Incident: </Text>
        <Text style={styles.content}>placeholder </Text>
        <Text style={styles.text}>DTG: </Text>
        <Text style={styles.content}>placeholder </Text>
        <Text style={styles.text}>Servicemen Involved: </Text>
        <Text style={styles.content}>placeholder </Text>
        <Text style={styles.text}>Serviceman Unit and Company: </Text>
        <Text style={styles.content}>placeholder </Text>
        <Text style={styles.text}>Location of Incident: </Text>
        <Text style={styles.content}>placeholder </Text>
        <Text style={styles.text}>Brief Description of Incidents: </Text>
        <Text style={styles.content}>placeholder </Text>
        <Text style={styles.text}>Injury/Damages: </Text>
        <Text style={styles.content}>placeholder </Text>
        <Text style={styles.text}>Follow-up Actions: </Text>
        <Text style={styles.content}>placeholder </Text>
        <Text style={styles.text}>Date/Time of Verbal Report to GSOC: </Text>
        <Text style={styles.content}>placeholder </Text>
        <Text style={styles.text}>Date/Time of Written Report or submission of eSASH to GSOC: </Text>
        <Text style={styles.content}>placeholder </Text>
        <Text style={styles.text}>Date/Time reported to  DIV/HQ Armr: </Text>
        <Text style={styles.content}>placeholder </Text>
        <Text style={styles.text}>Unit Reporting Officer: </Text>
        <Text style={styles.content}>placeholder </Text>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        padding: 20,
    },

    content:{
        marginLeft:40,
    }
})