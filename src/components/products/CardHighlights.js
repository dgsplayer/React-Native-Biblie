import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import styles from './styles/CardHighlightsStyles';
import colors from '../../styles/GlobalColors';
import { Icon } from 'react-native-elements';

// constants
import Images from '../../assets/Images';

export default class CardHighlights extends Component {

    static propTypes = {
        onPress : PropTypes.func,
        source : PropTypes.number,
        title : PropTypes.string,
        location : PropTypes.string,
        changeBy : PropTypes.string,
        styles : PropTypes.object,
        containerImageStyle : PropTypes.object,
        imageStyle : PropTypes.object
    }

    render() {
        return (
            <View style = { styles.container }>

            <TouchableOpacity
                onPress = { this.props.onPress }
                style = {this.props.styles}>

                <View style = { styles.viewImage }>
                   <Image
                        source = {{ uri: this.props.source }}
                        resizeMode = 'cover'
                        style = { styles.imageStyle }
                    />
                </View>

                <View style = { styles.viewDescription }>
                    <Text
                        numberOfLines = { 1 }
                        ellipsizeMode = 'tail'
                        style = { styles.titleProduct }>
                        { this.props.title }
                    </Text>

                    <Text
                        numberOfLines = { 1 }
                        ellipsizeMode = 'tail'
                        style = { styles.textLocation }>
                        <Text style = {{color: colors.dark_blue}}>Troco por: </Text>{ this.props.changeBy }
                    </Text>

                    <View style = { styles.viewLocation }>
                        <Icon
                            name = "map-marker"
                            type = "font-awesome"
                            size = { 12 }
                            color = 'gray'
                            containerStyle = {{marginRight: 5}}
                        />
                        <Text
                            numberOfLines = { 1 }
                            ellipsizeMode = 'tail'
                            style = { styles.textLocation }>
                            { this.props.location }
                        </Text>
                    </View>


                </View>

            </TouchableOpacity>

            </View>
        )
    }
}
