import React, { useState } from "react";
import { View, StyleSheet, Image, Pressable , Text , Button } from "react-native";



export default function Profile({navigation}) {
  
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Location"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      // backgroundColor: "red",
      width: "100%",
      height: "100%",
      padding: 20,
    },

  });
  