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

// Profie Screen
import ProfileScreen from "../Profile";

export default function Cafe() {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View style={styles.center}>
          <FontAwesome5 name="map-marked-alt" size={24} color="red" />
          <Text>Maps</Text>
        </View>
        <View style={styles.center}>
          <Text style={styles.title}>Cafe OZ</Text>
          <View style={styles.center_vertic}>
            <Text>
              <Octicons name="primitive-dot" size={13} color="#4EE000" />
              23
            </Text>
            <Text
              style={{
                fontSize: 12,
                marginLeft: 5,
              }}
            >
              <Feather name="users" size={18} color="red" />
              Online
            </Text>
          </View>
        </View>
        <View style={styles.center}>
          <Ionicons name="exit-outline" size={24} color="red" />
          <Text>Exit</Text>
        </View>
      </View>
      <View style={styles.screen_navigation}>
        <TouchableOpacity style={styles.screen_navigation_button}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "main-font",
              color: "red",
            }}
          >
            Info
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.screen_navigation_button}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "main-font",
              color: "red",
            }}
          >
            Profile
          </Text>
        </TouchableOpacity>
      </View>

      {/* Info Screen  */}
      <View>
        <Text>Info Screen</Text>
      </View>

      {/* Profile Screen  */}
      <View style={{ display: "none" }}>
        <ProfileScreen />
      </View>
    </SafeAreaView>
  );
}
