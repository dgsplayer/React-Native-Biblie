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
    titleAd : {
        color: colors.dark_blue,
        fontSize: 13
    },
    scrollViewStyle : {
        padding: 20
    },
    titleLocation : {
        color: 'grey',
        fontSize: 12
    },
    viewRight : {
        width: '40%',
        height: 120,
    },
    imageAd : {
        width: '100%',
        height: '100%'
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
    viewGrey : {
        width: window.width,
        backgroundColor: "#F1F1F1",
        padding: 20
    },

    cardAdStyle : {
        width: window.width * 0.9,
        padding: 20,
        // flexDirection: 'row', 
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        shadowOpacity: 1,
        shadowRadius: 1,
        shadowColor: 'grey',
        shadowOffset: { height: 0, width: 0 },
        marginBottom: 20,
    },

    viewWhite : {
        width: window.width,
        backgroundColor: "white",
        padding: 20
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

    viewContainer : {
        flex: 1,
        width: window.width,
        backgroundColor: "rgba(255, 255, 255, 1)",
      },
      
    viewContent: {
        marginBottom: 20
    }

});
