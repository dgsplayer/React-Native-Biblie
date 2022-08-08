import { StyleSheet, Dimensions, Platform } from 'react-native';
import colors from '../../../styles/GlobalColors';

export default StyleSheet.create({
  viewCategory : {
    width: 100,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },

  viewIcon : {
    width: 110,
    height: 110,
    borderRadius: 50,
    backgroundColor: "#ffffff",
    alignItems: 'center',
    justifyContent: 'center'
  },

  iconStyle : {
    width: 88,
    height: 88
  },

  nameStyle : {
    color: colors.dark_blue,
    fontSize: 12,
    marginTop: 2,
    textAlign: 'center'
  }

});
