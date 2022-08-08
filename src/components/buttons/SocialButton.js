import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

export default class SocialButton extends Component {
  static propTypes = {
    name : PropTypes.string,
    color : PropTypes.string,
    onPress : PropTypes.func
  }
  
  render() {
    return (
      <Icon
        raised
        reverse
        name = { this.props.name }
        type = 'font-awesome'
        color = { this.props.color }
        onPress = { this.props.onPress }/>
    )
  }
}