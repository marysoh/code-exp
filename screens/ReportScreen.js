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
    navigation.navigate("Pending", {
      title: formData.title,
      date: formData.date,
      template: true,
      incident: formData.incident,
      servicemen: formData.servicemen,
      unitCompany: formData.unitCompany,
      location: formData.location,
      description: formData.description,
      injury: formData.injury,
      actions: formData.actions,
      verbalReport: formData.verbalReport,
      writtenReport: formData.writtenReport,
      reportedTime: formData.reportedTime,
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
    register("unitCompany");
    register("location");
    register("description");
    register("injury");
    register("actions");
    register("verbalReport");
    register("writtenReport");
    register("reportedTime");
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
      <View>
        <Text style={styles.text}>Title:</Text>
        <TextInput
          placeholder=""
          onChangeText={onChangeField("title")}
          style={styles.textInput}
        />
        <Text style={styles.text}>Date and Time of Incident DTG:</Text>
        <TextInput
          placeholder="DD/MM/YYYY HHMM"
          onChangeText={onChangeField("date")}
          style={styles.textInput}
          placeholderTextColor="grey"
        />
        <Text style={styles.text}>Type of Incident:</Text>
        <TextInput
          placeholder=""
          onChangeText={onChangeField("incident")}
          style={styles.textInput}
        />
        <Text style={styles.text}>Servicemen involved:</Text>
        <TextInput
          placeholder=""
          onChangeText={onChangeField("servicemen")}
          style={styles.textInput}
        />
        <Text style={styles.text}>Servicemen Unit and Company:</Text>
        <TextInput
          placeholder="Unit, Company"
          onChangeText={onChangeField("unitCompany")}
          style={styles.textInput}
        />
        <Text style={styles.text}>Location of Incident:</Text>
        <TextInput
          placeholder=""
          onChangeText={onChangeField("location")}
          style={styles.textInput}
        />
        <Text style={styles.text}>Brief Description:</Text>
        <TextInput
          placeholder=""
          onChangeText={onChangeField("description")}
          style={styles.textInput}
        />
        <Text style={styles.text}>Injury/Damages:</Text>
        <TextInput
          placeholder=""
          onChangeText={onChangeField("injury")}
          style={styles.textInput}
        />
        <Text style={styles.text}>Follow-up Actions:</Text>
        <TextInput
          placeholder=""
          onChangeText={onChangeField("actions")}
          style={styles.textInput}
        />
        <Text style={styles.text}>Date/Time of Verbal Report to GSOC:</Text>
        <TextInput
          placeholder=""
          onChangeText={onChangeField("verbalReport")}
          style={styles.textInput}
        />
        <Text style={styles.text}>
          Date/Time of Written Report or submission of eSASH to GSOC:
        </Text>
        <TextInput
          placeholder=""
          onChangeText={onChangeField("writtenReport")}
          style={styles.textInput}
        />
        <Text style={styles.text}>Date/Time reported to 3 DIV/HQ Armr:</Text>
        <TextInput
          placeholder=""
          onChangeText={onChangeField("reportedTime")}
          style={styles.textInput}
        />
        <Text style={styles.text}>Unit Reporting Officer:</Text>
        <TextInput
          placeholder=""
          onChangeText={onChangeField("officer")}
          style={styles.textInput}
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
    marginBottom: 50,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  button: {
    fontWeight: "bold",
    borderStyle: "solid",
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
    fontWeight: "bold",
    padding: 10,
  },

  textInput: {
    borderWidth: 2,
    borderColor: "grey",
    backgroundColor: "#E9E9E9",
    padding: 3,
    marginLeft: 20,
    marginRight: 20,
  },
});
