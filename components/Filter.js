import React, { useState, useEffect, useRef } from "react";
import {
  Platform,
  Text,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  Alert,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Pressable,
} from "react-native";
import MapScreen from "./MapScreen";
import Constants from "expo-constants";
import * as Location from "expo-location";
import { ListItem, RadioButton } from "react-native-paper";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";
import RangeSlider, { Slider } from "react-native-range-slider-expo";
import MapView, { Marker } from "react-native-maps";
import { AntDesign, Feather } from "@expo/vector-icons";

export default function Filter({ navigation }) {
  return (
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
        }}
      >
        <TouchableOpacity
          onPress={() => {
            console.log("test");
          }}
        >
          <Feather name="x" size={24} color="green" />
          {/* <Text>test</Text> */}
        </TouchableOpacity>
        <Button
          title="test"
          onPress={() => {
            console.log("test");
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <AntDesign name="filter" size={24} color="#FF0031" />
          <Text
            style={{
              color: "gray",
              // fontFamily: "Inter_900Black",
              fontWeight: "bold",
              marginLeft: 6,
            }}
          >
            FILTER
          </Text>
        </View>
      </View>
      <Text
        style={{
          paddingHorizontal: 25,
          paddingTop: 20,
          paddingBottom: 20,
          fontWeight: "bold",
          color: "gray",
          marginBottom: 0,
        }}
      >
        INTERESTING
      </Text>
      <View
        style={{
          // backgroundColor: "red",
          alignSelf: "center",
          flexDirection: "row",
          justifyContent: "space-around",
          // paddingHorizontal: 20,
          width: "90%",
          borderBottomWidth: 2,
          borderBottomColor: "#E5E5E5",
          paddingBottom: 5,
        }}
      >
        {/* Man */}
        <View
          style={{
            // backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center",
            width: "30%",
          }}
        >
          <Image
            style={{
              height: 50,
              width: 50,
              // borderRadius: 10,
              // position: "relative",
            }}
            source={require("../assets/img/Home/Man.png")}
          />

          <View
            style={{
              // backgroundColor: "green",
              // justifyContent: "flex-end",
              flexDirection: "row",
              alignItems: "center",
              // backgroundColor: "red",
              padding: 0,
            }}
          >
            <RadioButton
              value="first"
              // style={{ backgroundColor: "red" }}
              // status={checked === "first" ? "checked" : "unchecked"}
              // onPress={() => setChecked("first")}
            />
            <Text style={{ fontSize: 15, color: "gray" }}>Man</Text>
          </View>
        </View>

        {/* Woman */}
        <View
          style={{
            // backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center",
            width: "30%",
          }}
        >
          <Image
            style={{
              height: 50,
              width: 50,
              // borderRadius: 10,
              // position: "relative",
            }}
            source={require("../assets/img/Home/Woman.png")}
          />

          <View
            style={{
              // backgroundColor: "green",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              // backgroundColor: "red",
            }}
          >
            <RadioButton
              value="first"
              // style={{ backgroundColor: "red" }}
              // status={checked === "first" ? "checked" : "unchecked"}
              // onPress={() => setChecked("first")}
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
            fontWeight: "bold",
            color: "gray",
            marginBottom: 0,
          }}
        >
          AGE
        </Text>
        <RangeSlider
          min={18}
          max={100}
          step={1}
          fromValueOnChange={(value) => setFromValue(value)}
          toValueOnChange={(value) => setToValue(value)}
          initialFromValue={11}
          styleSize={15}
          fromKnobColor="#FF0031"
          toKnobColor="#FF0031"
          inRangeBarColor="#FF0031"
          outOfRangeBarColor="gray"
          valueLabelsBackgroundColor="#FF0031"
          initialFromValue={18}
          initialToValue={100}
        />
      </View>

      {/* Button  */}
      <Pressable style={styles.buttonSheet}>
        <Text style={styles.text}>DONE</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    zIndex: 0,
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
    zIndex: 2,
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
    backgroundColor: "gray",
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
    fontWeight: "bold",
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
});
