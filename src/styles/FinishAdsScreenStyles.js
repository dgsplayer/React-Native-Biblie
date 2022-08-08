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
        paddingHorizontal: 20,
    },

    containerText : {
      alignItems: 'center',
      justifyContent: 'center',
    },

    title : {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
      },

      subtitle : {
          fontSize: 14,
          fontWeight: 'bold',color: '#000',
          paddingBottom: 20,
        },

})
