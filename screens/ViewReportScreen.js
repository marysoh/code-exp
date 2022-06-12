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

export default function ViewReportScreen({ navigation, route }) {
  function withTemplate() {
    const {
      incident,
      servicemen,
      unitCompany,
      location,
      description,
      injury,
      actions,
      verbalReport,
      writtenReport,
      reportedTime,
      officer,
    } = route.params;
    return (
      <View>
        <Text style={styles.text}>Type of Incident: </Text>
        <Text style={styles.content}> {incident}</Text>
        <Text style={styles.text}>Servicemen Involved: </Text>
        <Text style={styles.content}>{servicemen} </Text>
        <Text style={styles.text}>Serviceman Unit and Company: </Text>
        <Text style={styles.content}>{unitCompany} </Text>
        <Text style={styles.text}>Location of Incident: </Text>
        <Text style={styles.content}>{location} </Text>
        <Text style={styles.text}>Brief Description of Incidents: </Text>
        <Text style={styles.content}>{description} </Text>
        <Text style={styles.text}>Injury/Damages: </Text>
        <Text style={styles.content}>{injury} </Text>
        <Text style={styles.text}>Follow-up Actions: </Text>
        <Text style={styles.content}>{actions} </Text>
        <Text style={styles.text}>Date/Time of Verbal Report to GSOC: </Text>
        <Text style={styles.content}>{verbalReport} </Text>
        <Text style={styles.text}>
          Date/Time of Written Report or submission of eSASH to GSOC:{" "}
        </Text>
        <Text style={styles.content}>{writtenReport} </Text>
        <Text style={styles.text}>Date/Time reported to DIV/HQ Armr: </Text>
        <Text style={styles.content}>{reportedTime} </Text>
        <Text style={styles.text}>Unit Reporting Officer: </Text>
        <Text style={styles.content}>{officer} </Text>
      </View>
    );
  }

  function withoutTemplate() {
    return (
      <View>
        <Text style={styles.text}>Report: </Text>
        <Text style={styles.content}>{route.params.reportText} </Text>
      </View>
    );
  }

  function goToFormat() {
    console.log("yes");
    console.log(route.params);
    if (route.params.template === true) {
      console.log("hi");
      return withTemplate();
    } else {
      console.log("bye");
      return withoutTemplate();
    }
  }

  function remarks() {
    if (route.params.status !== "pending") {
      return (
        <View>
          <Text style={styles.text}>Remarks:</Text>
          <Text style={styles.content}>{route.params.remarks}</Text>
        </View>
      );
    } else {
      return (
        <View>
          <Text
            style={{ fontWeight: "bold", padding: 30, textAlign: "center", fontSize:20, }}
          >
            Pending Approval
          </Text>
        </View>
      );
    }
  }

  return (
    <ScrollView style={styles.container}>
      {console.log(route)}
      {console.log(route.params.date)}
      <Text style={styles.text}>Title: </Text>
      <Text style={styles.content}>{route.params.title} </Text>
      <Text style={styles.text}>Date and Time of Incident DTG: </Text>
      <Text style={styles.content}>{route.params.date} </Text>
      {goToFormat()}
      {remarks()}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize:18,
    fontWeight: "bold",
    padding: 20,
  },

  content: {
    fontSize:15,
    marginLeft: 40,
  },

  container: {
    marginTop: 30,
    marginBottom: 50,
  },

  buttonContainer:{
    alignItems: 'center',
  },
  button:{
    margin:10,
    padding:10,
    backgroundColor: '#A0B9BF',
    width: '50%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
  },

  buttonText:{
    textAlign:'center',
    fontSize: 16,
  }
});
