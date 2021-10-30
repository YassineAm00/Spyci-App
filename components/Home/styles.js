import { StyleSheet } from "react-native";
import Colors from "../../assets/styles/Colors";
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
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    zIndex: 0,
  },

  //   Bottom Sheet content
  //   Header
  headersheet: {
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
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
  // Body
  panel: {
    position: "relative",
    backgroundColor: "#FFFFFF",
    height: "100%",
    overflow: "hidden",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 0,
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },

  //   End Bottom Sheet content

  header: {
    width: "80%",
    padding: 7,
    zIndex: 999999,
    position: "absolute",
    top: 50,
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
    fontFamily: "main-font",
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

  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    // width: "100%",
    // height: "100%",
    // position: "absolute",
    zIndex: 99999999,
  },
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
    borderRadius: 12,
    elevation: 3,
    backgroundColor: "#FF0031",
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
    fontFamily: "main-font",
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginVertical: 7,
  },
});
