import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image } from 'react-native'
import { Icon } from 'react-native-elements';
import styles from './styles/HeaderInStylesProfile'
import colors from '../../styles/GlobalColors';
import Images from '../../assets/Images';

export default class HeaderInProfile extends Component {
  static propTypes = {
    leftIcon : PropTypes.bool,
    title : PropTypes.string,
    goBack : PropTypes.func,
    rightIcon : PropTypes.string,
    type : PropTypes.string,
    onPressRightIcon : PropTypes.func
  }

  getLeftIcon() {
    if(this.props.leftIcon === true) {
      return (
        <Icon
          name = "arrow-left"
          type = "feather"
          color = 'white'
          onPress = { this.props.goBack }/>
      )
    }
  }

  getRightIcon() {
    if(this.props.rightIcon && this.props.rightIcon.length) {
      return(
        <Icon
          name = { this.props.rightIcon }
          type = { this.props.type }
          color = { colors.dark_blue }
          onPress = { this.props.onPressRightIcon }/>
      )
    }
  }

  render() {
    return (
      <View style = { styles.viewHeader }>
        <View style = { styles.viewIconLeft }>
          { this.getLeftIcon() }
        </View>
        <View style = { styles.viewTitle }>
        </View>
        <View style = { styles.viewIconRight }>
          { this.getRightIcon() }
        </View>
      </View>
    )
  }
}
