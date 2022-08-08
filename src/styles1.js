import { Platform, StyleSheet } from "react-native";
import { Fonts, Metrics, Colors } from "./Themes/";

const styles = StyleSheet.create({
  container: {
    height: Metrics.HEIGHT,
    width: Metrics.WIDTH,
    backgroundColor: Colors.snow
  },

  header: {
    backgroundColor: "#0e1130",
    height: Metrics.HEIGHT * 0.1,
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {
        paddingTop: Metrics.HEIGHT * 0.02
      },
      android: {
        paddingTop: Metrics.WIDTH * 0.04
      }
    }),
    elevation: 0,
    paddingLeft: Metrics.WIDTH * 0.05,
    paddingRight: Metrics.WIDTH * 0.05
  },

  left: {
    flex: 0.5,
    backgroundColor: Colors.transparent
  },

  body: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.transparent
  },

  textTitle: {
    color: Colors.snow,
    fontSize: Fonts.moderateScale(18),
    alignSelf: "center",
    fontFamily: Fonts.type.helveticaNeueLight
  },

  right: {
    flex: 0.5,
    alignItems: "center"
  },

  backArrow: {
    justifyContent: "center",
    alignItems: "center"
  },

  heartBg: {
    width: Metrics.WIDTH * 0.054,
    height: Metrics.WIDTH * 0.054,
    borderRadius: Metrics.WIDTH * 0.027,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: Colors.snow,
    alignItems: "center",
    justifyContent: "center"
  },

  heartIcon: {
    color: Colors.snow,
    alignSelf: "center"
  },

  alertBg: {
    width: Metrics.WIDTH * 0.03,
    height: Metrics.WIDTH * 0.03,
    borderRadius: Metrics.WIDTH * 0.015,
    backgroundColor: "#ff0000",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: -(Metrics.WIDTH * 0.018)
  },

  alertTxt: {
    fontSize: Fonts.moderateScale(8),
    fontFamily: Fonts.type.sfuiDisplayMedium,
    color: Colors.snow
  },

  bagIcon: {
    marginLeft: Metrics.WIDTH * 0.04,
    color: Colors.snow
  },

  content: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT * 0.9,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    alignContent: "flex-start",
    justifyContent: "space-between"
  },

  rowMain: {
    width: Metrics.WIDTH * 0.5,
    height: Metrics.HEIGHT * 0.3,
    justifyContent: "center",
    alignItems: "center",
    borderColor: Colors.veryLightGray,
    backgroundColor: Colors.white,
    borderWidth: 0.5
  },

  imageContainer: {
    width: Metrics.HEIGHT * 0.065,
    height: Metrics.HEIGHT * 0.065,
    justifyContent: "center",
    alignItems: "center"
  },

  itemImgStyle: {
    width: Metrics.HEIGHT * 0.055,
    height: Metrics.HEIGHT * 0.055,
    resizeMode: "contain"
  },

  itemText: {
    color: Colors.drakBlue,
    fontFamily: Fonts.type.helveticaNeueLight,
    fontSize: Fonts.moderateScale(16),
    marginTop: Metrics.HEIGHT * 0.03
  },

  notificationCircle: {
    position: "absolute",
    top: 0,
    left: Metrics.HEIGHT * 0.045,
    width: Metrics.HEIGHT * 0.026,
    height: Metrics.HEIGHT * 0.026,
    borderRadius: Metrics.HEIGHT * 0.013,
    backgroundColor: "#00204B",
    justifyContent: "center",
    alignItems: "center"
  },

  notification: {
    color: Colors.white,
    fontFamily: Fonts.type.helveticaNeueLight,
    fontSize: Fonts.moderateScale(12),
    backgroundColor: "transparent"
  }
});
export default styles;
