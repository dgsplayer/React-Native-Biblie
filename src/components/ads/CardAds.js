import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image, Alert } from 'react-native';
import PropTypes from 'prop-types'
import { withNavigation } from 'react-navigation';

// componets
import SmallButton from '../../components/buttons/SmallButton';
import ApiAuth from "../../api/ApiAuth";

// styles
import styles from './styles/CardAdsStyles';
import colors from '../../styles/GlobalColors';
import Toast from 'react-native-root-toast';

  class CardAds extends React.Component {
    static propTypes = {
        paidout : PropTypes.bool,
        title : PropTypes.string,
        location : PropTypes.string,
        navigation : PropTypes.navigation,
        picture : PropTypes.object,
        onPress : PropTypes.func
    }

    openDetailAds = () => {
        Alert.alert(
            "Atenção",
            "Deseja realmente retirar este item do carrinho?",
            [{ text: 'OK', onPress: () => this.removeProduct() },],
            [{ text: 'Voltar', onPress: () => console.log('OK pressed') },],
            { cancelable: true }
        )
        
    }

    removeProduct = () => {
        var input = []
        var _this = this;
        input = {
            id: this.props.carrinho
        };
        // console.warn('REMOVIDO',this.props.carrinho);
        // console.warn('REMOVIDO A',this.props.carrinho.id);
        // console.warn('REMOVIDO A',this.props.carrinho[id]);
        // console.warn('REMOVIDO B',Object.values(this.props.carrinho.id));
        // return false
        ApiAuth.create('xxx').deleta_carrinho('tb_carrinho',input).then((response) => {
            console.warn(response);
            if(response.status == 200){
                Toast.show('Removido com sucesso');
                console.warn(input)
                _this.props.navigation.navigate('AppNavigationAuth');
            }else{
            //   Alert.alert(
            //       "Erro",
            //       response.data.message,
            //       [{ text: 'OK', onPress: () => console.log('OK pressed') },],
            //       { cancelable: false }
            //   )
            }
            _this.setState({ spinner: false });

        }).catch(function (error) {
            _this.setState({ spinner: false });

            console.log(error)
        });
        
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
                        <View>
                            <SmallButton
                                title = "Impulsionado"
                                onPress = { () => { this.props.navigation.navigate('BoostAdsScreen', { products : this.props.products }) } }
                                styles = {{backgroundColor: 'green'}}
                            />
                            <SmallButton
                                title = "Finalizar Troca"
                                onPress = { () => { this.props.navigation.navigate('FinishAdsScreen', { products : this.props.products }) } }
                                styles = {{backgroundColor: colors.dark_blue}}
                            />
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
                                <Text style={{fontWeight: 'bold'}}>Ref.: </Text>{ this.props.referencia }
                            </Text>
                            <Text style = { styles.titleLocation }>
                                <Text style={{fontWeight: 'bold'}}>Tamanho(s): </Text>{ this.props.tam }
                            </Text>
                            <Text style = { styles.titleLocation }>
                                <Text style={{fontWeight: 'bold'}}>Cor(es): </Text>{ this.props.cor }
                            </Text>
                            <Text style = { styles.titleLocation }>
                                <Text style={{fontWeight: 'bold'}}>Qtde Total: </Text>{ this.props.qtde }
                            </Text>
                            <Text style = { styles.titleLocation }>
                                <Text style={{fontWeight: 'bold'}}>Valor Total: </Text>{ this.props.value }
                            </Text>
                            <Text style = { styles.titleLocation }>
                                <Text style={{fontWeight: 'bold'}}>Fábrica: </Text>{ this.props.id_fabrica }
                            </Text>
                        </View>
                        <View style={{marginTop: 35}}>
                            <SmallButton
                                title = "Retirar"
                                onPress = {() => {this.openDetailAds()}}
                                styles = {{backgroundColor: colors.dark_blue}}
                            />
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

export default withNavigation(CardAds);
