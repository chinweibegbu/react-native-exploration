import React from "react";
import { StyleSheet } from "react-native";

function Shape() {
  return <div style={styles.shape}></div>;
}

const styles = StyleSheet.create({
  shape: {
    border: "1px solid black",
    borderRadius: "50%",
    width: 90,
    height: 90,
    backgroundColor: "black",
  },
});

export default Shape;
