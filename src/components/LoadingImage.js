import React, { useState, useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
import { MotiView } from "moti";
import { Skeleton } from "moti/skeleton";

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
        <MotiView
          transition={{
            type: "timing",
          }}
          animate={"#ffffff"}
        >
          <Skeleton colorMode="light" radius="round" height={75} width={75} />
        </MotiView>
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
