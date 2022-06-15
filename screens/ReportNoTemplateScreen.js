import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
// import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { Component, useEffect, useState, useCallback } from "react";
import {useForm, Controller} from "react-hook-form";
import DatePicker from "react-native-datepicker";
import { db } from "../App";
import { user } from "../redux/reducers/user";
import { defineAnimation, event } from "react-native-reanimated";

import firebase from "firebase/compat";
  
export class ReportNoTemplateScreen extends Component {
  // const {register, handleSubmit, setValue} = useForm();
  // const [height, setHeight] = useState(10);

  // const onSubmit = useCallback(
  //     formData => {
  //         console.log("in on submit", formData);
  //         navigation.navigate("Pending", {title: formData.title, date: formData.date, template: false, reportText: formData.reportText});
  //       }, []
  // )

  // const onChangeField = useCallback(
  //     name => text => 
  //     {setValue(name, text);}, []
  // );

  // //to send the data to firebase
  // const saveReport = (event) => {
  //   event.preventDefault();

  //   const elementsArray = [...event.target.elements];

  //   console.log(elementsArray);
  // }

  // useEffect(() => {
  //     register('title');
  //     register('date');
  //     register('reportText');
  // }, [register]);

  // const Users = () => {
  //   const [loading, setLoading] = useState(true);
  //   const [users, setUsers] = useState([]);


  //   useEffect(() => {
  //     const getUserFromFirebase = [];
  //     const subscriber = db
  //       .collection("users")
  //       .onSnapshot((querySnapshot) => {
  //         querySnapshot.forEach((doc) => {
  //           getUserFromFirebase.push({
  //             ...doc.data(),
  //             key: doc.id,
  //           })
  //         })
  //         setUsers(getUserFromFirebase);
  //         setLoading(false);
  //       })
  //     //clean up function
  //     return () => subscriber();
  //   }, []);



  // const [text, setText] = useState({
  //     title: "",
  //     date: "",
  //     });

  constructor(props) {
    super(props);

    this.state = {
        title: '',
        date: '',
        reportText: '',
    }

    this.onSubmit = this.onSubmit.bind(this)
}

  onSubmit() {
    const { title, date, reportText } = this.state;
    const res = db.collection("pending")
      .add({
        title,
        date,
        reportText,
        template: false,
        status: 'pending'
      })
    console.log('report sent', res.id);
    this.props.navigation.goBack();
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Create Report</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.text}>Title:</Text>
          <TextInput placeholder="Required" onChangeText={(title) => this.setState({ title })} style={styles.textInput} />
          <Text style={styles.text}>Date and Time of Incident:</Text>
          <TextInput placeholder="DD/MM/YYYY HHMM" onChangeText={(date) => this.setState({ date })} style={styles.textInput} />
          <Text style={styles.text}>Enter Report:</Text>
          <TextInput placeholder="" onChangeText={(reportText) => this.setState({ reportText })} style={styles.textInput} multiline={true} />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => this.onSubmit()}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.goBack()} >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>
    )
  }
}

//   return (
//     <Users></Users>
//     );
// }



  const styles =StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 40,
        marginBottom: 50,
    },
    header:{
        padding:20,
        backgroundColor: '#A5CCD1',
        alignItems: 'center',
      },
      headerText:{
        fontSize:25,
        fontWeight: 'bold',
      },
      contentContainer: {
        marginTop: 10,
        marginLeft: 10, 
        marginRight:10,
      },
    buttonContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin:20,
    },
    button:{
        fontWeight:'bold',
        borderRadius: 10,
        backgroundColor: '#A0B9BF',
        width:'40%',
        height: 40,
    },
    buttonText:{
        marginTop: 10,
        marginLeft:50,
        color:'black',
        fontWeight: 'bold',
    },

    text:{
      fontWeight: 'bold',
      padding:10,
    },

    textInput:{
        borderWidth: 1,
        borderColor: "grey",
        backgroundColor: "#E9E9E9",
        borderRadius: 5,
        padding: 3,
        marginLeft: 20,
        marginRight: 20,
    }
})

export default ReportNoTemplateScreen;