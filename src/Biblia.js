import React, { Component } from 'react';
import { ListItem, List, Card, View, Text, Thumbnail, Body, Left, Container, Button } from 'native-base';
import { ScrollView, Keyboard, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import HeaderLogado from './HeaderLogado';
import HeaderLogadoBack from './HeaderLogadoBack';
import HeaderLogadoHome from './HeaderLogadoHome';
import GlobalStyles from './styles/GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
const window = Dimensions.get('window');
// import {livros} from "./store-biblia";


export default class Biblia extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      buscaValue:null,
      livros: [     
        {id: 1,  capitulo:"Gênesis"},
        {id: 2,  capitulo:"Êxodo"},
        {id: 3,  capitulo:"Levítico"},
        {id: 4,  capitulo:"Números"},
        {id: 5,  capitulo:"Deuteronômio"},
        {id: 6,  capitulo:"Josué"},
        {id: 7,  capitulo:"Juízes"},
        {id: 8,  capitulo:"Rute"},
        {id: 9,  capitulo:"I Samuel"},
        {id: 10, capitulo: "II Samuel"},
        {id: 11, capitulo: "I Reis"},
        {id: 12, capitulo: "II Reis"},
        {id: 13, capitulo: "I Crônicas"},
        {id: 14, capitulo: "II Crônicas"},
        {id: 15, capitulo: "Esdras"},
        {id: 16, capitulo: "Neemias"},
        {id: 17, capitulo: "Ester"},
        {id: 18, capitulo: "Jó"},
        {id: 19, capitulo: "Salmos"},
        {id: 20, capitulo: "Provérbios"},
        {id: 21, capitulo: "Eclesiastes"},
        {id: 22, capitulo: "Cantico dos C."},
        {id: 23, capitulo: "Isaías"},
        {id: 24, capitulo: "Jeremias"},
        {id: 25, capitulo: "Lam. Jeremias"},
        {id: 26, capitulo: "Ezequiel"},
        {id: 27, capitulo: "Daniel"},
        {id: 28, capitulo: "Oséias"},
        {id: 29, capitulo: "Joel"},
        {id: 30, capitulo: "Amós"},
        {id: 31, capitulo: "Obadias"},
        {id: 32, capitulo: "Jonas"},
        {id: 33, capitulo: "Miquéias"},
        {id: 34, capitulo: "Naum"},
        {id: 35, capitulo: "Habacuque"},
        {id: 36, capitulo: "Sofonias"},
        {id: 37, capitulo: "Ageu"},
        {id: 38, capitulo: "Zacarias"},
        {id: 39, capitulo: "Malaquias"}],
      
      livros2: [    
        {id: 40, capitulo: "Mateus"},
        {id: 41, capitulo: "Marcos"},
        {id: 42, capitulo: "Lucas"},
        {id: 43, capitulo: "João"},
        {id: 44, capitulo: "Atos"},
        {id: 45, capitulo: "Romanos"},
        {id: 46, capitulo: "I Coríntios"},
        {id: 47, capitulo: "II Coríntios"},
        {id: 48, capitulo: "Gálatas"},
        {id: 49, capitulo: "Efésios"},
        {id: 50, capitulo: "Filipenses"},
        {id: 51, capitulo: "Colossenses"},
        {id: 52, capitulo: "I Tessalonicenses"},
        {id: 53, capitulo: "II Tessalonicenses"},
        {id: 54, capitulo: "I Timóteo"},
        {id: 55, capitulo: "II Timóteo"},
        {id: 56, capitulo: "Tito"},
        {id: 57, capitulo: "Filemom"},
        {id: 58, capitulo: "Hebreus"},
        {id: 59, capitulo: "Tiago"},
        {id: 60, capitulo: "I Pedro"},
        {id: 61, capitulo: "II Pedro"},
        {id: 62, capitulo: "I João"},
        {id: 63, capitulo: "II João"},
        {id: 64, capitulo: "III João"},
        {id: 65, capitulo: "Judas"},
        {id: 66, capitulo: "Apocalipse"}  
      ]
    }
  }
 
  render() {
    return (
      <Container>
      <HeaderLogadoHome navigation={this.props.navigation} cabecalho="Bíblia Sagrada" />
      <View style={{padding: 5}}>
        <ScrollView keyboardShouldPersistTaps='always'>
          <Card style={{padding: 25}}>
              <Text style={{textAlign: 'center', fontWeight: 'bold'}}>Antigo Testamento{'\n'}</Text>
              <View style={[styles.container, {width:window.width}]}>
                {this.state.livros &&
                  this.state.livros.map((products) => (
                    <View style={styles.item}>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={()=>{this.props.navigation.navigate("BibliaCapitulos",{titulo: products.capitulo, id: products.id})}}
                      >
                        <Text>{products.capitulo}</Text>
                      </TouchableOpacity>
                    </View>            
              ))}                  
              </View>
          </Card>

          <Card style={{padding: 25}}>
            <Text style={{textAlign: 'center', fontWeight: 'bold'}}>Novo Testamento{'\n'}</Text>
            <View style={[styles.container, {width:window.width, height: '100%'}]}>
              {this.state.livros2 &&
                this.state.livros2.map((products) => (
                  <View style={styles.item}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={()=>{this.props.navigation.navigate("BibliaCapitulos",{titulo: products.capitulo, id: products.id})}}
                    >
                      <Text>{products.capitulo}</Text>
                    </TouchableOpacity>
                  </View>            
            ))}                  
            </View>
            <View style={{height: 50}} />
          </Card>       
        </ScrollView>
      </View>
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
    width: '100%'
  },
  item: {
    width: '42%',
    padding: 4 // is 50% of container width
  }
})