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
import {useForm, Controller} from "react-hook-form";
import DatePicker from "react-native-datepicker";
  

  export default function ReportNoTemplateScreen({navigation}){
      const {register, handleSubmit, setValue} = useForm();

      const onSubmit = useCallback(
          formData => {
              console.log("in on submit", formData);
              navigation.navigate("Pending", {title: formData.title, date: formData.date, template: false, reportText: formData.reportText});
            }, []
      )

      const onChangeField = useCallback(
          name => text => 
          {setValue(name, text);}, []
      );

      useEffect(() => {
          register('title');
          register('date');
          register('reportText');
      }, [register]);
        
      
    // const [text, setText] = useState({
    //     title: "",
    //     date: "",
    //     });

        return(
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

        <ScrollView style= {styles.container}>
        <Text style={styles.text}>Title:</Text>
        <TextInput placeholder="Title" onChangeText={onChangeField('title')} style={styles.textInput}/>
        <Text style={styles.text}>Date and Time of Incident:</Text>
        <TextInput placeholder="DD/MM/YYYY HHMM" onChangeText={onChangeField('date')} style={styles.textInput}/>
        <Text style={styles.text}>Enter Report:</Text>
        <TextInput placeholder="Enter Report Here" onChangeText={onChangeField('reportText')} style={styles.textInput}/>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()} >
                <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
        </View>
        
    </ScrollView>
        )
  }

  const styles =StyleSheet.create({
    container:{
        flex: 1,
        marginTop:40,
    },
    buttonContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin:20,
    },
    button:{
        fontWeight:'bold',
        borderStyle:'solid',
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
        marginLeft: 20,
    }
})