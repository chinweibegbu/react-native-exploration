import React, { useState, useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
import Shape from "./Shape";

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function LoadingImage() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    delay(2000).then(() => {
      console.log("ran after 2 seconds passed");
      setIsLoading(false);
    });
  });

  return (
    <View>
      {isLoading ? (
        <Shape />
      ) : (
        <Image
          accessibilityLabel="Two black women"
          style={styles.image}
          // src={"images/black-women.jpg"}
          source={require("../images/black-women.jpg")}
          resizeMode="contain"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    border: "2px solid black",
    borderRadius: "50%",
    width: 90,
    height: 90,
  },
});

export default LoadingImage;
