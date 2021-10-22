// import React, { useState } from "react";
// import { View, StyleSheet, Image, Pressable } from "react-native";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Pressable,
  Button,
  ScrollView,
} from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";
import {
  AntDesign,
  FontAwesome,
  Foundation,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
// import Slider from "rn-range-slider";
import RangeSlider, { Slider } from "react-native-range-slider-expo";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
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
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";

export default function Profile({ navigation }) {
  const fontsLoaded = useFonts({
    // Poppins_100Thin,
    // Poppins_100Thin_Italic,
    // Poppins_200ExtraLight,
    // Poppins_200ExtraLight_Italic,
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
    // Poppins_800ExtraBold,
    // Poppins_800ExtraBold_Italic,
    // Poppins_900Black,
    // Poppins_900Black_Italic,
  });

  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(0);
  const [value, setValue] = useState(0);

  if (!fontsLoaded[0]) {
    return <Text>Waiting ... </Text>;
  } else {
    return (
      <ScrollView>
        <View
          style={{
            position: "absolute",
            top: 40,
            right: 25,
            // backgroundColor: "red",
            // height: 20,
            width: 200,

            // justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              marginBottom: 7,
              fontFamily: "Poppins_500Medium",
            }}
          >
            <Image
              style={{
                height: 33,
                width: 30,
                // borderRadius: 10,
                // position: "relative",
              }}
              source={require("../assets/img/Profile/3-layers.png")}
            />

            <Text
              style={{
                fontSize: 20,
                // fontWeight: "bold",
                color: "#FF0031",
                alignSelf: "center",
                marginLeft: 7,
                fontFamily: "Poppins_600SemiBold",
              }}
            >
              PROFILE SPYCI
            </Text>
          </View>
          <Text
            style={{
              textAlign: "right",
              fontSize: 10,
              color: "gray",
              fontFamily: "Poppins_400Regular",
            }}
          >
            Let's add images of you doing exciting staff to spice up your
            profile
          </Text>
        </View>

        <View style={styles.container}>
          <View style={styles.header}>
            {/* <Icon name="arrow-left" size={25} color="#FF0031" /> */}
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesome name="long-arrow-left" size={25} color="#FF0031" />
            </TouchableOpacity>
          </View>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  // padding: 20,
                  backgroundColor: "white",
                  width: 55,
                  height: 55,
                  borderRadius: 55 / 2,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 3,
                  borderColor: "#FF0031",
                }}
              >
                {/* <Text>test</Text> */}
                <Avatar.Image
                  source={require("../assets/img/Profile/Rectangle_2137.png")}
                  size={43}
                />
                <View
                  style={{
                    position: "absolute",
                    top: 6,
                    right: -8,
                    backgroundColor: "white",
                    width: 20,
                    height: 20,
                    borderRadius: 20 / 2,
                    justifyContent: "center",
                    alignItems: "center",
                    shadowColor: "#777",
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.22,
                    shadowRadius: 2.22,
                    elevation: 7,
                  }}
                >
                  {/* <Ionicons name="pencil-sharp" size={13} color="#FF0031" /> */}
                  <MaterialCommunityIcons
                    name="pencil-outline"
                    size={13}
                    color="#FF0031"
                  />
                </View>
              </View>
              {/* <View style={{ marginLeft: 20 }}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                },
              ]}
            >
              John Doe
            </Title>
            <Caption style={styles.caption}>@j_doe</Caption>
          </View> */}
            </View>
          </View>
          <View
            style={{
              padding: 15,
              borderRadius: 5,
              shadowColor: "#777",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,
              elevation: 4,
            }}
          >
            <View
              style={{
                position: "absolute",
                top: 20,
                right: 20,
                backgroundColor: "white",
                width: 40,
                height: 40,
                borderRadius: 40 / 2,
                justifyContent: "center",
                alignItems: "center",
                shadowColor: "#777",
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                elevation: 7,
              }}
            >
              <Ionicons name="pencil-sharp" size={24} color="#FF0031" />
            </View>
            <View style={styles.Descrow}>
              <AntDesign
                name="user"
                style={{
                  marginTop: "auto",
                  marginBottom: "auto",
                  marginLeft: 10,
                  marginRight: 5,
                }}
                color="#FF0031"
                size={25}
              />
              {/* <Icon name="user-marker-radius"  /> */}
              <View>
                <Text
                  style={{
                    color: "#777777",
                    marginLeft: 20,
                    // fontWeight: "bold",
                    fontSize: 11,
                    fontFamily: "Poppins_600SemiBold",
                  }}
                >
                  NAME
                </Text>
                <Text
                  style={{
                    color: "#BDBDBD",
                    marginLeft: 20,
                    fontSize: 17,
                    fontFamily: "Poppins_400Regular",
                  }}
                >
                  Amanda Lee
                </Text>
              </View>
            </View>
            <View style={styles.Descrow}>
              <Feather
                name="calendar"
                style={{
                  marginTop: "auto",
                  marginBottom: "auto",
                  marginLeft: 10,
                  marginRight: 5,
                }}
                color="#FF0031"
                size={25}
              />
              {/* <Icon name="map-marker-radius"  /> */}
              <View>
                <Text
                  style={{
                    color: "#777777",
                    marginLeft: 20,
                    fontSize: 11,
                    fontFamily: "Poppins_600SemiBold",
                  }}
                >
                  DATE OF BIRTH
                </Text>
                <Text
                  style={{
                    color: "#BDBDBD",
                    marginLeft: 20,
                    fontSize: 17,
                    fontFamily: "Poppins_400Regular",
                  }}
                >
                  21/06/1997
                </Text>
              </View>
            </View>
            <View style={styles.Descrow}>
              <FontAwesome
                name="envelope-o"
                style={{
                  marginTop: "auto",
                  marginBottom: "auto",
                  marginLeft: 10,
                  marginRight: 5,
                }}
                color="#FF0031"
                size={25}
              />
              <View>
                <Text
                  style={{
                    color: "#777777",
                    marginLeft: 20,
                    fontSize: 11,
                    fontFamily: "Poppins_600SemiBold",
                  }}
                >
                  EMAIL
                </Text>
                <Text
                  style={{
                    color: "#BDBDBD",
                    marginLeft: 20,
                    fontSize: 17,
                    fontFamily: "Poppins_400Regular",
                  }}
                >
                  amanda.lee@gmail.com
                </Text>
              </View>
            </View>
            <View style={styles.Descrow}>
              <AntDesign
                name="phone"
                style={{
                  marginTop: "auto",
                  marginBottom: "auto",
                  marginLeft: 10,
                  marginRight: 5,
                }}
                color="#FF0031"
                size={25}
              />
              <View>
                <Text
                  style={{
                    color: "#777777",
                    marginLeft: 20,
                    fontSize: 11,
                    fontFamily: "Poppins_600SemiBold",
                  }}
                >
                  TELEPHONE
                </Text>
                <Text
                  style={{
                    color: "#BDBDBD",
                    marginLeft: 20,
                    fontSize: 17,
                    fontFamily: "Poppins_400Regular",
                  }}
                >
                  +33 6 20 77 15 22
                </Text>
              </View>
            </View>
          </View>

          {/* :::::::::::::::::: Bio :::::::::::::::::: */}
          <View
            style={{
              padding: 15,
              marginTop: 12,
              borderRadius: 5,
              shadowColor: "#777",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,
              elevation: 4,
            }}
          >
            <View
              style={{
                position: "absolute",
                top: 20,
                right: 20,
                backgroundColor: "white",
                width: 40,
                height: 40,
                borderRadius: 40 / 2,
                justifyContent: "center",
                alignItems: "center",
                shadowColor: "#777",
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                elevation: 7,
              }}
            >
              <Ionicons name="pencil-sharp" size={24} color="#FF0031" />
            </View>

            <View
              style={{
                flexDirection: "column",
                paddingVertical: 10,
                paddingHorizontal: 20,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  // justifyContent: "center",
                  alignItems: "center",
                }}
              >
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
              <Text
                style={{
                  fontSize: 12,
                  height: 40,
                  paddingTop: 10,
                  fontFamily: "Poppins_400Regular",
                  color: "#BDBDBD",
                }}
              >
                Leaving a bit of sparkle everywhere I go{" "}
              </Text>
            </View>
          </View>

          {/* ::::::::: Images :::::::: */}
          <View style={styles.changeImages}>
            <View
              style={{
                textAlign: "center",
                // backgroundColor:'red'
              }}
            >
              <Image
                style={{
                  height: 200,
                  width: 150,
                  borderRadius: 10,
                  position: "relative",
                }}
                source={require("../assets/img/Profile/Rectangle_2137.png")}
              />
              <View style={styles.ImageAction}>
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
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: 8,
                  }}
                  source={require("../assets/img/Profile/Rectangle_2137.png")}
                />
                <View style={styles.ImageAction}>
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
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: 8,
                  }}
                  source={require("../assets/img/Profile/Rectangle_2137.png")}
                />
                <View style={styles.ImageAction}>
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
              {/* <Image
            style={{
              height: "47%",
              width: 90,
              borderRadius: 10,
              marginLeft: 15,
            }}
            source={require("../assets/Rectangle_2137.png")}
          /> */}
            </View>
          </View>
        </View>
        <Pressable style={styles.button}>
          <Text style={styles.text}>DONE</Text>
        </Pressable>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    width: "100%",
    height: "100%",
    padding: 20,
  },
  header: {
    // backgroundColor: "white",
    padding: 10,
    marginTop: 20,
  },
  profile_edit: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    paddingTop: 10,
    paddingBottom: 10,
    position: "relative",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  profile_item: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    padding: 5,
  },
  profile_icon: {
    width: "20%",
    // backgroundColor: "red",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
  },
  profile_text: {
    width: "80%",
    color: "gray",
    // backgroundColor: "red",
  },
  edit: {
    backgroundColor: "white",
    width: 40,
    height: 40,
    borderRadius: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    position: "absolute",
    top: 10,
    right: 10,
    elevation: 10,
  },
  penIcon: {
    marginTop: 3,
  },
  bio: {
    padding: 10,
    borderWidth: 1,
  },
  bio_Text: {
    width: "100%",
  },
  text: {
    display: "flex",
    flexDirection: "row",
  },

  // :::::::::::::::::::::::

  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 10,
    // backgroundColor: 'red'
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  Descrow: {
    marginBottom: 7,
    // backgroundColor:"red",
    flexDirection: "row",
  },
  changeImages: {
    marginTop: 12,
    marginBottom: 50,
    flexDirection: "row",
    // backgroundColor: "red",
    justifyContent: "center",
    height: 200,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
  ImageAction: {
    position: "relative",
    bottom: 45,
    marginLeft: "auto",
    marginRight: "auto",
    flexDirection: "row",
    width: 90,
    padding: 7,
    backgroundColor: "rgba(52, 52, 52, 0.6)",
    borderRadius: 50,
  },
  MainButton: {
    backgroundColor: "red",
    position: "absolute",
    bottom: 0,
  },
  button: {
    position: "absolute",
    bottom: 12,
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
});
