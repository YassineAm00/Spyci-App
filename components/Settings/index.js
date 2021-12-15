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
  Ionicons
} from "@expo/vector-icons";

//:::::::::: THEME ::::::::::
import Styles from "./styles";
import Colors from "../../assets/styles/Colors";

// Loading
import Loading from "../Loading";

export default function Settings({ navigation }) {
  return (
    <SafeAreaView style={{height: "100%"}}>
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
        {/* <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Feather name="settings" size={25} color="#FF0031" />
        </TouchableOpacity> */}
        <View style={Styles.ImageContainer}>
          <Avatar.Image
            source={require("../../assets/img/Profile/Rectangle_2137.png")}
            size={30}
          />
        </View>
      </View>

      <View style={{ marginBottom: 20 }}>
        <Text style={Styles.SmallTitle}>Application</Text>
        <View style={Styles.SettingsItem}>
          <MaterialIcons
            name="notifications-active"
            size={20}
            color={Colors.MAIN_COLOR}
            style={{ marginRight: 15 }}
          />
          <Text>Notifications</Text>
          <Text style={{ position: "absolute", right: 20 }}>All</Text>
        </View>
      </View>
      <View>
        <Text style={Styles.SmallTitle}>A Propos</Text>
        <View style={Styles.SettingsItem}>
          <AntDesign
            name="filetext1"
            size={20}
            color={Colors.MAIN_COLOR}
            style={{ marginRight: 15 }}
          />
          <Text>Rate Spyci</Text>
        </View>
        <View style={Styles.SettingsItem}>
          <MaterialIcons
            name="notifications-active"
            size={20}
            color={Colors.MAIN_COLOR}
            style={{ marginRight: 15 }}
          />
          <Text>Terms of use</Text>
        </View>
        <View style={Styles.SettingsItem}>
          <Ionicons
            name="md-book-outline"
            size={20}
            color={Colors.MAIN_COLOR}
            style={{ marginRight: 15 }}
          />
          <Text>Privacy</Text>
        </View>
        <View style={Styles.SettingsItem}>
          <MaterialCommunityIcons
            name="hanger"
            size={20}
            color={Colors.MAIN_COLOR}
            style={{ marginRight: 15 }}
          />
          <Text>F.A.Q</Text>
        </View>
      </View>

      {/* Disconnect & Delete Account  */}
      <View style={{ position:"absolute", bottom: 0 }}>
        <TouchableOpacity style={{justifyContent: "center", alignItems: "center"}}>
          <Text>Disconect</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Delete my account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
