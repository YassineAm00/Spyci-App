import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Button,
  Pressable,
  ScrollView,
  TextInput,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  Modal,
  StyleSheet,
} from "react-native";

import { Avatar, Title } from "react-native-paper";

import { SafeAreaView } from "react-native-safe-area-context";
import {
  Feather,
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";

//:::::::::: THEME ::::::::::
import Styles from "./styles";
import Colors from "../../../../assets/styles/Colors";

// Loading
import Loading from "../../../Loading";

export default function ModalPoup({ visible, children }) {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
    // console.log(visible);
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);

      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.spring(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={Styles.ModalBackGround}>
        <Animated.View
          style={[
            Styles.ModalContainer,
            { transform: [{ scale: scaleValue }] },
          ]}
        >
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },

  header: {
    width: "80%",
    padding: 7,
    zIndex: 999999,
    position: "absolute",
    top: 50,
    // display: "flex",
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
    fontFamily: "Poppins_500Medium",
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

  // map: {
  //   width: Dimensions.get("window").width,
  //   height: Dimensions.get("window").height,
  //   // width: "100%",
  //   // height: "100%",
  //   // position: "absolute",
  //   zIndex: 99999999,
  // },
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
  panel: {
    // padding: 20,
    backgroundColor: "#FFFFFF",
    // backgroundColor: "red",
    // paddingTop: 20,
    height: "100%",
    overflow: "hidden",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // zIndex: 0,
    // shadowColor: "#000000",
    // shadowOffset: { width: 0, height: 0 },
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  headersheet: {
    // backgroundColor: "#FFFFFF",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
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
    borderRadius: 50,
    elevation: 3,
    backgroundColor: "#FF0031",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    // fontWeight: "bold",
    fontFamily: "Poppins_600SemiBold",
    letterSpacing: 0.25,
    color: "white",
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginVertical: 7,
  },

  // Modal
  
  modalContainer: {
    width: "70%",
    height: "30%",
    backgroundColor: "white",
    // paddingVertical: 100,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 20,
  },
  headerModal: {
    width: "100%",
    height: 40,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});
