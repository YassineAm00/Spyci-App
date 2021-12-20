import { StyleSheet } from "react-native";
import Colors from "../../../../assets/styles/Colors";
import ComponentsStyle from "../../../../assets/styles/Components";

export default StyleSheet.create({
  ModalContainer: {
    backgroundColor: "white",
    minWidth: 100,
    minHeight: 100,
    padding: 15,
    opacity: 1,
    alignSelf: "center",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 6.4,
      height: 6.4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 15,
  },

  ModalBackGround: {
    backgroundColor: "rgba(221,221,221,0.8)",
    width: "100%",
    height: "100%",
    position: "absolute",
    justifyContent: "center",
    alignSelf: "center",
    display: "flex",
  }
});
