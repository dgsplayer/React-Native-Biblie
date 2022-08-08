import React, { useState, useEffect, useRef } from 'react';
import { ListItem, List, Card, View, Text, Thumbnail, Body, Left, Container, Button } from 'native-base';
import { ScrollView, Keyboard, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import HeaderLogado from './HeaderLogado';
import HeaderLogadoBack from './HeaderLogadoBack';
import GlobalStyles from './styles/GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
const window = Dimensions.get('window');

export default class BibliaCapitulos extends React.Component {

  constructor(){
    super();
    this.state = {
      buscaValue:null,
      capitulos: [             
        {id: 1, count: 50},
        {id: 2, count: 40},
        {id: 3, count: 27},
        {id: 4, count: 36},
        {id: 5, count: 34},
        {id: 6, count: 24},
        {id: 7, count: 21},
        {id: 8, count: 4 },
        {id: 9, count: 31},
        {id: 10, count: 24},
        {id: 11, count: 22},
        {id: 12, count: 25},
        {id: 13, count: 29},
        {id: 14, count: 36},
        {id: 15, count: 10},
        {id: 16, count: 13},
        {id: 17, count: 10},
        {id: 18, count: 42},
        {id: 19, count: 150},
        {id: 20, count: 31},
        {id: 21, count: 12},
        {id: 22, count: 8 },
        {id: 23, count: 66},
        {id: 24, count: 52},
        {id: 25, count: 5 },
        {id: 26, count: 48},
        {id: 27, count: 12},
        {id: 28, count: 14},
        {id: 29, count: 3},
        {id: 30, count: 9},
        {id: 31, count: 1},
        {id: 32, count: 4},
        {id: 33, count: 7},
        {id: 34, count: 3},
        {id: 35, count: 3},
        {id: 36, count: 3},
        {id: 37, count: 2},
        {id: 38, count: 14},
        {id: 39, count: 4},
        {id: 40, count: 28},
        {id: 41, count: 16},
        {id: 42, count: 24},
        {id: 43, count: 21},
        {id: 44, count: 28},
        {id: 45, count: 16},
        {id: 46, count: 16},
        {id: 47, count: 13},
        {id: 48, count: 6},
        {id: 49, count: 6},
        {id: 50, count: 4},
        {id: 51, count: 4},
        {id: 52, count: 5},
        {id: 53, count: 3},
        {id: 54, count: 6},
        {id: 55, count: 4},
        {id: 56, count: 3},
        {id: 57, count: 1},
        {id: 58, count: 13},
        {id: 59, count: 5},
        {id: 60, count: 5},
        {id: 61, count: 3},
        {id: 62, count: 5},
        {id: 63, count: 1},
        {id: 64, count: 1},
        {id: 65, count: 1},
        {id: 66, count: 22}
      ]
    }
  }
 
   b(idToSearch) {
    return this.state.capitulos.filter(item => {
      return item.id === idToSearch
    })
  };

  render() {

    const { params } = this.props.route;
    const id_principal = params.id;
    const titulo = params.titulo;

    var contador = this.b(id_principal)[0].count;
    var payments = [];

    for(let i = 1; i <= contador; i++){

      payments.push(
        <View style={styles.item} key = {i}>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>{this.props.navigation.navigate("BibliaVersiculo",{capitulo: i, titulo: titulo, id: id_principal})}}
        >
          <Text>{i}</Text>
        </TouchableOpacity>
      </View>            
      )
    }

    return (
      <Container>
      <HeaderLogadoBack navigation={this.props.navigation} cabecalho={titulo} />
        <ScrollView keyboardShouldPersistTaps='always'>
          <Card style={{padding: 25}}>     
            <Text style={{textAlign: 'center', fontWeight: 'bold'}}>Escolha o capítulo{'\n'}</Text>
            <View style={[styles.container, {width:window.width}]}>
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