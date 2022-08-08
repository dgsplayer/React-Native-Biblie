import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles/CategoryStyles'

export default class Category extends Component {
  static propTypes = {
    source : PropTypes.string,
    name : PropTypes.string,
    onPress : PropTypes.func
  }

  render() {
    return (
      <TouchableOpacity
        style = { styles.viewCategory }
        onPress = { this.props.onPress }>
        <View style = { styles.viewIcon }>
        <Image
            resizeMode = 'cover'
            source = {{uri: this.props.source}}
        style = { styles.iconStyle }/>
        </View>
        <Text style = { styles.nameStyle }>{ this.props.name }</Text>
      </TouchableOpacity>
    )
  }
}
