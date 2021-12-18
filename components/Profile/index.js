import React, { useState, useEffect } from "react";
import { View, Image, Pressable, ScrollView } from "react-native";

import { Avatar, Text } from "react-native-paper";
import {
  AntDesign,
  FontAwesome,
  Feather,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import * as firebase from "firebase";

//:::::::::: THEME ::::::::::
import Styles from "./styles";
import Colors from "../../assets/styles/Colors";

// Loading
import Loading from "../Loading";

export default function Profile({ navigation }) {
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(0);
  const [value, setValue] = useState(0);
  const [user, setUser] = useState(null);

  const fetchBlogs = async () => {
    await firebase
      .firestore()
      .collection("Profile")
      .doc("lqRBgIx726rMTy9NXLjr")
      .get()
      .then((snapshot) => {
        setUser(snapshot.data());
      });
  };

  useEffect(() => {
    fetchBlogs();
    const willFocusSubscription = navigation.addListener("focus", () => {
      fetchBlogs();
    });

    return willFocusSubscription;
  }, []);

  if (user == null) {
    return <Loading />;
  } else {
    return (
      <SafeAreaView>
        <ScrollView style={{ marginBottom: 20 }}>
          {/* :::::::::: Header :::::::::: */}
          <View style={Styles.ProfileHeader}>
            <View>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <FontAwesome name="long-arrow-left" size={25} color="#FF0031" />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                fontFamily: "main-font",
                color: Colors.MAIN_COLOR,
                fontSize: 25,
              }}
            >
              My Profile
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
              <Feather name="settings" size={25} color="#FF0031" />
            </TouchableOpacity>
          </View>

          <View style={Styles.Container}>
            {/* :::::::::: Profie Info :::::::::: */}
            <View style={Styles.ProileInfo}>
              <View
                style={[Styles.InfoItem, { justifyContent: "space-evenly" }]}
              >
                <View style={Styles.InfoIconContainer}>
                  <Avatar.Image
                    style={[Styles.InfoIcon, { marginRight: 15 }]}
                    source={require("../../assets/img/Profile/Rectangle_2137.png")}
                    size={40}
                  />
                </View>
                <Text style={[Styles.UserName]}>{user.Nom}</Text>
                {/* Edit pen */}
                <TouchableOpacity
                  style={Styles.EditButton}
                  onPress={() => navigation.navigate("ProfileEdit")}
                >
                  <MaterialCommunityIcons
                    name="pencil-outline"
                    size={24}
                    color={Colors.MAIN_COLOR}
                  />
                </TouchableOpacity>
              </View>
              <View style={Styles.InfoItem}>
                <View style={Styles.InfoIconContainer}>
                  <AntDesign
                    name="user"
                    style={Styles.InfoIcon}
                    color={Colors.MAIN_COLOR}
                    size={25}
                  />
                </View>
                <View>
                  <Text style={Styles.InfoTitle}>GENDER</Text>
                  <Text style={Styles.Info}>
                    {user.Genre == "F" ? "Woman" : "Men"}
                  </Text>
                </View>
              </View>
              <View style={Styles.InfoItem}>
                <View style={Styles.InfoIconContainer}>
                  <Feather
                    name="calendar"
                    style={Styles.InfoIcon}
                    color={Colors.MAIN_COLOR}
                    size={25}
                  />
                </View>
                <View>
                  <Text style={Styles.InfoTitle}>DATE OF BIRTH</Text>
                  <Text style={Styles.Info}>{user.DateAniv}</Text>
                </View>
              </View>
              <View style={Styles.InfoItem}>
                <View style={Styles.InfoIconContainer}>
                  <FontAwesome
                    name="envelope-o"
                    style={Styles.InfoIcon}
                    color={Colors.MAIN_COLOR}
                    size={25}
                  />
                </View>
                <View>
                  <Text style={Styles.InfoTitle}>EMAIL</Text>
                  <Text style={Styles.Info}>{user.Email}</Text>
                </View>
              </View>
            </View>

            {/* ::::::::: Images :::::::: */}
            <View style={Styles.ProileInfo}>
              <View style={Styles.ImagesArea}>
                <Image
                  style={Styles.MainImage}
                  source={require("../../assets/img/Profile/Rectangle_2137.png")}
                />
                <View
                  style={{
                    justifyContent: "space-evenly",
                  }}
                >
                  <Image
                    style={[Styles.Image, { marginBottom: 10 }]}
                    source={require("../../assets/img/Profile/Rectangle_2137.png")}
                  />
                  <Image
                    style={Styles.Image}
                    source={require("../../assets/img/Profile/Rectangle_2137.png")}
                  />
                </View>
              </View>
            </View>

            {/* :::::::::: Bio :::::::::: */}
            <View style={Styles.ProileInfo}>
              <View style={Styles.TitleArea}>
                <Entypo name="text" size={24} color="#FF0031" />
                <Text
                  style={{
                    fontFamily: "Poppins_600SemiBold",
                    color: "#777777",
                    marginLeft: 10,
                  }}
                >
                  BIO
                </Text>
              </View>
              <Text style={Styles.BioDescription}>{user.Bio}</Text>
            </View>

            {/* :::::::::: Hobbies :::::::::: */}
            <View style={Styles.ProileInfo}>
              <View style={Styles.TitleArea}>
                <AntDesign name="heart" size={24} color={Colors.MAIN_COLOR} />
                <Text
                  style={{
                    fontFamily: "Poppins_600SemiBold",
                    color: "#777777",
                    marginLeft: 10,
                  }}
                >
                  HOBBIES
                </Text>
              </View>
              <View style={Styles.HobbiesArea}>
                <View style={Styles.Hobbie}>
                  <Text>Drawing</Text>
                </View>
                <View style={Styles.Hobbie}>
                  <Text>Food</Text>
                </View>
                <View style={Styles.Hobbie}>
                  <Text>Animals</Text>
                </View>
                <View style={Styles.Hobbie}>
                  <Text>Comedy</Text>
                </View>
              </View>
            </View>
          </View>
          {/* <Pressable style={styles.button}>
            <Text style={styles.text}>DONE</Text>
          </Pressable> */}
        </ScrollView>
        {/* <View style={Styles.FixedArea}>
            <Pressable style={Styles.MainButton}>
              <Text style={Styles.text}>DONE</Text>
            </Pressable>
          </View> */}
      </SafeAreaView>
    );
  }
}
