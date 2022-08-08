import React, {Component} from 'react';
//import {} from 'react-native';
//import {Footer, Title, FooterTab, Content, Body, Button, Icon, Container, Header} from 'native-base';
import {AsyncStorage } from 'react-native';
// import {Stack,Router,Scene,Actions} from 'react-native-router-flux';

export default class loginFunction extends Component{


  async userBusca(busca) {

    if (busca) {
        AsyncStorage.setItem('@MySuperBuscaValue:key', busca);
      this.props.navigation.navigate("buscaResultado"); 
    }
  }


  componentDidMount(){
    this.userSignup();
  }

  render(){
  }
}

module.exports = loginFunction;
