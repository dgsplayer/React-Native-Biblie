import { StyleSheet, Dimensions, Platform } from 'react-native'

import colors from '../../../styles/GlobalColors'

const window = Dimensions.get('window');
const ISX = Platform.OS === "ios" && (window.height > 800 || window.width > 800) ? true : false;

export default StyleSheet.create({

    viewContainer : {
        flex: 1,
        width: window.width,
        backgroundColor: "rgba(255, 255, 255, 1)",
      },
    container : {
        flex: 1,
        width: window.width,
        backgroundColor: "rgba(255, 255, 255, 1)",
    },
    viewHighlights : {
        width: window.width,
        paddingVertical: 20,
        backgroundColor: colors.dark_blue,
    },

    viewTitleHighlights : {
        paddingHorizontal: 20,
        marginBottom: 10
    },

    titleHighlights : {
        color: 'white',
        fontSize: 16
    },
    viewBox : {
        width: '100%',
        backgroundColor: '#F2F2F2',
        padding: 10,
        alignItems: 'center',
        // justifyContent: 'space-between',
        // alignContent: 'space-between',
        // marginTop: 10,
    },

      viewTitleBox : {
        paddingHorizontal: 20,
        paddingTop: 10
    },

      viewCard : {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'flex-start',
        marginTop: 20
    },

    cardStyles: {
        backgroundColor: "white",
        height: 225,
        marginBottom: 10,
        width: '90%',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'flex-start'
      }
})
