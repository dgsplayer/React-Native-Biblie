import { StyleSheet, Dimensions, Platform } from 'react-native';

const window = Dimensions.get("window");
const ISX = Platform.OS === "ios" && (window.height > 800 || window.width > 800) ? true : false;

export default StyleSheet.create({
  container: {
    flex: 1,
    width: window.width,
    // backgroundColor: "rgba(255, 255, 255, 1)",
    backgroundColor: '#eeeeee',
    alignItems: "center",
    justifyContent: "center"
  }
});