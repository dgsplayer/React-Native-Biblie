import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import PropTypes from 'prop-types'
import { withNavigation } from 'react-navigation';

// componets
import SmallButton from '../../components/buttons/SmallButton';

// styles
import styles from './styles/CardAdsStyles';
import colors from '../../styles/GlobalColors';

  class CardAdsNoButtons extends React.Component {
    static propTypes = {
        paidout : PropTypes.bool,
        title : PropTypes.string,
        location : PropTypes.string,
        picture : PropTypes.object,
        onPress : PropTypes.func
    }

    render() {
        if(this.props.paidout === true) {
            return (
                <TouchableOpacity
                    style = { styles.cardAdStyle }
                    onPress = { this.props.onPress }>
                    <View style = { styles.viewLeft }>
                        <View>
                            <Text style = { styles.titleAd }>
                                { this.props.title }
                            </Text>
                            <Text style = { styles.titleLocation }>
                                { this.props.location }
                            </Text>
                        </View>

                    </View>
                    <View style = { styles.viewRight }>
                        <Image
                            source = { this.props.picture }
                            resizeMode = 'cover'
                            style = { styles.imageAd }
                        />
                    </View>
                </TouchableOpacity>
            )
        }
        else {
            return (
                <TouchableOpacity
                    onPress = { this.props.onPress }
                    style = { styles.cardAdStyle }>
                    <View style = { styles.viewLeft }>
                        <View>
                            <Text style = { styles.titleAd }>
                                { this.props.title }
                            </Text>
                            <Text style = { styles.titleLocation }>
                                { this.props.location }
                            </Text>
                        </View>

                    </View>
                    <View style = { styles.viewRight }>
                        <Image
                            source = { this.props.picture }
                            resizeMode = 'cover'
                            style = { styles.imageAd }
                        />
                    </View>
                </TouchableOpacity>
            )
        }

    }
}

export default withNavigation(CardAdsNoButtons);
