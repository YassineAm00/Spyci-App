import { StyleSheet } from "react-native";
import Colors from "../../../assets/styles/Colors";
import Components from "../../../assets/styles/Components";
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
  container: {
    height: "89%",
    justifyContent: "center",
    alignItems: "center",
  },
  image_area: {
    height: 500,
    // width: "100%",
    // borderTopLeftRadius: 12,
    // borderTopRightRadius: 12,
    // position: "absolute",
    // top: "13%",
    // // bottom: 100,
    // backgroundColor:"red",
    justifyContent: "center",
    alignItems: "center",
  },
  user_name: {
    height: 80,
    width: "100%",
    position: "absolute",
    top: 0,
    backgroundColor: "white",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  action_area: {
    height: 80,
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "white",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    // justifyContent: "center",
    // alignItems: "center",
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  action: {
    position: "absolute",
    top: -30,
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
  },
  action_button: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  Card: Components.Card,
  TitleArea: {
    flexDirection: "row",
    paddingLeft: 15,
    paddingVertical: 5,
    alignItems: "center",
  },
  HobbiesArea: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    // flexWrap: "wrap",
    marginTop: 5,
  },
  Hobbie: {
    borderWidth: 0.1,
    paddingHorizontal: 10,
    width: "23%",
    height: 35,
    marginTop: 5,
    marginHorizontal: 3,
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
