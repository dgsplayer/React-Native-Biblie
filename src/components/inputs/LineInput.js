import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'react-native-elements';
import styles from './styles/InputStyles'

export default class LineInput extends Component {
  static propTypes = {
    label : PropTypes.string,
    placeholder : PropTypes.string,
    value : PropTypes.string,
    autoCapitalize : PropTypes.string,
    keyboardType : PropTypes.string,
    password : PropTypes.bool,
    onChangeText: PropTypes.func,
    errorMessage : PropTypes.string,
    multiline : PropTypes.bool,
    numberOfLines : PropTypes.number,
    maxLength : PropTypes.number
  }

  render() {
    return (
      <Input
        label = { this.props.label }
        labelStyle = { styles.labelStyle }
        value = { this.props.value }
        placeholder = { this.props.placeholder }
        inputStyle = { styles.inputStyle }
        onChangeText = { this.props.onChangeText }
        containerStyle = { styles.containerStyle }
        errorMessage = {(this.props.errorMessage && this.props.errorMessage.length > 0 ? this.props.errorMessage : null)}
        autoCapitalize = { this.props.autoCapitalize }
        enablesReturnKeyAutomatically = { true }
        secureTextEntry = { this.props.password }
        keyboardType = { this.props.keyboardType }
        multiline = { this.props.multiline }
        maxLength = { this.props.maxLength }
        numberOfLines = { this.props.numberOfLines }
        editable = { this.props.editable }
      />
    )
  }
}
