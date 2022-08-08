import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    mapStyles: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },

    pinImage: {
        height: 40, 
        width: 40
    },

    calloutStyles: {
        width: 100,
        backgroundColor: '#FFF',
        borderColor: 'red'
    },

    imageAds: {
        width: 100,
        height: 100
    },

    titleAds: {
        textAlign: 'center', 
        color: '#363636'
    },

    typeAds: {
        textAlign: 'center', 
        fontSize: 10, 
        color: '#b6b6b6'
    }
});