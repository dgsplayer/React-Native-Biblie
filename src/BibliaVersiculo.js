import React, { useState, useEffect, useRef } from 'react';
import { ListItem, List, Card, View, Text, Thumbnail, Body, Left, Container, Button } from 'native-base';
import { ScrollView, Keyboard, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import HeaderLogado from './HeaderLogado';
import HeaderLogadoBack from './HeaderLogadoBack';
import GlobalStyles from './styles/GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
const window = Dimensions.get('window');
import {versiculos} from './store-biblia'

export default class BibliaVersiculo extends React.Component {

  constructor(){
    super();
    this.state = {
      buscaValue:null,
      
    }
  }
 
  render() {

    const { params } = this.props.route;
    const id_principal = params.id;
    const titulo = params.titulo;
    const capitulo = params.capitulo;

    const startWith = id_principal + ',' + capitulo + ',' ;
    const history = titulo+", capítulo "+capitulo;

    AsyncStorage.setItem('@data:key', history);

    var count = 1;
    var payments = [];

    for (var key in versiculos) {
      if (versiculos.hasOwnProperty(key)) {
          if(key.startsWith(startWith)){
            payments.push(<Text>{count +'. "'+ versiculos[key]}{'\n'}</Text>);
              count++;
          }
      }
    }

    return (
      <Container>
      <HeaderLogadoBack navigation={this.props.navigation} cabecalho={titulo} />
        <ScrollView keyboardShouldPersistTaps='always'>
          <Card style={{padding: 10}}>     
            <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>Capítulo: {capitulo} {'\n'}</Text>
            <View >
              { payments }
            </View>
            <View style={{height: 50}} />
          </Card>
        </ScrollView>
      </Container>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start' // if you want to fill rows left to right
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 5,
    width: '80%'
  },
  item: {
    width: '30%',
    padding: 4 // is 50% of container width
  }
})