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
    fontSize: 10,
    marginTop: 5,
    marginBottom: 25,
    paddingLeft: 40,
    color: "gray",
    fontFamily: "Poppins-Bold-Font"
  },
  SettingsItem: {
    flexDirection: "row",
    width: "80%",
    backgroundColor: "rgb(238, 238, 238)",
    alignItems: "center",
    alignSelf: "center",
    padding: 10,
    borderRadius: 12,
    marginBottom: 5,
  },
  SettingsItemText:{
    fontFamily: "Poppins-Font",
    color: "gray"
  },
  ProfileAction: { position: "absolute", bottom: 20, alignSelf: "center" },
  ActionButton: {
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },

  // Notification
  NotificationItem: {
    flexDirection: "row",
    width: "80%",
    backgroundColor: "rgb(238, 238, 238)",
    alignItems: "center",
    alignSelf: "center",
    padding: 10,
    borderRadius: 12,
    marginBottom: 5,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  // Alert
  ConfirmationAlert: {
    backgroundColor: "white",
    minWidth: 250,
    minHeight: 250,
    opacity: 1,
    alignSelf: 'center',
    borderRadius: 12,
    alignItems: 'center'
  },
  AlertAction: {
    flexDirection: 'row',
    position: 'relative',
    width: 200,
    backgroundColor: 'green',
    justifyContent: 'space-evenly'
  },
  AlertButton: {
    backgroundColor: Colors.MAIN_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    padding: 2,
    borderRadius: 10,
    flexDirection: 'row',
  },
  AlertButtonText: {
    fontFamily: 'Poppins-Font',
    // fontSize: 12
    backgroundColor: 'yellow',
  }
});
