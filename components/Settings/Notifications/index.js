import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Button,
  Pressable,
  ScrollView,
  TextInput,
  Text,
  TouchableOpacity,
  Switch,
} from "react-native";

import { Avatar, Title } from "react-native-paper";

import { SafeAreaView } from "react-native-safe-area-context";
import {
  AntDesign,
  FontAwesome,
  Feather,
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";

//:::::::::: THEME ::::::::::
import Styles from "../styles";
import Colors from "../../../assets/styles/Colors";

// Loading
import Loading from "../../Loading";

export default function Settings({ navigation }) {

    const [isEnabledMatches, setIsEnabledMatches] = useState(false);
    const [isEnabledUpdates, setIsEnabledUpdates] = useState(false);
    const [isEnabledMessages, setIsEnabledMessages] = useState(false);
    const toggleSwitchMatches = () => setIsEnabledMatches(previousState => !previousState)
    const toggleSwitchUpdates = () => setIsEnabledUpdates(previousState => !previousState)
    const toggleSwitchMessages = () => setIsEnabledMessages(previousState => !previousState)
  return (
    <SafeAreaView style={{ height: "100%" }}>
      {/* ::::: Header ::::: */}
      <View style={Styles.Header}>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome name="long-arrow-left" size={25} color="#FF0031" />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontFamily: "main-font",
            color: Colors.MAIN_COLOR,
            fontSize: 25,
          }}
        >
          Settings
        </Text>
        <View style={Styles.ImageContainer}>
          <Avatar.Image
            source={require("../../../assets/img/Profile/Rectangle_2137.png")}
            size={30}
          />
        </View>
      </View>

      <View style={{ marginBottom: 20 }}>
        <Text style={Styles.SmallTitle}>NOTIFY ME WHENE</Text>
        <View style={Styles.NotificationItem}>
          <Text style={Styles.SettingsItemText}>New matches</Text>
          <Switch
            trackColor={{ false: "gray", true: Colors.MAIN_COLOR }}
            thumbColor={"white"}
            onValueChange={toggleSwitchMatches}
            value={isEnabledMatches}
            />
        </View>
        <View style={Styles.NotificationItem}>
          <Text style={Styles.SettingsItemText}>New updates</Text>
          
          <Switch
            trackColor={{ false: "gray", true: Colors.MAIN_COLOR }}
            thumbColor={"white"}
            onValueChange={toggleSwitchUpdates}
            value={isEnabledUpdates}
            />
        </View>
        <View style={Styles.NotificationItem}>
          <Text style={Styles.SettingsItemText}>New messages</Text>
          
          <Switch
            trackColor={{ false: "gray", true: Colors.MAIN_COLOR }}
            thumbColor={"white"}
            onValueChange={toggleSwitchMessages}
            value={isEnabledMessages}
            />
        </View>
      </View>
    </SafeAreaView>
  );
}
