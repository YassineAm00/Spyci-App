import { StyleSheet } from "react-native";
import Colors from "../../assets/styles/Colors";
import ComponentsStyle from "../../assets/styles/Components";

export default StyleSheet.create({
  Header: {
    paddingTop: 35,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  ImageContainer: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    borderWidth: 2,
    borderColor: Colors.SECONDE_COLOR,
    justifyContent: "center",
    alignItems: "center",
  },
  SmallTitle: {
    fontSize: 12,
    marginTop: 5,
    marginBottom: 25,
    paddingLeft: 40,
  },
  SettingsItem: {
      flexDirection: "row",
      width:"80%",
      backgroundColor: "rgb(238, 238, 238)",
      alignItems:"center",
      alignSelf: "center",
      padding: 10,
      borderRadius: 12,
      marginBottom: 5
  },
});
