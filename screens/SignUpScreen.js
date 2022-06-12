import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  ScrollView
} from "react-native";
import * as SQLite from "expo-sqlite";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState, useContext } from "react";
import { Feather } from '@expo/vector-icons';
import { AuthContext } from "../components/context";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import RadioForm, {
    RadioButton, 
    RadioButtonInput, 
    RadioButtonLabel
  } from 'react-native-simple-radio-button';


export default function SignUpScreen({navigation}){

    const {signUp} = useContext(AuthContext);

    const roles = [
        {label: 'Commander', value:0},
        {label: 'Approving Officer', value:1}
    ]

    const [data, setData] = useState({
        email: '',
        password: '',
        confirm_password: '',
        name: '',
        unit: '',
        isCommander: true,
        isOfficer: false,
        confirmed: true,
        hasEmail:true,
        hasPassword:true,
        hasName: true,
        hasUnit: true,
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
    const handleName = (val) => {
        setData({...data, name : val});
        
    }
    const handleUnit = (val) => {
        setData({...data, unit : val});
        
    }

    const handleRole = (val) => {
        if(val==0){
            setData({...data, isCommander : true, isOfficer:false});
        }
        else if (val==1){
            setData({...data, isCommander : false, isOfficer:true});
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
    }

    const updateConfirmSecureTextEntry = () =>{
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry,
        });
    }

    const signUpHandle = (email,password, confirm_password, name, unit) =>{
        
        if(password==confirm_password && email.length >0 && password.length>0 && name.length>0 && unit.length>0){
            //console.log(data);
            setData({...data, confirmed: true, hasEmail: true, hasPassword:true, hasName:true,});
            signUp(email,password);
        }
        else if(password!=confirm_password){
            setData({...data, confirmed: false, hasEmail: true, hasPassword: true, hasName:true, hasUnit:true,});
        }
        else if(email.length==0){
            setData({...data, confirmed: true, hasEmail: false, hasPassword:true, hasName:true, hasUnit:true,});
        }
        else if(password.length==0){
            setData({...data, hasPassword: false, hasEmail:true, confirmed: true, hasName:true, hasUnit:true,});
        }
        else if(name.length==0){
            setData({...data, hasPassword: true, hasEmail:true, confirmed: true, hasName:false, hasUnit:true,});
        }
        else if(unit.length==0){
            setData({...data, hasPassword: true, hasEmail:true, confirmed: true, hasName:true, hasUnit:false,});
        }

    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
              <Text style= {styles.headerText}>Sign Up</Text>  
            </View>
            <View style={styles.footer}>
                <ScrollView>
                    <View>
                        <Text style={styles.text}>Enter email:</Text>
                        <View style={styles.actions}>
                        <MaterialCommunityIcons name="email-outline" size={26} color="black" />
                            <TextInput placeholder="Required" autoCapitalize="none" style={styles.textInput} onChangeText={(val) => textInputChange(val)}/>

                        </View>
                    </View>
                    <View>
                        <Text style={styles.text}>Enter password:</Text>
                        <View style={styles.actions}>
                        <Feather name="lock" size={24} color="black" />
                            <TextInput secureTextEntry={data.secureTextEntry} placeholder="Required" autoCapitalize="none" style={styles.passwordInput} onChangeText={(val) => handlePasswordChange(val)}/>
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
                            <TextInput secureTextEntry={data.confirm_secureTextEntry} placeholder="Required" autoCapitalize="none" style={styles.passwordInput} onChangeText={(val) => handleConfirmPasswordChange(val)}/>
                            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
                                {data.confirm_secureTextEntry ?
                                    <Feather name="eye-off" size={24} color="grey"/> :
                                    <Feather name="eye" size={24} color="grey" />
                                }
                                
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                    <View>
                        <Text style={styles.text}>Enter Name:</Text>
                        <View style={styles.actions}>
                            <Feather name="user" size={24} color="black" />
                            <TextInput placeholder="Required" autoCapitalize="none" style={styles.textInput} onChangeText={(val) => handleName(val)}/>

                        </View>
                    </View>
                    <View>
                        <Text style={styles.text}>Enter Unit:</Text>
                        <View style={styles.actions}>
                            <Fontisto name="shield" size={24} color="black" />
                            <TextInput placeholder="Required" autoCapitalize="none" style={styles.textInput} onChangeText={(val) => handleUnit(val)}/>

                        </View>
                    </View>
                    <View>
                        <Text style={styles.text}>I am a:</Text>
                        <RadioForm radio_props={roles} initial={0} buttonSize={12} labelStyle={{fontSize:15}} onPress={(val) => {handleRole(val)}}/>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => { signUpHandle(data.email, data.password, data.confirm_password, data.name, data.unit)}} style={styles.signUpButton}>
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </TouchableOpacity>
                        {data.confirmed ?
                            console.log("confirmed") :
                            <View>
                                <Text style={{padding:10, color:'red', fontWeight: 'bold'}}>Password does not match</Text>
                            </View>
                        }
                        {data.hasEmail ?
                            console.log("has email") :
                            <View>
                                <Text style={{padding:10, color:'red', fontWeight: 'bold'}}>Please enter an email</Text>
                            </View>
                        }
                        {data.hasPassword ?
                            console.log("has password") :
                            <View>
                                <Text style={{padding:10, color:'red', fontWeight: 'bold'}}>Please enter a password</Text>
                            </View>
                        }
                        {data.hasName ?
                            console.log("has name") :
                            <View>
                                <Text style={{padding:10, color:'red', fontWeight: 'bold'}}>Please enter your name</Text>
                            </View>
                        }
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => {navigation.navigate("Log In Screen")}} style={styles.logInButton}>
                            <Text style={styles.buttonText}>Log In</Text>
                        </TouchableOpacity>
                    </View>    
                </ScrollView>
                
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
