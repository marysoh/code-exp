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





export default function AcceptedScreen({navigation}){
    const [notes, setNotes] = useState(
        [{title:"incident",
        date: "12/03/2022",
},]);
    function viewReport({item}){
        
        console.log(item);
        
    }

    function renderItem({item}){
        return(
        <View 
        style={{
            padding:10, 
            borderBottomColor: 'grey', 
            borderBottomWidth:2}}>
            {console.log(item)}
            <TouchableOpacity onPress={()=>{
                console.log("hiii");
                console.log(item);
                navigation.navigate("View Report2", {title: item.title, date: item.date,});
                }}>
                <Text style={{fontSize: 10, textAlign: 'left', }}>{item.date}</Text>
                <Text style={{fontSize:16, textAlign: 'left', marginLeft: 20, padding: 5}}>{item.title}</Text>
                </TouchableOpacity>
        </View>
        
        )
    }
    return(
        
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
