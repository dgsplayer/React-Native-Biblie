import { StyleSheet, Dimensions, Platform } from 'react-native';
import colors from '../../../styles/GlobalColors';

const window = Dimensions.get('window');
const ISX = Platform.OS === "ios" && (window.height > 800 || window.width > 800) ? true : false;
const sizeFoto = window.width * 0.38;
export default StyleSheet.create({
    viewContainer : {
        flex: 1,
        width: window.width,
        backgroundColor: "rgba(255, 255, 255, 1)",
      },
    container: {
        flex: 1
    },
    viewGrey : {
        width: window.width,
        backgroundColor: "#F1F1F1",
        padding: 20
    },

    viewWhite : {
        width: window.width,
        backgroundColor: "white",
        padding: 20
    },
    scrollview : {
        paddingVertical: 20,
    },

    containerForm : {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },

    labelStyle : {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.dark_blue,
        marginBottom: 10,
      },

    imageButton : {
        width: sizeFoto,
        height: sizeFoto,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center',
        shadowOpacity: 1,
        shadowRadius: 2,
        shadowColor: '#B6B6B6',
        shadowOffset: { height: 0, width: 0 },
        elevation: 3
    },

    textImageButton : {
        color: colors.dark_blue,
        fontSize: 14
    }
})
