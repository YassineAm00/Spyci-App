import React, { useState } from "react";
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
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Icons
import {
  FontAwesome5,
  FontAwesome,
  Ionicons,
  Octicons,
  Feather,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

// Style
import styles from "./styles";

// Profie Screen
import ProfileScreen from "../Profile";
import Colors from "../../../assets/styles/Colors";

// Rating
import { Rating, AirbnbRating } from "react-native-elements";

// Chart
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

export default function Cafe({ navigation }) {
  const [ActiveScreen, setActiveScreen] = useState("Info");

  return (
    <SafeAreaView style={{ height: "100%" }}>
      {/* Screen Header  */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.center}
          onPress={() => navigation.goBack()}
        >
          <FontAwesome5 name="map-marked-alt" size={24} color="red" />
          <Text style={{ fontSize: 11, fontWeight: "bold" }}>Maps</Text>
        </TouchableOpacity>
        <View style={styles.center}>
          <Text style={styles.title}>Cafe OZ</Text>
          <View style={styles.center_vertic}>
            <Text>
              <Octicons name="primitive-dot" size={13} color="#40B600" />
              <Text> 23</Text>
            </Text>
            <Text
              style={{
                fontSize: 12,
                marginLeft: 5,
              }}
            >
              <Feather name="users" size={18} color="red" />
              <Text style={{ fontSize: 11 }}> Online</Text>
            </Text>
          </View>
        </View>
        <View style={styles.center}>
          <Ionicons name="exit-outline" size={24} color="red" />
          <Text style={{ fontSize: 11, fontWeight: "bold" }}>Exit</Text>
        </View>
      </View>

      {/* Screen Body  */}
      <View style={styles.screen_navigation}>
        <TouchableOpacity
          onPress={() => setActiveScreen("Info")}
          style={
            ActiveScreen == "Info"
              ? styles.active_screen_navigation_button
              : styles.screen_navigation_button
          }
        >
          <Text
            style={
              ActiveScreen == "Info"
                ? styles.active_screen_navigation_text
                : styles.screen_navigation_text
            }
          >
            Info
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveScreen("Profile")}
          style={
            ActiveScreen == "Profile"
              ? styles.active_screen_navigation_button
              : styles.screen_navigation_button
          }
        >
          <Text
            style={
              ActiveScreen == "Profile"
                ? styles.active_screen_navigation_text
                : styles.screen_navigation_text
            }
          >
            Profile
          </Text>
        </TouchableOpacity>
      </View>

      {/* Info Screen  */}
      <View
        style={
          ActiveScreen == "Info"
            ? {
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                height: "78%",
                // backgroundColor: "red",
              }
            : { display: "none" }
        }
      >
        <View style={styles.card}>
          {/* First row */}
          <View style={styles.row}>
            <View style={styles.column}>
              <View style={styles.icon}>
                <FontAwesome5
                  name="map-marker-alt"
                  size={24}
                  color={Colors.MAIN_COLOR}
                />
              </View>
              <View>
                <Text style={styles.info_title}>ADRESS</Text>
                <Text style={styles.info_text}>25 Van Gogh</Text>
                <Text style={{ fontSize: 12, color: "gray" }}>75000 PARIS</Text>
              </View>
            </View>
            <View style={styles.column}>
              <View style={styles.icon}>
                <MaterialCommunityIcons
                  name="certificate"
                  size={24}
                  color={Colors.MAIN_COLOR}
                />
              </View>
              <View>
                <Text style={styles.info_title}>RATING</Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Rating
                    imageSize={10}
                    readonly
                    startingValue={4}
                    style={{ backgroundColor: "green" }}
                  />
                  <Text style={{ fontSize: 10, color: "gray", marginLeft: 5 }}>
                    (4/5)
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* Seconde row */}
          <View style={styles.row}>
            <View style={styles.column}>
              <View style={styles.icon}>
                <Entypo name="stopwatch" size={24} color={Colors.MAIN_COLOR} />
              </View>
              <View>
                <Text style={styles.info_title}>TIME</Text>
                <Text style={styles.info_text}>18:00 - 20:00</Text>
              </View>
            </View>
            <View style={styles.column}>
              <View style={styles.icon}>
                <Feather name="phone" size={24} color={Colors.MAIN_COLOR} />
              </View>
              <View>
                <Text style={styles.info_title}>TELEPHONE</Text>
                <Text style={styles.info_text}>+33 69 69 69 69</Text>
              </View>
            </View>
          </View>

          {/* third row */}
          <View style={styles.row}>
            <View style={styles.column}>
              <View style={styles.icon}>
                <Ionicons
                  name="wine-outline"
                  size={24}
                  color={Colors.MAIN_COLOR}
                />
              </View>
              <View>
                <Text style={styles.info_title}>MOSTLY</Text>
                <Text style={styles.info_text}>Local drinking</Text>
              </View>
            </View>
            <View style={styles.column}>
              <View style={styles.icon}>
                <FontAwesome5
                  name="dollar-sign"
                  size={24}
                  color={Colors.MAIN_COLOR}
                />
              </View>
              <View>
                <Text style={styles.info_title}>PRICE</Text>
                <Text style={styles.info_text}>
                  <FontAwesome
                    name="dollar"
                    size={10}
                    color={Colors.MAIN_COLOR}
                  />
                  <Text> </Text>
                  <FontAwesome
                    name="dollar"
                    size={10}
                    color={Colors.MAIN_COLOR}
                    style={{ marginLeft: 10 }}
                  />
                  <Text> </Text>
                  <Text style={{ fontSize: 10, color: "gray", marginLeft: 10 }}>
                    (Medium)
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.chart_card}>
          <View
            style={{
              paddingHorizontal: 30,
              paddingTop: 10,
              width: "100%",
            }}
          >
            <Text style={{ color: "gray", fontSize: 15, fontWeight: "bold" }}>
              FREQUENCY
            </Text>
            <Text style={{ color: Colors.TEXT_COLOR, fontSize: 10 }}>
              Based on avarege of weeks
            </Text>
          </View>

          <LineChart
            data={{
              labels: ["4pm", "5pm", "6pm", "7m", "8pm", "9pm", "10pm", "11pm"],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={Dimensions.get("window").width - 40}
            height={180} // optional, defaults to 1
            chartConfig={{
              //   width: "100%",
              backgroundColor: "transparent",
              backgroundGradientFrom: "white",
              backgroundGradientTo: "white",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: () => Colors.MAIN_COLOR,
              labelColor: () => "gray",
              style: {
                borderRadius: 16,
              },
              propsForBackgroundLines: {
                stroke: "#ffffff",
                strokeWidth: 0,
              },
              //   type: "line",
              options: {
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              },
            }}
            withHorizontalLabels={false}
            bezier
            style={{
              marginHorizontal: 8,
              borderRadius: 16,
              paddingRight: 25,
              paddingLeft: 25,
              //   justifyContent: "center",
              alignSelf: "center",
            }}
          />
        </View>
      </View>

      {/* Profile Screen  */}
      <View
        style={
          ActiveScreen == "Profile" ? { display: "flex" } : { display: "none" }
        }
      >
        {/* <ScrollView> */}
        <ProfileScreen />
        {/* </ScrollView> */}
      </View>
    </SafeAreaView>
  );
}
