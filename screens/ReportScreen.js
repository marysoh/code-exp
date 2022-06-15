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
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState, useCallback } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-native-datepicker";
import { Entypo } from "@expo/vector-icons";

import firebase from "firebase/compat";
import { Component } from "react/cjs/react.production.min";
import { db } from "../App";

export class ReportScreen extends Component {
  // const { register, handleSubmit, setValue } = useForm();

  // const onSubmit = useCallback((formData) => {
  //   console.log("in on submit", formData);
  //   if(formData.title == 'undefined'){
  //     console.log("no title");
  //   };
  //   navigation.navigate("Pending", {
  //     title: formData.title,
  //     date: formData.date,
  //     template: true,
  //     incident: formData.incident,
  //     servicemen: formData.servicemen,
  //     location: formData.location,
  //     description: formData.description,
  //     currentStatus: formData.currentStatus,
  //     actions: formData.actions,
  //     verbalReport: formData.verbalReport,
  //     higherHq: formData.higherHq,
  //     gsoc: formData.gsoc,
  //     aimsis: formData.aimsis,
  //     officer: formData.officer,
  //   });
  // }, []);

  // const onChangeField = useCallback(
  //   (name) => (text) => {
  //     setValue(name, text);
  //   },
  //   []
  // );

  // useEffect(() => {
  //   register("title");
  //   register("date");
  //   register("incident");
  //   register("servicemen");
  //   register("location");
  //   register("description");
  //   register("currentStatus");
  //   register("actions");
  //   register("verbalReport");
  //   register("higherHq");
  //   register("gsoc");
  //   register("aimsis");
  //   register("officer");
  // }, [register]);

  // const [text, setText] = useState({
  //     title: "",
  //     date: "",
  //     });
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      date: '',
      incident: '',
      servicemen: '',
      location: '',
      description: '',
      currentStatus: '',
      actions: '',
      verbalReport: '',
      higherHq: '',
      gsoc: '',
      aimsis: '',
      officer: ''
    }

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const { title, date, incident, servicemen, location, description, currentStatus, actions, verbalReport, higherHq, gsoc, aimsis, officer } = this.state;
    const res = db.collection("pending")
      .add({
        title,
        date,
        template: true,
        incident,
        servicemen,
        location,
        reportText: description,
        description,
        currentStatus,
        actions,
        verbalReport,
        higherHq,
        gsoc,
        aimsis,
        officer,
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
          <TextInput
            placeholder="Required"
            onChangeText={(title) => this.setState({ title })}
            style={styles.textInput}
          />
          <Text style={styles.text}>Date and Time of Incident:</Text>
          <TextInput
            placeholder="DD/MM/YYYY HHMM HRS"
            onChangeText={(date) => this.setState({ date })}
            style={styles.textInput}
            placeholderTextColor="grey"
          />
          <Text style={styles.text}>Nature and Type of Incident:</Text>
          <TextInput
            placeholder="Non-Training/Training Related"
            onChangeText={(incident) => this.setState({ incident })}
            style={styles.textInput}
          />
          <Text style={styles.text}>Details of Personnel involved:</Text>
          <TextInput
            placeholder="Rank, Masked NRIC, Unit/Sub-Unit"
            onChangeText={(servicemen) => this.setState({ servicemen })}
            style={styles.textInput}
            multiline={true}
          />
          <Text style={styles.text}>Location of Incident:</Text>
          <TextInput
            placeholder=""
            onChangeText={(location) => this.setState({ location })}
            style={styles.textInput}
            multiline={true}
          />
          <Text style={styles.text}>Brief Description:</Text>
          <TextInput
            placeholder=""
            onChangeText={(description) => this.setState({ description })}
            style={styles.textInput}
            multiline={true}
          />
          <Text style={styles.text}>Current Status:</Text>
          <TextInput
            placeholder="Including injury/damages"
            onChangeText={(currentStatus) => this.setState({ currentStatus })}
            style={styles.textInput}
            multiline={true}
          />
          <Text style={styles.text}>Follow-up Actions:</Text>
          <TextInput
            placeholder=""
            onChangeText={(actions) => this.setState({ actions })}
            style={styles.textInput}
            multiline={true}
          />
          <Text style={styles.text}>HHQ/GSOC informed? If yes, include date and time.</Text>
          <Text style={styles.text}>Verbal Report:</Text>
          <TextInput
            placeholder=""
            onChangeText={(verbalReport) => this.setState({ verbalReport })}
            style={styles.textInput}
            multiline={true}
          />
          <Text style={styles.text}>
            Higher HQ/Unit:
          </Text>
          <TextInput
            placeholder=""
            onChangeText={(higherHq) => this.setState({ higherHq })}
            style={styles.textInput}
            multiline={true}
          />
          <Text style={styles.text}>GSOC:</Text>
          <TextInput
            placeholder=""
            onChangeText={(gsoc) => this.setState({ gsoc })}
            style={styles.textInput}
            multiline={true}
          />
          <Text style={styles.text}>AIMSIS Report:</Text>
          <TextInput
            placeholder=""
            onChangeText={(aimsis) => this.setState({ aimsis })}
            style={styles.textInput}
            multiline={true}
          />
          <Text style={styles.text}>Reported By:</Text>
          <TextInput
            placeholder="Rank, Name, HP"
            onChangeText={(officer) => this.setState({ officer })}
            style={styles.textInput}
            multiline={true}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.onSubmit()}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.goBack()}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    marginBottom: 55,
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  button: {
    fontWeight: "bold",
    borderRadius: 10,
    backgroundColor: "#A0B9BF",
    width: "40%",
    height: 40,
  },
  buttonText: {
    marginTop: 10,
    marginLeft: 50,
    color: "black",
    fontWeight: "bold",
  },

  text: {
    fontSize:16,
    fontWeight: "bold",
    padding: 10,
  },

  textInput: {
    borderWidth: 1,
    borderColor: "grey",
    backgroundColor: "#E9E9E9",
    borderRadius:5,
    padding: 3,
    marginLeft: 20,
    marginRight: 20,
  },
});

export default ReportScreen;
