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
import React, { useEffect, useState } from "react";
import { Ionicons } from '@expo/vector-icons'; 
import ViewReportScreen from './ViewReportScreen';

import firebase from 'firebase/compat/app';
import { db } from "../App";

//const db = SQLite.openDatabase("notes.db");
//will look for this db in the phone, if dont have it will create it

export default function PendingScreen({ navigation, route }) {

    function addTemplateReport() {
      navigation.navigate("Report Template");
    }

    function addNoTemplateReport() {
        navigation.navigate("Report No Template");
      }

    function viewReport(){
        navigation.navigate("View Report");
    }

    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    const pendings = useState([]);

    useEffect(() => {
      const getPendingFromFirebase = [];
      const subscriber = db
        .collection("pending")
        .onSnapshot((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            getPendingFromFirebase.push({
              ...doc.data(),
              key: doc.id,
            })
          })
          console.log(getPendingFromFirebase);
          setNotes(getPendingFromFirebase);
          setLoading(false);
        })
      
      return () => subscriber();
    }, [])

    
    // useEffect(()=> 
    // {
    //     if(route.params?.title){
    //         if(route.params.template)
    //         {   const {title, ddmmyyyy, template, incident, servicemen, location, description, currentStatus, actions, verbalReport, higherHq, gsoc,aimsis, officer} = route.params;
            
    //             const newNote={
    //                 title: title,
    //                 date: ddmmyyyy,
    //                 template: template,
    //                 incident: incident,
    //                 servicemen: servicemen,
    //                 location: location,
    //                 description: description,
    //                 currentStatus: currentStatus,
    //                 actions: actions,
    //                 verbalReport: verbalReport,
    //                 higherHq: higherHq,
    //                 gsoc: gsoc,
    //                 aimsis:aimsis,
    //                 officer: officer,
    //                 status: 'pending',
    //                 id: notes.length.toString(),
    //             };
    //             setNotes([...notes, newNote]);
    //         }
    //         else{
    //             const {title, date, template, reportText} = route.params;
    //             const newNote={
    //                 title: title,
    //                 date: date,
    //                 template: template,
    //                 reportText: reportText,
    //                 status: 'pending',
    //                 id: notes.length.toString(),
    //             };
    //             setNotes([...notes, newNote]);
    //         }
            
    //     }
    // }, [route.params?.title])

    //This adds the new note button in header
    useEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity
            onPress={addTemplateReport}
          >
            <Ionicons name="document-text-outline" size={28} color="black" style={{marginRight:12}} />
          </TouchableOpacity>
        ),
      });
    });

    useEffect(() => {
        navigation.setOptions({
          headerLeft: () => (
            <TouchableOpacity
              onPress={addNoTemplateReport}
            >
              <Ionicons name="document-outline" size={28} color="black" style={{marginLeft: 12}}/>
            </TouchableOpacity>
          ),
        });
      });
 
    //makes the tabs menu
    function renderItem({item}){
      return(
        <View 
        style={{
          padding:10, 
          borderBottomColor: 'grey', 
          borderBottomWidth:2}}>
          <TouchableOpacity onPress={()=>{
              if(item.template){
                  navigation.navigate("View Report", {title: item.title, date: item.date, template: item.template, status: item.status, incident: item.incident,
                    servicemen: item.servicemen,
                    location: item.location,
                    description: item.description,
                    currentStatus: item.currentStatus,
                    actions: item.actions,
                    verbalReport: item.verbalReport,
                    higherHq: item.higherHq,
                    gsoc: item.gsoc,
                    aimsis: item.aimsis,
                    officer: item.officer,});
              }
              else{
                navigation.navigate("View Report", {title: item.title, date: item.date, template: item.template, reportText: item.reportText, status: item.status});
              }
                
                }}>
              <Text style={{fontSize: 10, textAlign: 'left', }}>{item.date}</Text>
              <Text style={{fontSize:16, textAlign: 'left', marginLeft: 20, padding: 5}}>{item.title}</Text>
              </TouchableOpacity>
        </View>
        
      )
    }

    function refreshPage() {
      window.location.reload(false);
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={notes}
          renderItem={renderItem}
          style={{ width: "100%" }}
        />
      </View>
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
