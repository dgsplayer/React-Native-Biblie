import { StyleSheet, Dimensions, Platform } from 'react-native';
import colors from './GlobalColors';

const window = Dimensions.get('window');
const ISX = Platform.OS === "ios" && (window.height > 800 || window.width > 800) ? true : false;

export default StyleSheet.create({
  viewLogo: {
    width: window.width,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    backgroundColor: colors.dark_blue,
    // marginTop: (ISX === true) ? 70 : 20
  },

  logoStyle: {
    height: (ISX === true) ? 250 : 130,
    width: (ISX === true) ? 250 : 198
  },

  titleStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.dark_blue,
    marginTop: 10 
  },  
  titleLogoStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#FFFFFF',
    marginTop: 10
  },

  descriptionStyle: {
    fontSize: 18,
    color: colors.dark_blue,
    textAlign: "center"
  },

  viewForm: {
    width: window.width,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: (ISX === true) ? 20 : 10
  },

  loginButton: {
    backgroundColor: colors.dark_blue
  },

  registerButton: {
    backgroundColor: '#006eb5'
  },

  forgotPasswordButton: {
    color: 'gray',
    fontSize: 12
  },

  viewSocialButton: {
    width: window.width,
    alignItems: 'center',
    justifyContent: 'center',
//     backgroundColor: 'rgba(245, 245, 245, 1)'
  },

  textStyle: {
    fontSize: 16,
    color: colors.dark_blue,
    textAlign: "center"
  },

  viewRegisterButton: {
    width: window.width,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
