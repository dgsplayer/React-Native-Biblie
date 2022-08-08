import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Image, Text, Linking } from 'react-native';
import styles from './styles/CardProductsStyles';
import colors from '../../styles/GlobalColors';
import { Icon } from 'react-native-elements';

export default class CardProducts extends Component {

    static propTypes = {
        onPress : PropTypes.func,
        source : PropTypes.number,
        title : PropTypes.string,
        location : PropTypes.string,
        anexo : PropTypes.string,
        changeBy : PropTypes.string,
        styles : PropTypes.object,
        containerImageStyle : PropTypes.object,
        imageStyle : PropTypes.object
    }

    render() {
        return (
            <View style = { styles.contaier }>

            <TouchableOpacity
                onPress = { this.props.onPress }
                style = {this.props.styles}>

                <View style = { styles.viewDescription }>
                    <Text
                        numberOfLines = { 3 }
                        ellipsizeMode = 'tail'
                        style = { styles.titleProduct }>
                        { this.props.title }
                    </Text>
                    
                    <View style = { styles.viewLocation }>
                        <Text
                            numberOfLines = { 20 }
                            ellipsizeMode = 'tail'
                            style = { styles.textLocation }>
                            {this.props.location}
                        </Text>
                    </View>

                        {
                            this.props.anexo ? 
                                <View style = { styles.viewLocation }>
                                <Text
                                    numberOfLines = { 20 }
                                    ellipsizeMode = 'tail'
                                    onPress = {() => {Linking.openURL("http://appadvog.com/theme/arquivos/"+this.props.anexo)}}

                                    style = { styles.textLocation }>
                                    CLIQUE PARA BAIXAR ANEXO
                                </Text>
                            </View>
                            : null
                        }

                </View>

            </TouchableOpacity>

            </View>
        )
    }
}
