import React, { useState, useEffect } from "react";
import { View, Image, ScrollView, TextInput, Pressable } from "react-native";

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

//:::::::::: THEME ::::::::::
import Styles from "../styles";
import EditProfileStyle from "./styles";
import Colors from "../../../assets/styles/Colors";

// Loading
import Loading from "../../Loading";

// Firebase
import * as firebase from "firebase";

export default function Profile({ navigation }) {
  const [Nom, setNom] = useState();
  const [Gender, setGender] = useState();
  const [DateBrth, setDateBrth] = useState();
  const [Email, setEmail] = useState();
  const [Bio, setBio] = useState();
  // const [Test, setTest] = useState();
  // const [Test, setTest] = useState();
  let [user, setUser] = useState(null);

  let [Hobbies, setHobbies] = useState([
    "Drawing",
    "Food",
    "Animals",
    "Comedy",
  ]);
  let Tab = [];

  const fetchBlogs = async () => {
    await firebase
      .firestore()
      .collection("Profile")
      .doc("lqRBgIx726rMTy9NXLjr")
      .get()
      .then((snapshot) => {
        const data = snapshot.data();
        setUser({
          Bio: data.Bio,
          CoordonneesGpsProf: data.CoordonneesGpsProf,
          DateAniv: data.DateAniv,
          Email: data.Email,
          Genre: data.Genre,
          GenreRech: data.GenreRech,
          NbreOuvertAppAnnee: data.NbreOuvertAppAnnee,
          NbreOuvertAppJour: data.NbreOuvertAppJour,
          NbreOuvertAppMois: data.NbreOuvertAppMois,
          Nom: data.Nom,
          NumTel: data.NumTel,
          Status: data.Status,
          TpsPasseAppAnnee: data.TpsPasseAppAnnee,
          TpsPasseAppJour: data.TpsPasseAppJour,
          TpsPasseAppMois: data.TpsPasseAppMois,
        });
      });
  };

  // useEffect(() => {
  //   fetchBlogs();
  // }, []);

  const UpdateUser = async () => {
    Nom ? (user.Nom = Nom) : setNom(user.Nom);
    DateBrth ? (user.DateAniv = DateBrth) : setDateBrth(user.DateAniv);
    Gender ? (user.Genre = Gender) : setGender(user.Genre);
    Email ? (user.Email = Email) : setEmail(user.Email);
    Bio ? (user.Bio = Bio) : setBio(user.Bio);

    await firebase
      .firestore()
      .collection("Profile")
      .doc("lqRBgIx726rMTy9NXLjr")
      .update(user)
      .then((snapshot) => {
        console.log("done");
        // navigation.addListener("focus", () => {
        navigation.navigate("Profile");
        // Do whatever you want
        // });
      });
    console.log(user);
  };

  useEffect(() => {
    fetchBlogs();

    Hobbies.map((item, i) =>
      Tab.push(
        <View style={Styles.Hobbie} key={i}>
          <Text>{item}</Text>
          <Entypo
            name="circle-with-minus"
            style={{ position: "absolute", right: -7 }}
            size={20}
            color={Colors.MAIN_COLOR}
          />
        </View>
      )
    );
    console.log("Tab", Tab);
    console.ignoredYellowBox = ["Setting a timer"];
  }, []);

  if (user == null) {
    return <Loading />;
  } else {
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
            <Feather
              name="settings"
              size={25}
              style={{ color: "transparent" }}
            />
          </View>

          <Text style={Styles.Descriprion}>
            Let's add images of you doing exciting staff to spice up your
            profile
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
                  onChangeText={setNom}
                  placeholder={user.Nom}
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
                  <TextInput
                    style={Styles.Info}
                    onChangeText={setGender}
                    placeholder={user.Genre == "F" ? "Woman" : "Men"}
                  />
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
                  <TextInput
                    style={Styles.Info}
                    onChangeText={setDateBrth}
                    placeholder={user.DateAniv}
                  />
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
                    onChangeText={setEmail}
                    placeholder={user.Email}
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
                    <FontAwesome
                      name="file-picture-o"
                      size={11}
                      color="white"
                    />
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
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 10,
                      }}
                      source={require("../../../assets/img/Profile/Rectangle_2137.png")}
                    />
                    <View style={EditProfileStyle.EditPicture}>
                      <FontAwesome
                        name="file-picture-o"
                        size={11}
                        color="white"
                      />
                      <Text style={{ color: "white", fontSize: 12 }}>
                        Change
                      </Text>
                    </View>
                  </View>
                  <View style={[Styles.Image]}>
                    <Image
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 10,
                      }}
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
                onChangeText={setBio}
                placeholder={user.Bio}
              />
            </View>

            {/* :::::::::: Hobbies :::::::::: */}
            <View style={[Styles.ProileInfo, , { marginBottom: 50 }]}>
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
              <View style={[Styles.HobbiesArea]}>
                {Hobbies.map((item, i) => (
                  <View style={Styles.Hobbie} key={i}>
                    <Text>{item}</Text>
                    <Entypo
                      name="circle-with-minus"
                      style={{ position: "absolute", right: -7 }}
                      size={20}
                      color={Colors.MAIN_COLOR}
                    />
                  </View>
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={Styles.FixedArea}>
          <Pressable style={Styles.MainButton} onPress={UpdateUser}>
            <Text style={Styles.text}>DONE</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }
}
