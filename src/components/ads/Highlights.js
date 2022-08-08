import React, { Component } from 'react'
import { View, StyleSheet, Text, Dimensions } from 'react-native'
import PropTypes from 'prop-types'

// package
import Carousel from 'react-native-snap-carousel';

// components
import CardHighlights from '../products/CardHighlights';
import { withNavigation } from 'react-navigation';
// constants
import colors from '../../styles/GlobalColors';

const window = Dimensions.get('window');

class Highlights extends Component {

    static propTypes = {
        highlights : PropTypes.array,
        navigation : PropTypes.navigation,
        onPress : PropTypes.func
    }

    _renderItem({ item }) {
        return (
            <View style={styles.viewCard}>
                <CardHighlights
                    title = { item.name }
                    location = { item.city + ' - ' + item.state}
                    source = { item.main_image }
                    onPress = {() => (this.openDetailAds(item))}
                    styles = { styles.cardStyles }
                />
            </View>
        )
    }

    openDetailAds = (products) => {
        this.props.navigation.navigate('AdsCarrinho', { products : products })
        console.log(products)
    }

    getHighlights() {
        return (
            <View style = { styles.viewCarousel }>
                <Carousel
                    layout = { 'default' }
                    layoutCardOffset = { 5 }
                    containerStyle = { styles.carouselStyle }
                    ref = {(c) => { this._carousel = c; }}
                    data = { this.props.highlights }
                    renderItem = { this._renderItem.bind(this) }
                    enableSnap = { true }
                    loop = { true }
                    autoplay = { true }
                    autoplayInterval = { 2000 }
                    sliderWidth = { window.width }
                    itemWidth = { 160 }
                    inactiveSlideScale = { 1.0 }
                    inactiveSlideOpacity = { 1 }
                />
            </View>
        )
    }

    render() {
        return(
            <View style = { styles.viewHighlights }>
                <View style = { styles.viewTitleHighlights }>
                    <Text style = { styles.titleHighlights }>Destaques</Text>
                </View>
                { this.getHighlights() }
            </View>
        );
    }
}

const styles = StyleSheet.create({

    title : {
        fontSize: 16
    },

    viewHighlights : {
        width: window.width,
        paddingVertical: 20,
        backgroundColor: colors.dark_blue,
    },

    viewTitleHighlights : {
        paddingHorizontal: 20,
        marginBottom: 10
    },

    titleHighlights : {
        color: 'white',
        fontSize: 16
    },

    viewCard : {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'flex-start',
        marginTop: 10,
      },

      cardStyles: {
        backgroundColor: "white",
        height: 230,
        marginBottom: 10,
        width: '95%',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    viewCarousel: {
        flexDirection: 'row',
        width: window.width,
    },

    carouselStyle: {
        backgroundColor: 'red',
        width: '100%'
    }

})
export default withNavigation(Highlights);
