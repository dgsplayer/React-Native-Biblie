import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-native-elements'
import styles from './styles/RoundedButtonStyles'

export default class RoundedButton extends Component {
    static propTypes = {
        title : PropTypes.string,
        onPress : PropTypes.func,
        styles: PropTypes.object,
        containerStyle : PropTypes.object,
        icon: PropTypes.string,
        disabled: PropTypes.string 
    }
  
    render() {
        return (
            <Button
                raised
                icon = {( this.props.icon && this.props.icon.length > 0 ? { name: this.props.icon } : null )}
                title = { this.props.title }
                buttonStyle = {[ styles.buttonStyle, this.props.styles ]}
                containerStyle = {[ styles.containerStyle, this.props.containerStyle ]}
                titleStyle = { styles.titleStyle }
                onPress = { this.props.onPress }/>
        )
    }
}