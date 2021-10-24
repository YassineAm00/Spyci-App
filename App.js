import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import profile from "./components/Profile";
import Home from "./components/Home";
import Filter from "./components/Filter";

// Firebase Configuration
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBE0Cbx2yIKCQtIAH2hsinS5sHDHkhkecA",
  authDomain: "spicy-app-d952e.firebaseapp.com",
  databaseURL: "https://spicy-app-d952e-default-rtdb.firebaseio.com",
  projectId: "spicy-app-d952e",
  storageBucket: "spicy-app-d952e.appspot.com",
  messagingSenderId: "483080914615",
  appId: "1:483080914615:web:31666ecbd0802159ecaf32",
  measurementId: "G-RZXWMLZ5KW",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={profile} />
        <Stack.Screen name="Filter" component={Filter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
  },
});
