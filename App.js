import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect, useState, useMemo, useReducer } from "react";
import { Entypo } from "@expo/vector-icons";

//imports for firebase rmb to 'npm install firebase@9.6.11'
import Firebase from 'firebase/compat/app'
import { initializeApp } from 'firebase/app'
import 'firebase/compat/app'
import 'firebase/compat/auth'

// redux imports and boilerplate
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk';
const store = createStore(rootReducer, applyMiddleware(thunk))

//the apps firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDC0g7o1IF9m1mTeknO5paPeL9AXTarec",
  authDomain: "code-exp-90274.firebaseapp.com",
  projectId: "code-exp-90274",
  storageBucket: "code-exp-90274.appspot.com",
  messagingSenderId: "453772165197",
  appId: "1:453772165197:web:edc9c2f2bdf21a8c54dc04",
  measurementId: "G-LFXP1GR9H3"
};

const firebase = Firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

//Check if app is present to initializeApp
if (Firebase.apps.length === 0) {
  Firebase.initializeApp(firebaseConfig)
}

//Screen Imports
import PendingOuterStack from "./screens/PendingOuterStack";
import PendingScreen from "./screens/PendingScreen";
import PendingStack from "./screens/PendingStack";
import AcceptedScreen from "./screens/AcceptedScreen";
import DeclinedScreen from "./screens/DeclinedScreen";
import AcceptedOuterStack from "./screens/AcceptedOuterStack";
import DeclinedOuterStack from "./screens/DeclinedOuterStack";
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import SettingsScreen from "./screens/SettingsScreen";
import LogInScreen from "./screens/LogInScreen";
import AccountStack from "./screens/AccountStack";
import SettingsStack from "./screens/SettingsStack";
import { AuthContext } from "./components/context";
import { Component } from "react/cjs/react.production.min";
import SignUpScreen from "./screens/SignUpScreen";
import ReportScreen from "./screens/ReportScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// export default function App() {

//   //constants to hardcode
//   const [isLoading, setIsLoading] = useState(true);
//   const [userToken, setUserToken] = useState(null);
  
//   //hard coded login to be true
//   const initialLoginState = {
//     isLoading: true,
//     username: null,
//     userToken: null,
//   }

//   const loginReducer = (prevState, action) => {
//     switch (action.type) {
//       case 'RETRIEVE_TOKEN':
//         return {
//           ...prevState,
//           userToken: action.token,
//           isLoading: false,
//         };
//       case 'LOGIN':
//         return {
//           ...prevState,
//           username: action.id,
//           userToken: action.token,
//           isLoading: false,
//         };
//       case 'LOGOUT':
//         return {
//           ...prevState,
//           username: null,
//           userToken: null,
//           isLoading: false,
//         };
//       case 'REGISTER':
//         return {
//           ...prevState,
//           username: action.id,
//           userToken: action.token,
//           isLoading: false,
//         };
//     }
//   }

//   const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

//   const authContext = useMemo(() => ({

//     signIn: (username, password) => {
//       // setUserToken('abc');
//       // setIsLoading(false);
//       let userToken;
//       userToken = null;
//       if (username == 'user' && password == 'pass') {
//         userToken = 'abc';
//       }
//       dispatch({ type: 'LOGIN', id: username, token: userToken })
//     },
//     signOut: () => {
//       // setUserToken(null);
//       // setIsLoading(false);
//       dispatch({ type: 'LOGOUT' });
//     },
//     signUp: () => {
//       // setUserToken('abc');
//       // setIsLoading(false);
//       dispatch({ type: 'REGISTER', token: 'xyz' });
//     },
//   }), []);

//   useEffect(() => {
//     setTimeout(() => {
//       // setIsLoading(false);
//       let userToken;
//       userToken = 'dcgwui'; //from storage
//       dispatch({ type: 'RETRIEVE_TOKEN', token: userToken })
//     }, 1000)
//   }, [])

//   if (loginState.isLoading) {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <ActivityIndicator size='large' />
//       </View>
//     )
//   }

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      } else {
        this.setState({
          loggedIn:true,
          loaded: true,
        })
      }
    })
  }

  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text>Loading</Text>
        </View>
      )
    }

    //auth screens
    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Sign Up Screen">
            <Stack.Screen name="Log In Screen" component={LogInScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Sign Up Screen" component={SignUpScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Report Screen" component={ReportScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }

    //if user is logged in
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Tab.Navigator screenOptions={{
            tabBarInactiveBackgroundColor: "#949ba0",
            tabBarActiveBackgroundColor: "#686D71",
            tabBarInactiveTintColor: "#000000",
            tabBarActiveTintColor: "#ffffff",
            tabBarIconStyle: { marginTop: 4 },
            tabBarLabelStyle: { fontSize: 13, color: '#f8ca12', paddingBottom: 3 },
            tabBarStyle: { height: 55, position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 4, borderTopWidth: 0 },
            style: { borderColor: '#011f3b' },
            headerShown: false,
            unmountOnBlur: true,
          }}>
            <Tab.Screen name="Pending Main" component={PendingOuterStack} options={{
              headerShown: false, title: '', tabBarLabel: 'Pending', tabBarLabelStyle: { fontSize: 14 }, tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="pending-actions" size={24} color={color} />),
            }} />
            <Tab.Screen name="Accepted Main" component={AcceptedOuterStack} options={{
              headerShown: false, title: '', tabBarLabel: 'Accepted', tabBarLabelStyle: { fontSize: 14 }, tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="sticker-check-outline" size={24} color={color} />)
            }} />
            <Tab.Screen name="Declined Main" component={DeclinedOuterStack} options={{
              headerShown: false, title: '', tabBarLabel: 'Declined', tabBarLabelStyle: { fontSize: 14 }, tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="sticker-remove-outline" size={24} color={color} />
              )
            }} />
            <Tab.Screen name="Settings Main" component={SettingsStack} options={{
              headerShown: false, title: '', tabBarLabel: 'Settings', tabBarLabelStyle: { fontSize: 14 }, tabBarIcon: ({ color, size }) => (
                <Ionicons name="settings-outline" size={24} color="black" />),
            }} />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF6EC",
    alignItems: "center",
    justifyContent: "center",
  },

});

export default App
export { firebase, db };