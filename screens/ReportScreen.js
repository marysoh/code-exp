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

export default function ReportScreen({ navigation }) {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = useCallback((formData) => {
    console.log("in on submit", formData);
    if(formData.title == 'undefined'){
      console.log("no title");
    };
    navigation.navigate("Pending", {
      title: formData.title,
      date: formData.date,
      template: true,
      incident: formData.incident,
      servicemen: formData.servicemen,
      location: formData.location,
      description: formData.description,
      currentStatus: formData.currentStatus,
      actions: formData.actions,
      verbalReport: formData.verbalReport,
      higherHq: formData.higherHq,
      gsoc: formData.gsoc,
      aimsis: formData.aimsis,
      officer: formData.officer,
    });
  }, []);

  const onChangeField = useCallback(
    (name) => (text) => {
      setValue(name, text);
    },
    []
  );

  useEffect(() => {
    register("title");
    register("date");
    register("incident");
    register("servicemen");
    register("location");
    register("description");
    register("currentStatus");
    register("actions");
    register("verbalReport");
    register("higherHq");
    register("gsoc");
    register("aimsis");
    register("officer");
  }, [register]);

  // const [text, setText] = useState({
  //     title: "",
  //     date: "",
  //     });

  return (
    //   <View>
    //     <Text>Title:</Text>
    //     <TextInput
    //         value= {text.title}
    //         onChangeText = {(newText) => setText(newText) }/>
    //     <View style={styles.container}>
    //         <TouchableOpacity onPress={()=> navigation.navigate("Pending", {text})} style={styles.button}>
    //             <Text style={styles.buttonText}>Submit</Text>
    //         </TouchableOpacity>
    //         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
    //             <Text style={styles.buttonText}>Cancel</Text>
    //         </TouchableOpacity>
    //     </View>
    //   </View>

    // <form onSubmit={handleSubmit(onSubmit)}>
    //     <input type="text" placeholder="Title" name="title" {...register('title')} />
    //     <input type="text" placeholder="Date" name="date" {...register('date')} />
    //     <input type="submit" />
    // </form>

    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Create Report</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.text}>Title:</Text>
        <TextInput
          placeholder="Required"
          onChangeText={onChangeField("title")}
          style={styles.textInput}
        />
        <Text style={styles.text}>Date and Time of Incident:</Text>
        <TextInput
          placeholder="DD/MM/YYYY HHMM HRS"
          onChangeText={onChangeField("date")}
          style={styles.textInput}
          placeholderTextColor="grey"
        />
        <Text style={styles.text}>Nature and Type of Incident:</Text>
        <TextInput
          placeholder="Non-Training/Training Related"
          onChangeText={onChangeField("incident")}
          style={styles.textInput}
        />
        <Text style={styles.text}>Details of Personnel involved:</Text>
        <TextInput
          placeholder="Rank, Masked NRIC, Unit/Sub-Unit"
          onChangeText={onChangeField("servicemen")}
          style={styles.textInput}
          multiline={true}
        />
        <Text style={styles.text}>Location of Incident:</Text>
        <TextInput
          placeholder=""
          onChangeText={onChangeField("location")}
          style={styles.textInput}
          multiline={true}
        />
        <Text style={styles.text}>Brief Description:</Text>
        <TextInput
          placeholder=""
          onChangeText={onChangeField("description")}
          style={styles.textInput}
          multiline={true}
        />
        <Text style={styles.text}>Current Status:</Text>
        <TextInput
          placeholder="Including injury/damages"
          onChangeText={onChangeField("currentStatus")}
          style={styles.textInput}
          multiline={true}
        />
        <Text style={styles.text}>Follow-up Actions:</Text>
        <TextInput
          placeholder=""
          onChangeText={onChangeField("actions")}
          style={styles.textInput}
          multiline={true}
        />
        <Text style={styles.text}>HHQ/GSOC informed? If yes, include date and time.</Text>
        <Text style={styles.text}>Verbal Report:</Text>
        <TextInput
          placeholder=""
          onChangeText={onChangeField("verbalReport")}
          style={styles.textInput}
          multiline={true}
        />
        <Text style={styles.text}>
          Higher HQ/Unit:
        </Text>
        <TextInput
          placeholder=""
          onChangeText={onChangeField("higherHq")}
          style={styles.textInput}
          multiline={true}
        />
        <Text style={styles.text}>GSOC:</Text>
        <TextInput
          placeholder=""
          onChangeText={onChangeField("gsoc")}
          style={styles.textInput}
          multiline={true}
        />
        <Text style={styles.text}>AIMSIS Report:</Text>
        <TextInput
          placeholder=""
          onChangeText={onChangeField("aimsis")}
          style={styles.textInput}
          multiline={true}
        />
        <Text style={styles.text}>Reported By:</Text>
        <TextInput
          placeholder="Rank, Name, HP"
          onChangeText={onChangeField("officer")}
          style={styles.textInput}
          multiline={true}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
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
