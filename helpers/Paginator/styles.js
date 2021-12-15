import { StyleSheet } from "react-native";
import Colors from "../../assets/styles/Colors";
import ComponentsStyle from "../../assets/styles/Components";

export default StyleSheet.create({
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: "white",
    marginHorizontal: 8,
  },
  paginatorView: { flexDirection: "row", height: 64, position: "absolute", bottom: 70},
});
