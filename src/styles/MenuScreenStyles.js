import { StyleSheet, Dimensions, Platform } from 'react-native';
import colors from '../../../styles/GlobalColors';

const window = Dimensions.get('window');
const ISX = Platform.OS === "ios" && (window.height > 800 || window.width > 800) ? true : false;
const sizeFoto = window.width * 0.38;
export default StyleSheet.create({

    container: {
        flex: 1
    },

    scrollview : {
        paddingVertical: 20,
    },

    containerForm : {
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal: 20,
        top: 10
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
