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
    backgroundColor: 'white',
    shadowOpacity: 1,
    shadowRadius: 1,
    shadowColor: 'black',
    shadowOffset: { height: 0, width: 0 }
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
    width: 30,
  }
})