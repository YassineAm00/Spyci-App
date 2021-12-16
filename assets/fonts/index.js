import React, { useState } from "react";
import { View } from "react-native";
import {
  useFonts,
} from "@expo-google-fonts/poppins";

export default function Fonts({ navigation }) {
  const fontsLoaded = useFonts({
    "main-font": require("./CherryAndKissesPersonalUse-E2W4.ttf"),
    "Test-Font": require("./Nunito-SemiBold.ttf"),
  });

    return (
      <View>
      </View>
    );
}
