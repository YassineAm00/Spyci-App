import { StyleSheet } from "react-native";
import Colors from "../../assets/styles/Colors";
import ComponentsStyle from "../../assets/styles/Components";

export default StyleSheet.create({
  Container: {
    width: "100%",
    height: "100%",
    padding: 20,
  },
  ProfileHeader: {
    paddingTop: 35,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  Descriprion: {
    width: "70%",
    paddingVertical: 20,
    textAlign: "center",
    color: Colors.TEXT_COLOR,
    alignSelf: "center",
  },

  // Profile Info
  UserName: {
    fontSize: 30,
    color: "gray",
    marginLeft: 20,
  },
  ProileInfo: ComponentsStyle.Card,
  //   ProileInfo: {
  //   height: "auto",
  //   padding: 15,
  //   paddingTop: 20,
  //   borderRadius: 8,
  //   marginBottom: 5,
  //   elevation: 4,
  // },
  InfoIconContainer: {
    width: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
  InfoItem: {
    marginTop: 2,
    marginBottom: 2,
    flexDirection: "row",
  },
  InfoIcon: {
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: 10,
    marginRight: 5,
    // backgroundColor: 'green'
  },
  InfoTitle: {
    color: "#777777",
    marginLeft: 20,
    fontSize: 11,
    fontFamily: "Poppins_600SemiBold",
  },
  Info: {
    color: "#BDBDBD",
    marginLeft: 20,
    fontSize: 17,
    fontFamily: "Poppins_400Regular",
  },
  EditButton: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
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

    // position: 'absolute',
    // top: 0,
    // right: 0,
  },
  BioDescription: {
    fontSize: 12,
    height: 40,
    paddingTop: 10,
    fontFamily: "Poppins_400Regular",
    color: "#BDBDBD",
  },
  ImagesArea: 
  ComponentsStyle.Card
  // {
  //   marginTop: 12,
  //   marginBottom: 50,
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   height: 200,
  // }
  ,
  ImageAction: {
    position: "relative",
    bottom: 45,
    marginLeft: "auto",
    marginRight: "auto",
    flexDirection: "row",
    width: 90,
    padding: 7,
    backgroundColor: "rgba(52, 52, 52, 0.6)",
    borderRadius: 50,
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
  text: {
    display: "flex",
    flexDirection: "row",
  },

  // Hobbies
  TitleArea: {
    flexDirection: 'row',
    paddingLeft: 15
  },
  Hobbie: {
    borderWidth: 1,
    // padding: 10,
    width:70,
    height:35,
    borderRadius: 50
  }
});
