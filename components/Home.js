import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Pressable,
  Modal,
  Animated,
} from "react-native";
import MapScreen from "./MapScreen";
import { RadioButton } from "react-native-paper";
import BottomSheet from "reanimated-bottom-sheet";
import AnimatedFall, { color } from "react-native-reanimated";
import RangeSlider, { Slider } from "react-native-range-slider-expo";
import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import {
  useFonts,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
} from "@expo-google-fonts/poppins";
import * as Location from "expo-location";
import { BoxShadow } from "react-native-shadow";
import * as firebase from "firebase";

export default function Home({ navigation }) {
  // shadow settings
  const shadowOpt = {
    width: 100,
    height: 300,
    color: "#000",
    border: 2,
    radius: 3,
    opacity: 0.1,
    x: 0,
    y: 3,
    // style:{styles.panel}
  };

  // Bottom sheet
  let BS = useRef();
  let fall = new AnimatedFall.Value(1);
  const [checked, setChecked] = React.useState("first");
  const [Fiter, setFilter] = useState(false);
  const [bottomSheet, setbottomSheet] = useState(false);

  // const [fontsLoaded , setfontLoaded] = useState(useFonts({
  //   // Poppins_100Thin,
  //   // Poppins_100Thin_Italic,
  //   // Poppins_200ExtraLight,
  //   // Poppins_200ExtraLight_Italic,
  //   Poppins_300Light,
  //   Poppins_300Light_Italic,
  //   Poppins_400Regular,
  //   Poppins_400Regular_Italic,
  //   // Poppins_500Medium,
  //   // Poppins_500Medium_Italic,
  //   // Poppins_600SemiBold,
  //   // Poppins_600SemiBold_Italic,
  //   // Poppins_700Bold,
  //   // Poppins_700Bold_Italic,
  //   // Poppins_800ExtraBold,
  //   // Poppins_800ExtraBold_Italic,
  //   // Poppins_900Black,
  //   // Poppins_900Black_Italic,
  // }));
  const fontsLoaded = useFonts({
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    "main-font": require("../assets/fonts/CherryAndKissesPersonalUse-E2W4.ttf"),
  });

  const renderInner = () => (
    // <BoxShadow setting={shadowOpt}>
    <View style={styles.panel}>
      <View
        style={{
          alignItems: "center",
          borderBottomWidth: 1,
          borderBottomColor: "#E5E5E5",
          flexDirection: "row",
          justifyContent: "center",
          position: "relative",
          padding: 10,
          paddingHorizontal: 20,
          zIndex: 99999999,
        }}
      >
        {/* <TouchableHighlight style={{ position: "absolute", left: 20 }}>
          <Feather name="x" size={24} color="#FF0031" />
        </TouchableHighlight> */}
        <TouchableOpacity
          style={{ position: "absolute", left: 20 }}
          onPress={() => {
            BS.current.snapTo(1);
            setbottomSheet(false);
          }}
        >
          <Feather name="x" size={24} color="#FF0031" />
        </TouchableOpacity>

        <View
          style={
            {
              // flexDirection: "row",
              // alignItems: "center",
              // justifyContent: "space-around",
              // alignSelf: 'center'
            }
          }
        >
          <Text
            style={{
              color: "gray",
              // fontWeight: "bold",
              // marginLeft: 6,
              fontFamily: "main-font",
              fontSize: 25,
              justifyContent: "center",
              alignItems: "center",
              color: "#FF0031",
              // textAlign: 'center'
            }}
          >
            Filter
          </Text>
        </View>
      </View>
      <Text
        style={{
          paddingHorizontal: 25,
          paddingTop: 20,
          paddingBottom: 20,
          // fontWeight: "bold",
          marginBottom: 0,
          fontSize: 16,
          fontFamily: "main-font",
          color: "#2DE04C",
        }}
      >
        Interesting
      </Text>
      <View
        style={{
          alignSelf: "center",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "90%",
          borderBottomWidth: 2,
          borderBottomColor: "#E5E5E5",
          paddingBottom: 5,
        }}
      >
        {/* Man */}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "30%",
          }}
        >
          <Image
            style={{
              height: 50,
              width: 50,
            }}
            source={require("../assets/img/Home/Man.png")}
          />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 0,
              flexDirection: "row",
              justifyContent: "flex-start",
              width: "90%",
            }}
          >
            <RadioButton
              value="first"
              status={checked === "first" ? "checked" : "unchecked"}
              onPress={() => setChecked("first")}
            />
            <Text style={{ fontSize: 15, color: "gray" }}>Man</Text>
          </View>
        </View>

        {/* Woman */}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "30%",
          }}
        >
          <Image
            style={{
              height: 50,
              width: 50,
            }}
            source={require("../assets/img/Home/Woman.png")}
          />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <RadioButton
              value="second"
              style={{ color: "red" }}
              status={checked === "second" ? "checked" : "unchecked"}
              onPress={() => setChecked("second")}
            />
            <Text style={{ fontSize: 15, color: "gray" }}>Woman</Text>
          </View>
        </View>
      </View>

      {/* Age  */}
      <View>
        <Text
          style={{
            paddingHorizontal: 25,
            paddingTop: 20,
            paddingBottom: 0,
            marginBottom: 0,
            fontSize: 16,
            fontFamily: "main-font",
            color: "#2DE04C",
          }}
        >
          Age
        </Text>
        <RangeSlider
          min={18}
          max={45}
          step={1}
          fromValueOnChange={(value) => setFromValue(value)}
          toValueOnChange={(value) => setToValue(value)}
          initialFromValue={11}
          styleSize={12}
          fromKnobColor="#FF0031"
          toKnobColor="#FF0031"
          knobColor="green"
          inRangeBarColor="#FF0031"
          outOfRangeBarColor="#D1D1D1"
          rangeLabelsTextColor="#D1D1D1"
          valueLabelsBackgroundColor="#FF0031"
          initialFromValue={18}
          initialToValue={45}
        />
      </View>

      {/* Button  */}
      <View style={{ position: "absolute", bottom: 85, width: "100%" }}>
        <Pressable style={styles.buttonSheet}>
          <Text style={styles.text}>Done</Text>
        </Pressable>
      </View>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.headersheet}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  // Age
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(0);
  const [value, setValue] = useState(0);

  // Current Location Js
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  let text = "Waiting...";

  useEffect(() => {
    // Test firebase
    // setTimeout(() => {
    //   firebase.firestore().collection("Profile").doc("TestId4").set({
    //     name: "Test4",
    //     email: "Test4@Gmai.com",
    //   });
    // }, 3000);
    // console.log(fontsLoaded[0]);
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      // console.log(Location.watchPositionAsync.bind(null, {}));
      // let [lct] = {};
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      // console.log(JSON.stringify(location));
      // setTimeout(
      //   async() =>
      //     Location.getCurrentPositionAsync({}).then((location) => {
      //       lct = location;
      //     }),
      //   2000
      // );
    })();
  }, []);

  const Test = () => {
    setbottomSheet(true);
    // setFilter();
    setTimeout(() => {
      BS.current.snapTo(0);
    }, 500);
  };

  let latitude = {};
  let longitude = {};
  if (errorMsg) {
    alert(errorMsg);
  } else if (location) {
    latitude = location.coords.latitude;
    longitude = location.coords.longitude;
    // alert(JSON.stringify(location.coords.longitude));
  }
  if (!fontsLoaded[0]) {
    return <Text>{text}</Text>;
  } else {
    return (
      <View style={styles.container}>
        {/* :::::::::::: Hearder :::::::::::: */}
        <View style={styles.header}>
          <TouchableOpacity
            // title="test"
            style={styles.headerItem}
            className="col-lg-4"
            onPress={() => {
              Test();
            }}
          >
            {/* <Icon name="filter" size={30} color="#D31245" /> */}
            {/* <AntDesign name="filter" size={30} color="#D1D3D4" /> */}
            <FontAwesome name="sliders" size={30} color="#D1D3D4" />
            <Text style={styles.header__text}>
              Filter
              {/* atest */}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.headerItem}
            className=" col-lg-4 "
            onPress={() => navigation.navigate("Filter")}
          >
            {/* <Icon name="comment" size={30} color="#D1D3D4" /> */}
            {/* <AntDesign name="message-circle" size={32} color="green" /> */}
            <Feather name="message-circle" size={30} color="#D1D3D4" />
            <Text style={styles.header__text}>Messengers</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.headerItem}
            className=" col-lg-4 "
            onPress={() => navigation.navigate("Profile")}
          >
            <AntDesign name="user" size={30} color="#D1D3D4" />

            <Text style={styles.header__text}>Profile</Text>
          </TouchableOpacity>
        </View>

        {/* :::::::::::: Map :::::::::::: */}
        {location ? (
          <MapScreen latitude={latitude} longitude={longitude} />
        ) : (
          // <Text>Test</Text>
          <Text>{text}</Text>
        )}

        {/* :::::::::::: Search Bar :::::::::::: */}
        <View style={styles.search__bar}>
          <AntDesign
            name="search1"
            size={24}
            color="#D31245"
            style={styles.search__icon}
          />
          <TextInput style={styles.input} placeholder="Type here to search" />
        </View>

        {/* :::::::::::: Bottom sheet :::::::::::: */}
        <BottomSheet
          ref={BS}
          snapPoints={["78%", "0%"]}
          renderContent={renderInner}
          renderHeader={renderHeader}
          initialSnap={1}
          callbackNode={fall}
          enabledGestureInteraction={true}
          enabledContentGestureInteraction={false}
          style={{ height: "78%" }}
        />
      </View>
    );
    // : <AppLoading />;
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    zIndex: 0,
    // fontFamily: 'Poppins_500Medium'
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
  panel: {
    // padding: 20,
    position: "relative",
    backgroundColor: "#FFFFFF",
    // backgroundColor: "red",
    // paddingTop: 20,
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
