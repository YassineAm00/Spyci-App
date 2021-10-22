import { StyleSheet } from "react-native";
import Colors from "../../assets/styles/Colors";
import { useFonts } from "@expo-google-fonts/poppins";

//  Styles = () => {
//   const fontsLoaded = useFonts({
//     "Test-Font": require("../../assets/fonts/Nunito-SemiBold.ttf"),
//   });

export default StyleSheet.create({
  ProfileHeader: {
    paddingTop: 35,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  Descriprion: {
    width: "70%",
    paddingVertical: 20,
    textAlign: "center",
    // fontSize: 13,
    color: Colors.TEXT_COLOR,
    //   fontWeight: "700",
    alignSelf: "center",
    // fontFamily: "Test-font",
  },
  ProileInfo: {
    height: "auto",
    padding: 15,
    borderRadius: 8,
    marginBottom: 5,
    // shadowColor: "red",
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "#fff",
    shadowOpacity: 0.2,
    elevation: 9,
    backgroundColor: "#0000", // invisible color
  },
  InfoItem: {
    marginBottom: 7,
    // backgroundColor:"red",
    flexDirection: "row",
  },
  InfoIcon: {
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: 10,
    marginRight: 5,
  },
  InfoTitle: {
    color: "#777777",
    marginLeft: 20,
    // fontWeight: "bold",
    fontSize: 11,
    fontFamily: "Poppins_600SemiBold",
  },
  Info: {
    color: "#BDBDBD",
    marginLeft: 20,
    fontSize: 17,
    fontFamily: "Poppins_400Regular",
  },
  BioDescription: {
    fontSize: 12,
    height: 40,
    paddingTop: 10,
    fontFamily: "Poppins_400Regular",
    color: "#BDBDBD",
  },
  ImagesArea: {
    marginTop: 12,
    marginBottom: 50,
    flexDirection: "row",
    justifyContent: "center",
    height: 200,
  },
  MainImage: {
    height: 200,
    width: 150,
    borderRadius: 10,
    position: "relative",
  },
  FixedArea: {
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingVertical: 20,
    // padding: 20,
  },
  MainButton: {
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
});
// };

// const styles =
