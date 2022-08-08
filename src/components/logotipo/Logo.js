import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Image } from 'react-native'

export default class Logo extends Component {
  static propTypes = {
    styles: PropTypes.object,
    source : PropTypes.number
  }

  render() {
    return (
      <Image
        source = {{ uri: 'https://ricarepresentacoes.com/theme/logo_vazado_app.png' }}
        resizeMode = 'contain'
        style = { this.props.styles }/>
    )
  }
}
