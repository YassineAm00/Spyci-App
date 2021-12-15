import React, { useRef, useState } from "react";
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
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Icons
import {
  FontAwesome5,
  Ionicons,
  Octicons,
  Feather,
  AntDesign,
  Entypo,
} from "@expo/vector-icons";

// Style
import styles from "./styles";
import Colors from "../../../assets/styles/Colors";

import Paginator from "../../../helpers/Paginator";

export default function Cafe() {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
      path: require("../../../assets/img/Profile/Rectangle_2103.png"),
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
      path: require("../../../assets/img/Profile/Rectangle_2137.png"),
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
      path: require("../../../assets/img/Profile/Rectangle_2103.png"),
    },
  ];

  const Item = ({ path }) => (
    <View
      style={{
        width: Dimensions.get("window").width,
        height: 350,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor:"red",
        marginTop: 60,
        marginBottom: 20,
      }}
    >
      <Image
        style={{ borderRadius: 10, height: "100%", width: "100%" }}
        source={path}
      />
    </View>
  );

  const renderItem = ({ item }) => <Item path={item.path} />;

  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;
  // slidesRef = useRef(null),
  // const viewableItemChanged = useRef(({ viewableItem }) => {
  //   console.log(viewableItem);
  const viewableItemChanged = useRef(({ viewableItems }) => {
    // If items change change the current index of the slides
    viewableItems[0] ? setCurrentIndex(viewableItems[0].index) : setCurrentIndex(0)
  }).current;
  // }).current;
  return (
    <SafeAreaView style={styles.container}>
      {/* :::::::::: User Name :::::::::: */}
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
      <ScrollView>
        <View style={styles.image_area}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator
            pagingEnabled
            bounces={false}
            keyExtractor={(item) => item.id}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              {
                useNativeDriver: false,
              }
            )}
            onViewableItemsChanged={viewableItemChanged}
          />

          {/* Paginator with dots */}
          <Paginator data={DATA} scrollX={scrollX} />
        </View>
        {/* About me & Hobbies */}
        <View style={[styles.Card, { width: "90%", marginBottom: 130 }]}>
          <View style={{ marginBottom: 10 }}>
            <View style={styles.TitleArea}>
              {/* <AntDesign name="heart" size={24} color={Colors.MAIN_COLOR} /> */}
              <Entypo name="text" size={22} color={Colors.MAIN_COLOR} />
              {/* <Ionicons name="md-game-controller" size={24} color="black" /> */}
              <Text
                style={{
                  marginLeft: 10,
                  fontFamily: "main-font",
                  fontSize: 18,
                  color: "#2DE04C",
                }}
              >
                About me
              </Text>
            </View>
            <View style={{ padding: 5 }}>
              <Text style={{ color: Colors.TEXT_COLOR }}>
                Leaving abit of sparkle everywhere i go
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.TitleArea}>
              <Ionicons
                name="md-game-controller"
                size={22}
                color={Colors.MAIN_COLOR}
              />
              <Text
                style={{
                  marginLeft: 10,
                  fontFamily: "main-font",
                  fontSize: 18,
                  color: "#2DE04C",
                }}
              >
                Hobbies
              </Text>
            </View>
            <View style={styles.HobbiesArea}>
              <View style={styles.Hobbie}>
                <Text style={{ fontSize: 12 }}>Drawing</Text>
              </View>
              <View style={styles.Hobbie}>
                <Text style={{ fontSize: 12 }}>Food</Text>
              </View>
              <View style={styles.Hobbie}>
                <Text style={{ fontSize: 12 }}>Animals</Text>
              </View>
              <View style={styles.Hobbie}>
                <Text style={{ fontSize: 12 }}>Comedy</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* :::::::::: Action :::::::::: */}
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
