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
    // backgroundColor: "red",
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
    fontSize: 28,
    fontWeight: "bold",
    color: "#4EE000",
  },
  screen_navigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 2,
    borderColor: Colors.TEXT_COLOR,
    // backgroundColor: "green",
    // paddingVertical: 15,
  },
  screen_navigation_button: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.MAIN_COLOR,
    color: Colors.MAIN_COLOR,
    // paddingTop: 5,
    paddingBottom: 15,
    paddingHorizontal: 10,
  },
});
