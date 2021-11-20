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
import MapScreen from "../MapScreen";
import { RadioButton } from "react-native-paper";
import BottomSheet from "reanimated-bottom-sheet";
import AnimatedFall from "react-native-reanimated";
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
import * as firebase from "firebase";

//:::::::::: THEME ::::::::::
import styles from "./styles";
import Colors from "../../assets/styles/Colors";

// Loading
import Loading from "../Loading/index";

export default function Home({ navigation }) {
  // Bottom sheet
  let BS = useRef();
  let fall = new AnimatedFall.Value(1);
  const [checkedMan, setCheckedMan] = React.useState(false);
  const [checkedWoman, setCheckedWoman] = React.useState(false);
  const [Fiter, setFilter] = useState(false);
  const [bottomSheet, setbottomSheet] = useState(false);

  const fontsLoaded = useFonts({
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    "main-font": require("../../assets/fonts/CherryAndKissesPersonalUse-E2W4.ttf"),
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
            source={require("../../assets/img/Home/Man.png")}
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
              status={checkedMan ? "checked" : "unchecked"}
              onPress={() => setCheckedMan(!checkedMan)}
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
            source={require("../../assets/img/Home/Woman.png")}
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
              status={checkedWoman ? "checked" : "unchecked"}
              onPress={() => setCheckedWoman(!checkedWoman)}
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
        <View style={{ backgroundColor: "white", height: 50 }}>
          <RangeSlider
            step={1}
            fromValueOnChange={(value) => setFromValue(value)}
            toValueOnChange={(value) => setToValue(value)}
            initialFromValue={18}
            initialToValue={45}
            min={18}
            max={45}
            styleSize={10}
            fromKnobColor="#FF0031"
            toKnobColor="#FF0031"
            knobColor="green"
            inRangeBarColor="#FF0031"
            outOfRangeBarColor="#D1D1D1"
            showRangeLabels={false}
            valueLabelsBackgroundColor="#FF0031"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "90%",
            alignSelf: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", color: "gray" }}>{fromValue}</Text>
          <Text style={{ fontWeight: "bold", color: "gray" }}>{toValue}</Text>
        </View>
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
  const [fromValue, setFromValue] = useState(18);
  const [toValue, setToValue] = useState(45);
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
    return <Loading />;
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
          <Loading />
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
  }
}
