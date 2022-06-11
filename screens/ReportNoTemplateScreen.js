import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
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
              navigation.navigate("Pending", {title: formData.title, date: formData.date});
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

        <View>
            <TextInput placeholder="Title" onChangeText={onChangeField('title')}/>
            <TextInput placeholder="DD/MM/YYYY" onChangeText={onChangeField('date')}/>
            <TextInput placeholder="Enter Report Here" onChangeText={onChangeField('reportText')} />
            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
            <Button title="Cancel" onPress={() => navigation.goBack()} />
        </View>
        )
  }

  const styles =StyleSheet.create({
      container:{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',

      },
      button:{
          padding:20,
          fontWeight:'bold',
          borderStyle:'solid',
          backgroundColor: 'green',
          width:'40%',
          height: 40,
          marginLeft:30,
          marginRight:30,
      },
      buttonText:{
          color:'white',
      },
  })