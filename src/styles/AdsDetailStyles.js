import { StyleSheet, Dimensions, Platform } from 'react-native';

import colors from '../../../styles/GlobalColors'

const window = Dimensions.get('window');
const ISX = Platform.OS === "ios" && (window.height > 800 || window.width > 800) ? true : false;

export default StyleSheet.create({

    container : {
        flex: 1,
        width: window.width,
        backgroundColor: "rgba(255, 255, 255, 1)",
        alignItems: 'center',
    },

    containerSlideshow : {
        alignItems: 'center', 
        justifyContent: 'center'
    },

    scrollViewStyle : {
        width: window.width,
        paddingTop: 40,
    },

    iconBackStyles: {
        position: 'absolute', 
        top: (ISX === true) ? 40 : 20, 
        left: 20
    },

    viewTitle: {
        padding: 20
    },

    titleStyle : {
        fontSize: 20,
        color: colors.text
    },

    viewInformations : {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
    },

    viewAvatar : {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    viewDistance : {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },

    distanceStyles : {
        color: colors.text,
        fontSize: 14,
        marginLeft: 5
    },

    containerButton : {
        width: window.width * 0.9,
        height: 50,
        position: 'absolute',
        top: 270
    },

    buttonStyle : {
        backgroundColor: colors.dark_blue
    },

    nameStyles : {
        color: colors.text,
        fontSize: 14,
        marginLeft: 10,
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

    title : {
        color: colors.dark_blue,
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },

    descriptionStyles : {
        fontSize: 14,
        color: colors.dark_blue,
        textAlign: 'justify'
    }

});