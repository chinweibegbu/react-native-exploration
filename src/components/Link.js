import { StyleSheet, Text } from "react-native";

function Link(props) {
  return <Text {...props} role="link" style={[styles.link, props.style]} />;
}

const styles = StyleSheet.create({
  link: {
    color: "#1B95E0",
  },
});

export default Link;
