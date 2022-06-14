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

//firebase imports
import firebase from "firebase/compat";
import 'firebase/compat/auth';

export default function SettingsScreen(){
   
    //need to grab data from firestore auth
    const [data, setData] = useState([{
        email: 'john@gmail.com',
        password: 'myPassword',
    }])

    const onLogOut = () => {
      firebase.auth().signOut();
    }

    function renderItem({item}){
        return(
          <View 
          style={{
            padding:10, 
            borderBottomColor: 'grey', 
            borderBottomWidth:2,
            flexDirection: 'row',
            width: '100%'}}>
            {/* {console.log(item.title)} */}
            <Text style={styles.text}>Email: </Text>
            <Text style={styles.text}>{item.email}</Text>
          </View>
          
        )
      }

    return(
        <View style={styles.container}>
            <View >
                <View>
                    <TouchableOpacity onPress= {()=> onLogOut()} style={styles.button}>
                        <Ionicons name="log-out-outline" size={24} color="black" />
                        <Text style={styles.buttonText}>Log out</Text>
                    </TouchableOpacity>    
                </View>
                <View>
                   <FlatList 
                data={data}
                renderItem={renderItem}
                style={{ width: "100%", marginTop: 10 }}/> 
                </View>
                
                    
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
    buttonText:{
        paddingLeft:30,
        marginLeft:10,
        fontSize: 20,
    },
    button:{
        marginTop: 120,
        padding:20,
        flexDirection: "row",
        margin:10,
        backgroundColor:'#BCD4DE',
        borderRadius: 50,
        borderStyle: 'solid',
        borderWidth:1,
        borderColor: 'grey',
    },
  });