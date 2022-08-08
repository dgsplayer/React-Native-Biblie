import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements';
import styles from './styles/HeaderInStyles'
import colors from '../../styles/GlobalColors';

export default class HeaderIn extends Component {
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
          color = { colors.dark_blue }
          onPress = { this.props.goBack }/>
      )
    }
  }
  
  getRightIcon() {
    if(this.props.rightIcon === true) {
      return(
        <Icon
                    name = "shopping-cart"
                    type = "feather"
                    color = { colors.dark_blue }
                    onPress = { this.props.onPressRightIcon }
                />
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
          <Text style = { styles.titleStyle }>{ this.props.title }</Text>
        </View>
        <View style = { styles.viewIconRight }>
          { this.getRightIcon() }
        </View>
      </View>
    )
  }
}