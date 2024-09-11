import React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import Link from "./components/Link";
import Shape from "./components/Shape";
import LoadingImage from "./components/LoadingImage";
import { logoUri } from "./lib/logoUri";

function App() {
  return (
    <ScrollView style={styles.app}>
      <View style={styles.header}>
        <Image
          accessibilityLabel="React logo"
          source={{ uri: logoUri }}
          resizeMode="contain"
          style={styles.logo}
        />
        <Text style={styles.title}>React Native for Web</Text>
      </View>
      <Text style={styles.text}>
        This is an example of an app built with{" "}
        <Link href="https://github.com/facebook/create-react-app">
          Create React App
        </Link>{" "}
        and{" "}
        <Link href="https://github.com/necolas/react-native-web">
          React Native for Web
        </Link>
      </Text>
      <View style={styles.main}>
        <Shape />
        <LoadingImage />
      </View>
      <Text style={styles.text}>
        To get started, edit{" "}
        <Link href="https://codesandbox.io/s/q4qymyp2l6/" style={styles.code}>
          src/App.js
        </Link>
        .
      </Text>
      <Pressable onPress={() => {}} style={buttonStyles.button}>
        <Text style={buttonStyles.text}>Complete Task</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500,
    padding: 10,
  },
  main: {
    marginHorizontal: "auto",
    width: "90%",
    height: 200,
    backgroundColor: "pink",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  logo: {
    height: 80,
  },
  header: {
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center",
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1rem",
    marginVertical: "1em",
    textAlign: "center",
  },
  code: {
    fontFamily: "monospace, monospace",
  },
});

const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: "#2196F3",
    borderRadius: 2,
  },
  text: {
    color: "#fff",
    fontWeight: "500",
    padding: 8,
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default App;
