import { StyleSheet, Dimensions, Platform } from 'react-native';
import colors from '../../../styles/GlobalColors';

const window = Dimensions.get('window');
const ISX = Platform.OS === "ios" && (window.height > 800 || window.width > 800) ? true : false;

export default StyleSheet.create({

  viewContainer : {
    flex: 1,
    width: window.width,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },

  viewHeader : {
    width: window.width,
    paddingTop: (ISX === true) ? 40 : 20,
    paddingBottom: 10,
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

  logoStyle : {
    height: (ISX === true) ? 80 : 80,
    width: (ISX === true) ? 130 : 130,
    marginBottom: 10
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

  viewCategories : {
    paddingBottom: 10
  },

  viewItemCategory : {
    width: '100%',
    flexDirection: 'row',
    marginRight: 20
  },

  scrollStyle: {
    paddingHorizontal: 10
  },

  cardFeaturedProducts : {
    backgroundColor: "#F2F2F2",
    width: 150
  },

  viewTitleCategories: {
    paddingHorizontal: 20,
    paddingVertical: 10
  },

  title : {
    fontSize: 16
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

  viewCarousel: {
    flexDirection: 'row',
    width: window.width
  },

  viewBody : {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },

  viewBox : {
    width: '100%',
    backgroundColor: '#F2F2F2',
    padding: 10,
    alignItems: 'flex-start',
    marginBottom: 20,
    borderRadius: 5
  },

  viewTitleBox : {
    paddingHorizontal: 20,
    paddingTop: 10
  },

  buttonShowmore : {
    width: '100%',
    paddingHorizontal: 10
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
        height: 230,
        marginBottom: 10,
        width: '90%',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'flex-start'
  },
  viewTabButton : {
      width: window.width,
      height: 40,
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingHorizontal: 10

  },

  tabButtonStyle : {
      width: '50%',
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
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
});
