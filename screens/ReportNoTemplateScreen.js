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
import React, { useEffect, useState, useCallback } from "react";
import {useForm, Controller} from "react-hook-form";
import DatePicker from "react-native-datepicker";
  

  export default function ReportNoTemplateScreen({navigation}){
      const {register, handleSubmit, setValue} = useForm();
      const [height, setHeight] = useState(10);

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
            <View style={styles.header}>
                <Text style={styles.headerText}>Create Report</Text>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.text}>Title:</Text>
                <TextInput placeholder="" onChangeText={onChangeField('title')} style={styles.textInput}/>
                <Text style={styles.text}>Date and Time of Incident:</Text>
                <TextInput placeholder="DD/MM/YYYY HHMM" onChangeText={onChangeField('date')} style={styles.textInput}/>
                <Text style={styles.text}>Enter Report:</Text>
                <TextInput  placeholder="" onChangeText={onChangeField('reportText')} style={styles.textInput} multiline ={true}  />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()} >
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        
        
    </ScrollView>
        )
  }

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