import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Button,
  Pressable,
  ScrollView,
  TextInput,
} from "react-native";

import { Avatar, Text } from "react-native-paper";

import {
  AntDesign,
  FontAwesome,
  Feather,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import {
  TouchableOpacity,
  TouchableHighlight,
} from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  useFonts,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
} from "@expo-google-fonts/poppins";

//:::::::::: THEME ::::::::::
import Styles from "../styles";
import EditProfileStyle from "./styles";
import Colors from "../../../assets/styles/Colors";

// Loading
import Loading from "../../Loading";

export default function Profile({ navigation }) {
  const [Test, setTest] = useState("Amanda Lee");
  let [Hobbies, setHobbies] = useState([
    "Drawing",
    "Food",
    "Animals",
    "Comedy",
  ]);
  let Tab = [];

  // const FillHobbies = () => {
  //   return Tab;
  // };

  useEffect(() => {
    Hobbies.map(
      (item, i) =>
        Tab.push(
          <View style={Styles.Hobbie} key={i}>
            <Text>{item}</Text>
            <Entypo
              name="circle-with-minus"
              style={{ position: "absolute", right: -7 }}
              size={20}
              color={Colors.MAIN_COLOR}
            />
            {/* onPress={RemouveHobbie(i)} */}
          </View>
        )

      // <Text>Test</Text>
    );
    console.log("Tab", Tab);
  }, []);

  // const RemouveHobbie = (index) => {
  //   // Hobbies.splice(index, 1);
  //   // console.log("Test", index);
  //   console.log("Teeeeeeeeeest");
  // };

  return (
    <SafeAreaView>
      <ScrollView style={{ marginBottom: 20 }}>
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
          {/* <View></View> */}
          <Feather name="settings" size={25} style={{ color: "transparent" }} />
        </View>

        <Text style={Styles.Descriprion}>
          Let's add images of you doing exciting staff to spice up your profile
        </Text>
        <View style={Styles.Container}>
          {/* ::::::::: Profile Info :::::::: */}
          <View style={Styles.ProileInfo}>
            <View style={[Styles.InfoItem]}>
              <View style={Styles.InfoIconContainer}>
                <Avatar.Image
                  style={[Styles.InfoIcon]}
                  source={require("../../../assets/img/Profile/Rectangle_2137.png")}
                  size={40}
                />
              </View>
              <TextInput
                style={[
                  Styles.UserName,
                  {
                    marginLeft: 20,
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                ]}
                placeholder={Test}
              />
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
                {/* <Text style={Styles.Info}>Woman</Text> */}
                <TextInput style={Styles.Info} placeholder="Woman" />
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
                <TextInput style={Styles.Info} placeholder="21/06/1997" />
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
                <TextInput
                  style={Styles.Info}
                  placeholder="amanda.lee@gmail.com"
                />
              </View>
            </View>
          </View>

          {/* ::::::::: Images :::::::: */}
          <View style={Styles.ProileInfo}>
            <View style={Styles.ImagesArea}>
              <View style={[Styles.MainImage]}>
                <Image
                  style={{ width: "100%", height: "100%", borderRadius: 10 }}
                  source={require("../../../assets/img/Profile/Rectangle_2137.png")}
                />
                <View style={EditProfileStyle.EditPicture}>
                  <FontAwesome name="file-picture-o" size={11} color="white" />
                  <Text style={{ color: "white", fontSize: 12 }}>Change</Text>
                </View>
              </View>
              <View
                style={{
                  justifyContent: "space-between",
                }}
              >
                <View style={[Styles.Image]}>
                  <Image
                    style={{ width: "100%", height: "100%", borderRadius: 10 }}
                    source={require("../../../assets/img/Profile/Rectangle_2137.png")}
                  />
                  <View style={EditProfileStyle.EditPicture}>
                    <FontAwesome
                      name="file-picture-o"
                      size={11}
                      color="white"
                    />
                    <Text style={{ color: "white", fontSize: 12 }}>Change</Text>
                  </View>
                </View>
                <View style={[Styles.Image]}>
                  <Image
                    style={{ width: "100%", height: "100%", borderRadius: 10 }}
                    source={require("../../../assets/img/Profile/Rectangle_2137.png")}
                  />
                  <View style={EditProfileStyle.EditPicture}>
                    <FontAwesome
                      name="file-picture-o"
                      size={11}
                      color="white"
                    />
                    <Text style={{ color: "white", fontSize: 12 }}>Add</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* ::::::::: Bio ::::::::: */}
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
            <TextInput
              style={Styles.BioDescription}
              placeholder="Leaving a bit of sparkle everywhere I go"
            />
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
              <Entypo
                name="circle-with-plus"
                style={{ position: "absolute", right: 0, marginRight: 10 }}
                size={24}
                color={Colors.MAIN_COLOR}
                onPress={() => {
                  alert("TEEEEEEEEEEST");
                }}
              />
            </View>
            <View style={Styles.HobbiesArea}>
              {Hobbies.map(
                (item, i) => (
                  <View style={Styles.Hobbie} key={i}>
                    <Text>{item}</Text>
                    <Entypo
                      name="circle-with-minus"
                      style={{ position: "absolute", right: -7 }}
                      size={20}
                      color={Colors.MAIN_COLOR}
                    />
                    {/* onPress={RemouveHobbie(i)} */}
                  </View>
                )

                // <Text>Test</Text>
              )}

              {/* {FillHobbies()} */}
              {/* {Tab} */}

              {/* <View style={Styles.Hobbie}>
                <Text>Drawing</Text>
                <Entypo
                  name="circle-with-minus"
                  style={{ position: "absolute", right: -7 }}
                  size={20}
                  color={Colors.MAIN_COLOR}
                  onPress={() => {
                    alert("TEEEEEEEEEEST");
                  }}
                />
              </View>
              <View style={Styles.Hobbie}>
                <Text>Food</Text>
                <Entypo
                  name="circle-with-minus"
                  style={{ position: "absolute", right: -7 }}
                  size={20}
                  color={Colors.MAIN_COLOR}
                  onPress={() => {
                    alert("TEEEEEEEEEEST");
                  }}
                />
              </View>
              <View style={Styles.Hobbie}>
                <Text>Animals</Text>
                <Entypo
                  name="circle-with-minus"
                  style={{ position: "absolute", right: -7 }}
                  size={20}
                  color={Colors.MAIN_COLOR}
                  onPress={() => {
                    alert("TEEEEEEEEEEST");
                  }}
                />
              </View>
              <View style={Styles.Hobbie}>
                <Text>Comedy</Text>
                <Entypo
                  name="circle-with-minus"
                  style={{ position: "absolute", right: -7 }}
                  size={20}
                  color={Colors.MAIN_COLOR}
                  onPress={() => {
                    alert("TEEEEEEEEEEST");
                  }}
                />
              </View> */}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
