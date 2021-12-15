import React, { useState } from "react";
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
import { SafeAreaView } from "react-native-safe-area-context";

//:::::::::: THEME ::::::::::
import Styles from "./styles";
import Colors from "../../assets/styles/Colors";

// Loading
import Loading from "../Loading";

export default function Profile({ navigation }) {
  const fontsLoaded = useFonts({
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
    "main-font": require("../../assets/fonts/CherryAndKissesPersonalUse-E2W4.ttf"),
    "Test-Font": require("../../assets/fonts/Nunito-SemiBold.ttf"),
  });

  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(0);
  const [value, setValue] = useState(0);

  if (!fontsLoaded[0]) {
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
                <Text style={[Styles.UserName]}>Amanda Lee</Text>
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
                  <Text style={Styles.Info}>Woman</Text>
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
                  <Text style={Styles.Info}>21/06/1997</Text>
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
                  <Text style={Styles.Info}>amanda.lee@gmail.com</Text>
                </View>
              </View>
              {/* <View style={Styles.InfoItem}>
                <AntDesign
                  name="phone"
                  style={Styles.InfoIcon}
                  color={Colors.MAIN_COLOR}
                  size={25}
                />
                <View>
                  <Text style={Styles.InfoTitle}>TELEPHONE</Text>
                  <Text style={Styles.Info}>+33 6 20 77 15 22</Text>
                </View>
              </View> */}
            </View>

            {/* <View style={Styles.ImageAction}>
                  <Feather name="image" size={20} color="white" />
                  {/* <Text
                    style={{
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      marginLeft: 5,
                      marginTop: 1,
                      color: "white",
                      fontFamily: "Poppins_500Medium",
                      fontSize: 12,
                    }}
                  >
                    Change
                  </Text> 
                </View> */}
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
              <Text style={Styles.BioDescription}>
                Leaving a bit of sparkle everywhere I go
              </Text>
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
