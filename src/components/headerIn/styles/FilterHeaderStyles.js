import { StyleSheet, Dimensions, Platform } from 'react-native';
import colors from '../../../styles/GlobalColors';

const window = Dimensions.get('window');
const ISX = Platform.OS === "ios" && (window.height > 800 || window.width > 800) ? true : false;

export default StyleSheet.create({
    
    container: {    
        borderBottomWidth: 0.5,
        borderColor: '#B6B6B6',
        paddingBottom: 10,
        elevation: 3,
        backgroundColor: 'white',
        shadowOpacity: 1,
        shadowRadius: 1,
        shadowColor: 'black',
        shadowOffset: { height: 0, width: 0}
    },
    
    viewHeader: {
        width: window.width,
        height: (ISX === true) ? 80 : 80,
        paddingTop: (ISX === true) ? 30 : 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
  
    viewIconLeft: {
        width: 20,
    },
  
    viewTitle: {},
  
    titleStyle: {
        color: colors.dark_blue,
        fontWeight: 'bold'
    },
  
    viewIconRight: {
        width: 30
    },

    filterButton : {
        width: window.width * 0.9,
        height: 45,
        borderRadius: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingHorizontal: 12,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        elevation: 3,
        shadowOpacity: 1,
        shadowRadius: 2,
        shadowColor: '#B6B6B6',
        shadowOffset: { height: 0, width: 0 }
    },
  
    divider : {
        height: 35,
        width: 0.5,
        backgroundColor: '#B6B6B6',
        marginHorizontal: 10
    },
  
    textButtonFilter : {
        color : '#B6B6B6'
    },
    
})