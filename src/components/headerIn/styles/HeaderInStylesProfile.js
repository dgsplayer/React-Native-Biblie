import { StyleSheet, Dimensions, Platform } from 'react-native';
import colors from '../../../styles/GlobalColors';

const window = Dimensions.get('window');
const ISX = Platform.OS === "ios" && (window.height > 800 || window.width > 800) ? true : false;

export default StyleSheet.create({
  viewHeader: {
    width: window.width,
    height: (ISX === true) ? 100 : 80,
    paddingTop: (ISX === true) ? 30 : 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: '#B6B6B6',
    elevation: 3,
    backgroundColor: colors.dark_blue ,
    shadowOpacity: 1,
    shadowRadius: 1,
    shadowColor: 'black',
    shadowOffset: { height: 0, width: 0 }
  },

  containerForm : {
      paddingHorizontal: 20,
      alignItems: 'flex-end',
  },
  scrollview : {
      paddingVertical: 20,
  },
  containerText : {
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewIconLeft: {
    width: 20,
    color: 'white'
  },

  viewTitle: {},

  titleStyle: {
    color: 'white',
    fontWeight: 'bold'
  },

  viewIconRight: {
    width: 20,
  }
})
