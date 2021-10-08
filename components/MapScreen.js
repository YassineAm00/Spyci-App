import React, { useState, useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
} from "react-native";
import MapView , { Marker , Callout } from "react-native-maps";


export default function MapScreen(props) {

  return (
    <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: props.latitude,
            longitude: props.longitude,
            latitudeDelta: 0.004757,
            longitudeDelta: 0.006866,
          }}
        >
           <Marker
            coordinate={{ latitude: props.latitude, longitude: props.longitude }}
          ></Marker> 
        </MapView>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
