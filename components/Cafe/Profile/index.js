import React from "react";
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
import { SafeAreaView } from "react-native-safe-area-context";

// Icons
import { FontAwesome5, Ionicons, Octicons, Feather } from "@expo/vector-icons";

// Style
import styles from "./styles";
import Colors from "../../../assets/styles/Colors";

export default function Cafe() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Profile SScreen</Text> */}
      <View style={styles.user_name}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            color: "gray",
          }}
        >
          Jack Daniel, 22
        </Text>
      </View>
      <View style={styles.image_area}>
        <Image
          style={
            {
              // height: "100%",
              // width: 200,
              // marginLeft: 20,
            }
          }
          source={require("../../../assets/img/Profile/Rectangle_2103.png")}
        />
      </View>
      <View style={styles.action_area}>
        <View style={styles.action}>
          <TouchableOpacity style={styles.action_button}>
            <Image
              style={{
                height: 100,
                width: 100,
                marginTop: 20,
              }}
              source={require("../../../assets/img/Profile/not-spyci.png")}
            />
            <Text
              style={{
                position: "absolute",
                bottom: -10,
                fontFamily: "main-font",
                fontSize: 20,
                color: "gray",
              }}
            >
              Not Spyci
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action_button}>
            <Image
              style={{
                height: 120,
                width: 120,
              }}
              source={require("../../../assets/img/Profile/6-layers.png")}
            />
            <Text
              style={{
                position: "absolute",
                bottom: -10,
                fontFamily: "main-font",
                fontSize: 20,
                color: Colors.MAIN_COLOR,
              }}
            >
              Spyci
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
