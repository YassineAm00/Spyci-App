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
  Animated,
  Dimensions,
  StyleSheet,
  Modal,
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

// Theme
import Styles from "./styles";
import Colors from "../../assets/styles/Colors";

// Loading
import Loading from "../Loading";

// Confirmation
import ModalPoup from "../Helpers/Modals/Confirmation";

export default function Notifications({ navigation }) {
  const [openAlert, setOpenAlert] = useState(false);

  // Confirmation Alert Animation
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const { height } = Dimensions.get("window");

  const openConfirmation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const saveConfirmation = animation.interpolate({
    inputRange: [1, 2],
    outputRange: [0, -height],
    extrapolate: "clamp",
  });

  const No = () => {
    setTimeout(() => {
      setOpenAlert(false);
    }, 300);
  };

  const Yes = () => {
    setTimeout(() => {
      setOpenAlert(false);
    }, 300);
  };

  const ConfirmationTrigger = () => {
    setOpenAlert(true);
  };

  const open = {
    transform: [{ scale: openConfirmation }, { translateY: saveConfirmation }],
  };

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
          <TouchableOpacity
            style={Styles.ActionButton}
            onPress={ConfirmationTrigger}
          >
            <Text
              style={{ color: Colors.MAIN_COLOR, fontFamily: "Poppins-Font" }}
            >
              Disconect
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.ActionButton}
            onPress={ConfirmationTrigger}
          >
            <Text
              style={{ color: Colors.MAIN_COLOR, fontFamily: "Poppins-Font" }}
            >
              Delete my account
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {/* <View
        style={
          openAlert
            ? {
               
              }
            : {
                display: "none",
              }
        }
      > */}
        {/* <Animated.View style={open}>
          <View style={[Styles.ConfirmationAlert]}>
            
          </View>
        </Animated.View> */}
        <ModalPoup visible={openAlert}>
          <Image
            source={require("../../assets/img/Profile/6-layers.png")}
            style={{ height: 100 }}
          />
          <Text style={Styles.ConfirmationText}>Are you sure ?</Text>
          <View style={Styles.AlertAction}>
            <TouchableOpacity style={Styles.AlertButtonNO} onPress={No}>
              <Feather
                name="x"
                size={15}
                color={Colors.MAIN_COLOR}
                style={{ marginRight: 5 }}
              />
              <Text style={Styles.AlertButtonTextNO}>NO</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.AlertButtonYES} onPress={Yes}>
              <Feather
                name="check"
                size={15}
                color="white"
                style={{ marginRight: 5 }}
              />
              <Text style={Styles.AlertButtonTextYES}>YES</Text>
            </TouchableOpacity>
          </View>
        </ModalPoup>
      {/* </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },

  header: {
    width: "80%",
    padding: 7,
    zIndex: 999999,
    position: "absolute",
    top: 50,
    // display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  header__text: {
    color: "#D1D3D4",
    marginTop: 3,
    fontFamily: "Poppins_500Medium",
  },
  headerItem: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  search__bar: {
    height: "10%",
    backgroundColor: "white",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    borderColor: "transparent",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    // elevation: 5,
    zIndex: 2,
  },
  input: {
    height: "100%",
    width: "90%",
    padding: 10,
    backgroundColor: "transparent",
    fontFamily: "Poppins_500Medium",
  },
  search__icon: {
    width: "10%",
    // height: "100%",
    // marginTop: 15,
    marginLeft: 10,
    justifyContent: "center",
    // alignItems: "center",
    // textAlign: "center",
    alignSelf: "center",
    // backgroundColor: "red",
  },

  // map: {
  //   width: Dimensions.get("window").width,
  //   height: Dimensions.get("window").height,
  //   // width: "100%",
  //   // height: "100%",
  //   // position: "absolute",
  //   zIndex: 99999999,
  // },
  search: {
    height: "50%",
    flex: 0,
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: 2,
    backgroundColor: "red",
  },
  listView: { backgroundColor: "white" },

  // BottomSheet
  panel: {
    // padding: 20,
    backgroundColor: "#FFFFFF",
    // backgroundColor: "red",
    // paddingTop: 20,
    height: "100%",
    overflow: "hidden",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // zIndex: 0,
    // shadowColor: "#000000",
    // shadowOffset: { width: 0, height: 0 },
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  headersheet: {
    // backgroundColor: "#FFFFFF",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#D3D3D3",
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 10,
  },
  buttonSheet: {
    width: "80%",
    margin: "auto",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: "#FF0031",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    // fontWeight: "bold",
    fontFamily: "Poppins_600SemiBold",
    letterSpacing: 0.25,
    color: "white",
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginVertical: 7,
  },

  // Modal
  modalBackGround: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    // height: "30%",
  },
  modalContainer: {
    width: "70%",
    height: "30%",
    backgroundColor: "white",
    // paddingVertical: 100,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 20,
  },
  headerModal: {
    width: "100%",
    height: 40,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});
