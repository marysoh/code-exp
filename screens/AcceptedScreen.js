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
        [{title:"Absence of Serviceman",
        date: "12/03/2022",
        template: false,
        status:'accepted',
        remarks: 'NIL',
        reportText: "Full report",
},]);


    function renderItem({item}){
        return(
        <View 
        style={{
            padding:10, 
            borderBottomColor: 'grey', 
            borderBottomWidth:2}}>
            <TouchableOpacity onPress={()=>{
                if(item.template){
                    navigation.navigate("View Report2", {title: item.title, date: item.date, template: item.template, status: item.status, remarks: item.remarks});
                }
                else{
                  navigation.navigate("View Report2", {title: item.title, date: item.date, template: item.template, reportText: item.reportText, status: item.status, remarks: item.remarks});
                }
                }}>
                <Text style={{fontSize: 12, fontWeight: 'bold', textAlign: 'left', }}>{item.date}</Text>
                <Text style={{fontSize:18, textAlign: 'left', marginLeft: 20, padding: 5}}>{item.title}</Text>
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
