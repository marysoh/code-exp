import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import * as SQLite from "expo-sqlite";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { Feather } from '@expo/vector-icons';


export default function LogInScreen({navigation}){
    const [data, setData] = useState({
        email: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });

    const textInputChange = (val) => {
        if(val.length !=0){
            setData({...data, email : val, check_textInputChange: true,});
        }
        else{
            setData({...data, email : val, check_textInputChange: true,});
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val,
        })
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val,
        })
    }

    const updateSecureTextEntry = () =>{
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        });
        // console.log(data.secureTextEntry);
    }

    const updateConfirmSecureTextEntry = () =>{
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry,
        });
        // console.log(data.confirm_secureTextEntry);
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
              <Text style= {styles.headerText}>Sign Up</Text>  
            </View>
            <View style={styles.footer}>
                <View>
                    <Text style={styles.text}>Enter email:</Text>
                    <View style={styles.actions}>
                        <Feather name="user" size={24} color="black" />
                        <TextInput placeholder="Your email" autoCapitalize="none" style={styles.textInput} onChangeText={(val) => textInputChange(val)}/>

                    </View>
                </View>
                <View>
                    <Text style={styles.text}>Enter password:</Text>
                    <View style={styles.actions}>
                    <Feather name="lock" size={24} color="black" />
                        <TextInput secureTextEntry={data.secureTextEntry} placeholder="Your password" autoCapitalize="none" style={styles.passwordInput} onChangeText={(val) => handlePasswordChange(val)}/>
                        <TouchableOpacity onPress={updateSecureTextEntry}>
                            {data.secureTextEntry ?
                                <Feather name="eye-off" size={24} color="grey"/> :
                                <Feather name="eye" size={24} color="grey" />
                            }
                            
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text style={styles.text}>Confirm password:</Text>
                    <View style={styles.actions}>
                    <Feather name="lock" size={24} color="black" />
                        <TextInput secureTextEntry={data.confirm_secureTextEntry} placeholder="Re-enter password" autoCapitalize="none" style={styles.passwordInput} onChangeText={(val) => handleConfirmPasswordChange(val)}/>
                        <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
                            {data.confirm_secureTextEntry ?
                                <Feather name="eye-off" size={24} color="grey"/> :
                                <Feather name="eye" size={24} color="grey" />
                            }
                            
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.signUpButton}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => {navigation.navigate("Log In Screen")}} style={styles.logInButton}>
                        <Text style={styles.buttonText}>Log In</Text>
                    </TouchableOpacity>
                </View>
                </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a5ccd1',
        alignItems: "center",
        justifyContent: "center",
        borderBottomColor: 'grey',
          borderBottomWidth: 1,
      },
      header:{
          flex:1,
          marginTop: 30,
          padding: 30,
          
      },
      footer:{
          flex:8,
          backgroundColor: 'white',
          borderTopLeftRadius:30,
          borderTopRightRadius:30,
          padding:20,
      },
      headerText:{
        textAlign: 'center',
        fontSize: 30,
    },
    actions:{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10,
        marginRight:30,
        marginLeft: 20,
    },

    text:{
        fontSize:20,
        fontWeight: 'bold',
        padding: 10,
        marginLeft:10,
    },
    textInput:{
        textAlign: 'left',
        width: '80%',
        marginRight: 20,
    },

    passwordInput:{
        textAlign: 'left',
        width: '80%',
        marginLeft: 28,
    },

    buttonContainer:{
        paddingTop:20,
        alignItems:'center',
        borderStyle: 'solid',
        borderColor: 'grey',
    },
    logInButton:{
        width: "80%",
        borderStyle: 'solid',
        borderColor: 'grey',
        fontWeight:'bold',
        backgroundColor: 'white',
        
    },
    signUpButton:{
        width: "80%",
        borderStyle: 'solid',
        borderColor: 'grey',
        fontWeight:'bold',
        backgroundColor: '#A0B9BF',
        borderRadius: 50,
    },
    buttonText:{
        textAlign: 'center',
        fontSize: 20,
        padding: 10,
        fontWeight: 'bold',
    },

    icon:{
        marginRight:10,
    },
  });
