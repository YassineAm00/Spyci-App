import { StyleSheet } from "react-native";
import Colors from "./Colors";

export default StyleSheet.create({
  Card: {
    position: 'relative',
    width: "100%",
    minHeight: 100,
    backgroundColor: "white",
    alignSelf: "center",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    marginBottom: 12
  },
});
