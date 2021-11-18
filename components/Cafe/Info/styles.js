import { StyleSheet } from "react-native";
import Colors from "../../../assets/styles/Colors";
import {
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Pressable,
  Modal,
  Animated,
} from "react-native";

export default StyleSheet.create({
  header: {
    justifyContent: "space-around",
    flexDirection: "row",
    paddingTop: 30,
    paddingBottom: 22,
    height: "15%",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  center_vertic: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#40B600",
  },
  screen_navigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 2,
    borderColor: Colors.TEXT_COLOR,
    // backgroundColor: "green",
    // paddingVertical: 15,
  },
  active_screen_navigation_button: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.MAIN_COLOR,
    color: Colors.MAIN_COLOR,
    // paddingTop: 5,
    paddingBottom: 15,
    paddingHorizontal: 10,
  },
  screen_navigation_button: {
    borderBottomWidth: 2,
    borderColor: "transparent",
    // paddingTop: 5,
    paddingBottom: 15,
    paddingHorizontal: 10,
  },
  active_screen_navigation_text: {
    fontSize: 20,
    fontFamily: "main-font",
    color: Colors.MAIN_COLOR,
  },
  screen_navigation_text: {
    fontSize: 20,
    fontFamily: "main-font",
    color: Colors.TEXT_COLOR,
  },

  card: {
    width: "90%",
    alignSelf: "center",
    // marginTop: 10,
    borderRadius: 12,
    justifyContent: "center",
    backgroundColor: "white",
    padding: 25,
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  chart_card: {
    width: "90%",
    alignSelf: "center",
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  row: {
    flexDirection: "row",
    paddingVertical: 10,
    minHeight: 10,
    maxHeight: 50,
    // backgroundColor: "red",
  },
  column: {
    width: "50%",
    flexDirection: "row",
  },
  icon: {
    width: "30%",
    alignItems: "center",
    paddingTop: 5,
  },
  info_title: {
    fontSize: 10,
    fontWeight: "bold",
  },
  info_text: {
    fontSize: 12,
    color: Colors.TEXT_COLOR,
  },
});
