import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Modal,
  Animated,
} from "react-native";
import { Avatar } from "react-native-paper";
import BottomSheet from "reanimated-bottom-sheet";
import AnimatedFall from "react-native-reanimated";
import MapView, { Marker, Callout } from "react-native-maps";
import { AntDesign, Feather, Entypo } from "@expo/vector-icons";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";

import Loading from "./Loading";

const ModalPoup = ({ visible, children }) => {
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
      // setTimeout(() => setShowModal(false), 2000);

      // setTimeout(() => {
      // setShowModal(false);
      // visible = false;
      // Animated.timing(scaleValue, {
      //       toValue: 0,
      //       duration: 300,
      //       useNativeDriver: true,
      //     }).start();
      // }, 2000);
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[
            styles.modalContainer,
            { transform: [{ scale: scaleValue }] },
          ]}
        >
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

export default function MapScreen(props) {
  const fontsLoaded = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    // Poppins_200ExtraLight,
    // Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    // Poppins_700Bold,
    // Poppins_700Bold_Italic,
    // Poppins_800ExtraBold,
    // Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });

  let Bar = useRef();
  let fall = new AnimatedFall.Value(1);
  const [visible, setVisible] = React.useState(false);

  const renderBar = () => (
    <View style={styles.panel}>
      <View
        style={{
          alignItems: "center",
          // backgroundColor: "yellow",
          borderBottomWidth: 1,
          borderBottomColor: "#E5E5E5",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 15,
          paddingHorizontal: 20,
          zIndex: 99999999,
          fontFamily: "Poppins_500Medium",
        }}
      >
        <TouchableOpacity onPress={() => Bar.current.snapTo(1)}>
          <Feather name="x" size={24} color="#FF0031" />
          {/* <Text>test</Text> */}
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          {/* <AntDesign name="filter" size={24} color="#FF0031" /> */}
          <Text
            style={{
              color: "#FF0031",
              // fontFamily: "Inter_900Black",
              marginLeft: 6,
              fontFamily: "Poppins_600SemiBold",
              // fontWeight: "bold",
            }}
          >
            Cafe OZ
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          height: 150,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "45%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <Text>Test</Text> */}
          <Image
            style={{
              height: 150,
              width: 150,
              // borderRadius: 10,
              // position: "relative",
            }}
            source={require("../assets/img/Home/7-layers.png")}
          />
        </View>
        <View style={{ width: "55%", flexDirection: "column" }}>
          <View
            style={{ height: 50, flexDirection: "row", alignItems: "center" }}
          >
            <Entypo
              name="location-pin"
              // style={{  }}
              size={26}
              color="#FF0031"
              style={{ marginRight: 10 }}
            />
            <View>
              <Text
                style={{
                  fontSize: 12,
                  color: "gray",
                  fontFamily: "Poppins_300Light",
                }}
              >
                25 Van Gogh
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  fontFamily: "Poppins_600SemiBold",
                  color: "gray",
                }}
              >
                75000 Paris
              </Text>
            </View>
            <View
              style={{
                marginLeft: 15,
                height: "50%",
                // backgroundColor: "red",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 12, color: "gray", padding: 0 }}>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  4
                </Text>
                Km
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Poppins_100Thin",
                  color: "gray",
                }}
              >
                away
              </Text>
            </View>
          </View>
          <View
            style={{ height: 50, flexDirection: "row", alignItems: "center" }}
          >
            <Feather
              name="user"
              size={26}
              style={{ marginRight: 10 }}
              color="#FF0031"
            />
            <View>
              <Text
                style={{
                  fontSize: 12,
                  color: "gray",
                  fontFamily: "Poppins_300Light",
                }}
              >
                23 people is here
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Button  */}
      <TouchableOpacity
        style={styles.buttonSheet}
        onPress={() => {
          setVisible(true);
          setTimeout(() => {
            setVisible(false);
          }, 2000);
          Bar.current.snapTo(1);
          setTest(true);
          // setTest(true);
          // onRegionChangeComplete();
        }}
      >
        <Text style={styles.text}>I'M HERE</Text>
      </TouchableOpacity>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.headersheet}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  const markerRef = useRef();
  const [test, setTest] = useState(false);

  const onRegionChangeComplete = () => {
    if (
      markerRef &&
      markerRef.current &&
      markerRef.current.showCallout() &&
      test
    ) {
      markerRef.current.showCallout();
      // markerRef.current.showCallout();
    }
  };

  if (!fontsLoaded[0]) {
    return <Loading />;
  } else {
    return (
      <>
        <View style={styles.container}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: props.latitude,
              longitude: props.longitude,
              latitudeDelta: 0.004757,
              longitudeDelta: 0.006866,
            }}
            onRegionChangeComplete={onRegionChangeComplete}
          >
            <Marker
              // ref={(ref) => {
              //   this.marker = ref;
              // }}
              ref={markerRef}
              coordinate={{
                latitude: props.latitude,
                longitude: props.longitude,
              }}
              // style={{ borderRadius: 20 }}
              // title="test"
              // description="test"
              onPress={() => Bar.current.snapTo(0)}
            >
              {test ? (
                <Callout
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <View
                    style={{
                      // borderRadius: 20,
                      width: "100%",
                      height: 75,
                      // backgroundColor: "red",
                      justifyContent: "center",
                      alignItems: "center",
                      // textAlign: "center",
                      // zIndex: 2,
                      // marginLeft: "auto",
                      // marginRight: "auto",
                      // alignSelf: "center",
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        width: "70%",
                        fontFamily: "Poppins_400Regular",
                        color: "#00b712",
                        // marginRight: 20,
                      }}
                    >
                      Your location
                    </Text>
                    <Avatar.Image
                      // style={{ marginRight: 20 }}
                      source={require("../assets/img/Profile/Rectangle_2137.png")}
                      size={30}
                    />
                  </View>
                </Callout>
              ) : (
                <></>
              )}
            </Marker>
          </MapView>
        </View>
        <BottomSheet
          ref={Bar}
          snapPoints={["65%", "0%"]}
          renderContent={renderBar}
          renderHeader={renderHeader}
          initialSnap={1}
          callbackNode={fall}
          enabledGestureInteraction={true}
          enabledContentGestureInteraction={false}
          style={{ height: 700 }}
        />
        {/* Modal Popup  */}
        <ModalPoup visible={visible}>
          {/* <View style={{ alignItems: "center" }}>
            <View style={styles.headerModal}>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <Text>Test</Text>
              </TouchableOpacity>
            </View>
          </View> */}
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Image
              style={{
                height: 150,
                width: 150,
                marginTop: 10,
                // backgroundColor: "red",
                // borderRadius: 10,
                // position: "relative",
              }}
              source={require("../assets/img/Home/12-layers.png")}
            />
            <Text
              style={{
                marginBottom: 30,
                fontSize: 20,
                textAlign: "center",
                fontFamily: "Poppins_500Medium",
                color: "#FF0031",
              }}
            >
              YOU ARE HERE !
            </Text>
          </View>
        </ModalPoup>
      </>
    );
  }
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
  modalBackGround: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    // height: "30%",
  },
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
