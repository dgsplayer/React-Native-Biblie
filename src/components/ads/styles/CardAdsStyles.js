import { StyleSheet, Dimensions, Platform } from 'react-native';

// constants
import colors from '../../../styles/GlobalColors'

const window = Dimensions.get('window');
const ISX = Platform.OS === "ios" && (window.height > 800 || window.width > 800) ? true : false;

export default StyleSheet.create({
    cardAdStyle : {
        width: window.width * 0.9,
        padding: 20,
        flexDirection: 'row',
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

    viewLeft : {
        width: '60%',
        height: 140,
        justifyContent: 'space-around'
    },

    viewRight : {
        width: '40%',
        height: 120,
    },

    titleAd : {
        color: colors.dark_blue,
        fontSize: 13
    },

    titleLocation : {
        color: 'grey',
        fontSize: 12
    },

    imageAd : {
        width: '100%',
        height: '100%'
    }
});