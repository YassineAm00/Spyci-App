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
  Ionicons,
} from "@expo/vector-icons";

//:::::::::: THEME ::::::::::
import Styles from "./styles";
import Colors from "../../assets/styles/Colors";

// Loading
import Loading from "../Loading";

export default function Notifications({ navigation }) {
  return (
    <>
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
          <TouchableOpacity
            style={Styles.SettingsItem}
            onPress={() => navigation.navigate("Notifications")}
          >
            <MaterialIcons
              name="notifications-active"
              size={20}
              color={Colors.MAIN_COLOR}
              style={{ marginRight: 15 }}
            />
            <Text style={Styles.SettingsItemText}>Notifications</Text>
            <Text
              style={{
                position: "absolute",
                right: 20,
                fontFamily: "Poppins-Font",
                color: "gray",
              }}
            >
              All
            </Text>
          </TouchableOpacity>
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
            <Text style={Styles.SettingsItemText}>Rate Spyci</Text>
          </View>
          <View style={Styles.SettingsItem}>
            <MaterialIcons
              name="notifications-active"
              size={20}
              color={Colors.MAIN_COLOR}
              style={{ marginRight: 15 }}
            />
            <Text style={Styles.SettingsItemText}>Terms of use</Text>
          </View>
          <View style={Styles.SettingsItem}>
            <Ionicons
              name="md-book-outline"
              size={20}
              color={Colors.MAIN_COLOR}
              style={{ marginRight: 15 }}
            />
            <Text style={Styles.SettingsItemText}>Privacy</Text>
          </View>
          <View style={Styles.SettingsItem}>
            <MaterialCommunityIcons
              name="hanger"
              size={20}
              color={Colors.MAIN_COLOR}
              style={{ marginRight: 15 }}
            />
            <Text style={Styles.SettingsItemText}>F.A.Q</Text>
          </View>
        </View>

        {/* Disconnect & Delete Account  */}
        <View style={Styles.ProfileAction}>
          <TouchableOpacity style={Styles.ActionButton}>
            <Text
              style={{ color: Colors.MAIN_COLOR, fontFamily: "Poppins-Font" }}
            >
              Disconect
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.ActionButton}>
            <Text
              style={{ color: Colors.MAIN_COLOR, fontFamily: "Poppins-Font" }}
            >
              Delete my account
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <View
        style={{
          backgroundColor: "black",
          backgroundColor: "rgba(221,221,221,0.8)",
          width: "100%",
          height: "100%",
          position: "absolute",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <View style={Styles.ConfirmationAlert}>
          <Image source={require("../../assets/img/Profile/6-layers.png")} />
          <Text>Are you sure ?</Text>
          <View style={Styles.AlertAction}>
            <TouchableOpacity style={Styles.AlertButton}>
                <Feather name="x" size={15} color="black" style={{marginRight: 5}} />
              <Text style={Styles.AlertButtonText}>
                NO
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.AlertButton}>
              <Text style={Styles.AlertButtonText}>
                <Feather name="check" size={15} color="black" style={{marginRight: 5}} />
                YES
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
