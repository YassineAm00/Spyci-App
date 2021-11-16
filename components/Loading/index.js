import React from "react";
import { ActivityIndicator, View } from "react-native";
import Styles from "./styles";
import Colors from "../../assets/styles/Colors";

const Loading = () => {
  return (
    <View style={[Styles.container, Styles.horizontal]}>
      <ActivityIndicator size="large" color={Colors.MAIN_COLOR} />
    </View>
  );
};

export default Loading;
