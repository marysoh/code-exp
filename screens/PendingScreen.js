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
import { Entypo } from "@expo/vector-icons";
import ViewReportScreen from './ViewReportScreen';

//const db = SQLite.openDatabase("notes.db");
//will look for this db in the phone, if dont have it will create it

export default function PendingScreen({ navigation, route }) {
    //create state variable for our notes
    const [notes, setNotes] = useState([]);
    
    // function refreshNotes(){
    //     console.log("refreshing");
    //     db.transaction((tx)=>{
    //         tx.executeSql(
    //             "SELECT * FROM notes",
    //             null,
    //             (txObj, {rows:{_array}}) => setNotes(_array),
    //             (txObj, error) => console.log("Error", error),
    //         )
    //     });
    // }

    // useEffect(() => {
    //     if(route.params?.text){
    //         db.transaction((tx) => {
    //             tx.executeSql(
    //                 "INSERT INTO notes (done, title) VALUES (0, ?)", [route.params.text]
    //             )
    //         }), null, refreshNotes
    //     }
    // })
    // useEffect(()=> {
    //     db.transaction((tx) => {
    //         tx.executeSql(
    //             `CREATE TABLE IF NOT EXISTS
    //             notes
    //             (id INTEGER PRIMARY KEY AUTOINCREMENT,
    //             title TEXT,
    //             done INT
    //             );`
    //         );
    //     }, null, refreshNotes)
    // }, []);
    // first param is if table doesnt exist, 2nd is if it fails, third is if it passes

    function addReport() {
      navigation.navigate("Add Report");
    }

    function viewReport(){
        navigation.navigate("View Report");
    }

    useEffect(()=> 
    {
        // console.log("helloooo");
        if(route.params?.title){
            
            const {title, date} = route.params;
            
            const newNote={
                title: title,
                date: date,
                id: notes.length.toString(),
            };
            setNotes([...notes, newNote]);
        }
        // console.log(notes);
    }, [route.params?.title])

    //This adds the new note button in header
    useEffect(() => {
      console.log("This effect happened");
      navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity
            onPress={addReport}
          >
            <Entypo
              name="new-message"
              size={24}
              color="black"
              style={{ marginRight: 12 }}
            />
          </TouchableOpacity>
        ),
      });
    });
  
    function renderItem({item}){
      return(
        <View 
        style={{
          padding:10, 
          borderBottomColor: 'grey', 
          borderBottomWidth:2}}>
          {/* {console.log(item.title)} */}
          <TouchableOpacity onPress={viewReport}>
              <Text style={{fontSize: 10, textAlign: 'left', }}>{item.date}</Text>
              <Text style={{fontSize:16, textAlign: 'left', marginLeft: 20, padding: 5}}>{item.title}</Text>
              </TouchableOpacity>
        </View>
        
      )
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