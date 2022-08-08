import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-native-elements'
import styles from './styles/SmallButtonStyles'

export default class RoundedButton extends Component {
    static propTypes = {
        title : PropTypes.string,
        onPress : PropTypes.func,
        styles: PropTypes.object,
        disabled: PropTypes.string 
    }
  
    render() {
        return (
            <Button
                raised
                title = { this.props.title }
                buttonStyle = {[ styles.buttonStyle, this.props.styles ]}
                containerStyle = { styles.containerStyle }
                titleStyle = { styles.titleStyle }
                onPress = { this.props.onPress }/>
        )
    }
}