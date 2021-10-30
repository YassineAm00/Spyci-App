import React, { useState } from "react";
import { View, Image, Pressable, ScrollView } from "react-native";

import { Avatar, Text } from "react-native-paper";
import { AntDesign, FontAwesome, Feather, Entypo } from "@expo/vector-icons";
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
    return <Text>Waiting ... </Text>;
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
            {/* <Text>Test</Text> */}
            <Text
              style={{
                fontFamily: "main-font",
                color: Colors.MAIN_COLOR,
                fontSize: 25,
              }}
            >
              My Profile
            </Text>
            <Feather name="settings" size={25} color="#FF0031" />
          </View>
          <Text style={Styles.Descriprion}>
            Let's add images of you doing exciting staff to spice up your
            profile
          </Text>

          <View style={Styles.Container}>
            {/* :::::::::: Profie Info :::::::::: */}
            <View style={Styles.ProileInfo}>
              <View style={{ position: "absolute", top: 20, right: 20 }}>
                <Avatar.Image
                  source={require("../../assets/img/Profile/Rectangle_2137.png")}
                  size={50}
                />
              </View>
              <View style={Styles.InfoItem}>
                <AntDesign
                  name="user"
                  style={Styles.InfoIcon}
                  color={Colors.MAIN_COLOR}
                  size={25}
                />
                <View>
                  <Text style={Styles.InfoTitle}>NAME</Text>
                  <Text style={Styles.Info}>Amanda Lee</Text>
                </View>
              </View>
              <View style={Styles.InfoItem}>
                <Feather
                  name="calendar"
                  style={Styles.InfoIcon}
                  color={Colors.MAIN_COLOR}
                  size={25}
                />
                <View>
                  <Text style={Styles.InfoTitle}>DATE OF BIRTH</Text>
                  <Text style={Styles.Info}>21/06/1997</Text>
                </View>
              </View>
              <View style={Styles.InfoItem}>
                <FontAwesome
                  name="envelope-o"
                  style={Styles.InfoIcon}
                  color={Colors.MAIN_COLOR}
                  size={25}
                />
                <View>
                  <Text style={Styles.InfoTitle}>EMAIL</Text>
                  <Text style={Styles.Info}>amanda.lee@gmail.com</Text>
                </View>
              </View>
              <View style={Styles.InfoItem}>
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
              </View>
            </View>

            {/* :::::::::: Bio :::::::::: */}
            <View style={Styles.ProileInfo}>
              <View
                style={{
                  flexDirection: "column",
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Entypo
                    name="text"
                    style={{ marginRight: 20 }}
                    size={24}
                    color="#FF0031"
                  />
                  <Text
                    style={{
                      fontFamily: "Poppins_600SemiBold",
                      color: "#777777",
                    }}
                  >
                    BIO
                  </Text>
                </View>
                <Text style={Styles.BioDescription}>
                  Leaving a bit of sparkle everywhere I go{" "}
                </Text>
              </View>
            </View>

            {/* ::::::::: Images :::::::: */}
            <View style={Styles.ImagesArea}>
              <View style={{ textAlign: "center" }}>
                <Image
                  style={Styles.MainImage}
                  source={require("../../assets/img/Profile/Rectangle_2137.png")}
                />
                <View style={Styles.ImageAction}>
                  <Feather name="image" size={20} color="white" />
                  <Text
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
                </View>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    height: "47%",
                    width: 90,
                    borderRadius: 8,
                    marginLeft: 15,
                  }}
                >
                  <Image
                    style={{ height: "100%", width: "100%", borderRadius: 8 }}
                    source={require("../../assets/img/Profile/Rectangle_2137.png")}
                  />
                  <View style={Styles.ImageAction}>
                    <Feather name="image" size={20} color="white" />
                    <Text
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
                  </View>
                </View>
                <View
                  style={{
                    height: "47%",
                    width: 90,
                    borderRadius: 8,
                    marginLeft: 15,
                  }}
                >
                  <Image
                    style={{ height: "100%", width: "100%", borderRadius: 8 }}
                    source={require("../../assets/img/Profile/Rectangle_2137.png")}
                  />
                  <View style={Styles.ImageAction}>
                    <Feather name="image" size={20} color="white" />
                    <Text
                      style={{
                        textAlign: "center",
                        marginLeft: 10,
                        color: "white",
                        fontFamily: "Poppins_500Medium",
                      }}
                    >
                      Add
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          {/* <Pressable style={styles.button}>
          <Text style={styles.text}>DONE</Text>
        </Pressable> */}
        </ScrollView>
        <View style={Styles.FixedArea}>
          <Pressable style={Styles.MainButton}>
            <Text style={Styles.text}>DONE</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }
}
