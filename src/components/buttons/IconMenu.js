import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

var badgeCount = 8;

export default class IconMenu extends Component {
  static propTypes = {
    name : PropTypes.string,
    type : PropTypes.string,
    color : PropTypes.string,
    badgeCount : PropTypes.string
  }
  
  render() {
    return(
      <View>
        <Icon
          name = { this.props.name }
          type = { this.props.type }
          color = { this.props.color }
        />
        {this.props.badgeCount > 0 && (
          <View style = {{
              position: "absolute",
              right: -8,
              top: -3,
              backgroundColor: 'red',
              borderRadius: 10,
              padding: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style = {{
                color: "white",
                fontSize: 10,
                fontWeight: "bold"
              }}> { this.props.badgeCount } </Text>
          </View>
        )}
      </View>
    )
  }
}