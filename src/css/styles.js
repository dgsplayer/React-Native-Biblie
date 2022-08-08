import { StyleSheet,Dimensions } from "react-native";

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      flex: 1,
      borderRadius: 4,
      borderWidth: 0.5,
      padding: 20,
      borderColor: '#d6d7da',
      backgroundColor: "#ffffff"
    },
    content: {
      backgroundColor: "#ffffff"
    },
    bodyText: {
 		color: 'white'
  },
  bodyHead: {
 		marginTop: 0,
 		backgroundColor: '#000000'
  },
  left: {
    flex: 0.1,
    backgroundColor: "#ffffff"
  },
  backArrow: {
    // justifyContent: "center",
    // alignItems: "center",
    bottom:5,
    ...Platform.select({
      ios: {
        paddingTop: Metrics.WIDTH * 0.04
      }
    })
  },
    buttons: {
        // flex: 0.15,
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 20
    },
    marginTop: {
        marginTop: 15
    },
    button: {
        marginTop: 10,
        marginBottom: 10,
        color: "#FFFFFF"
    },
    selectedButton: {
        backgroundColor: "#006699"
    },
    body: {
        // flex: 0.8,
        justifyContent: "flex-start",
        alignItems: "center"
    },
    subTitle: {
        marginVertical: 10
    },
    viewport: {
        // flex: 1,
        alignSelf: "center",
        backgroundColor: "white"
    },
    textCenter: {
        // flex: 1,
        alignSelf: "center"
    },
    defaultWidth: {
        width: '100%',
        borderBottomWidth: 0.5,
      borderColor: '#333333'
    },
    textBlack: {
        color: "black"
    },
    sidebarTop: {
        alignSelf: "center",
        marginVertical: 40,
        color: "white"
    },
    sidebarBottom: {
        alignSelf: "center",
          padding: 20
    },
    sidebarImage: {
      width: 150,
      height: 150,
      alignSelf: "center",
      marginVertical: 20,
    },
});

export default styles;
