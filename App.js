import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import profile from "./components/Profile";
import profile_edit from "./components/Profile/Profile-Edit";
import Home from "./components/Home";
import Filter from "./components/Filter";
import InfoCafe from "./components/Cafe/Info";
import Settings from "./components/Settings";
import Notifications from "./components/Settings/Notifications";

// Fonts 
import {
  useFonts,
} from "@expo-google-fonts/poppins";
// import Fonts from "./assets/fonts"

// Redux
import { store } from "./redux/store";
import { Provider } from "react-redux";

// Firebase Configuration
import * as firebase from "firebase";

// Loading
import Loading from "./components/Loading";

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

  // Fonts
  const fontsLoaded = useFonts({
    "main-font": require("./assets/fonts/CherryAndKissesPersonalUse-E2W4.ttf"),
    "Poppins-Font": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold-Font": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Test-Font": require("./assets/fonts/Nunito-SemiBold.ttf"),
  });
  if (!fontsLoaded[0]) {
    return <Loading />
  }
  else
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          {/* User Profile */}
          <Stack.Screen name="Profile" component={profile} />
          {/* Cafe */}
          <Stack.Screen name="Cafe" component={InfoCafe} />
          <Stack.Screen name="ProfileEdit" component={profile_edit} />
          {/* Settings  */}
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Notifications" component={Notifications} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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
