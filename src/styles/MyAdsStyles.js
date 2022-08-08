import { StyleSheet, Dimensions, Platform } from 'react-native';

import colors from '../../../styles/GlobalColors'

const window = Dimensions.get('window');
const ISX = Platform.OS === "ios" && (window.height > 800 || window.width > 800) ? true : false;

export default StyleSheet.create({

    container : {
        flex: 1,
        width: window.width,
        backgroundColor: "rgba(255, 255, 255, 1)",
    },

    scrollViewStyle : {
        padding: 20
    },

    viewHeader : {
        width: window.width,
        paddingTop: (ISX === true) ? 40 : 20,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 0.5,
        borderColor: '#B6B6B6',
        elevation: 3,
        backgroundColor: '#F19301',
        shadowOpacity: 1,
        shadowRadius: 1,
        shadowColor: 'black',
        shadowOffset: { height: 0, width: 0 }
    },

    titlePageStyle : {
        color: colors.dark_blue,
        fontWeight: 'bold',
        fontSize: 16
    },

    viewButtonAdd : {
        width: window.width * 0.9
    },

    buttonAddStyle : {
        backgroundColor: colors.dark_blue
    },

    viewTabButton : {
        width: window.width,
        height: 40,
        marginTop: 10,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: "#B6B6B6"
    },

    tabButtonStyle : {
        width: '50%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },

    tabButtonActiveStyle : {
        width: '50%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.dark_blue
    },

    textTabButton : {
        color: colors.dark_blue
    },

    textTabButtonActive : {
        color: "white"
    },

    viewContent: {
        marginBottom: 20
    }

});
