import React,{Component} from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';
import {
  Right,
  Left,
  Body,
  Header
} from 'native-base';
import styles from './styles/styles0';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DrawerActions } from '@react-navigation/native';

export default class HeaderLogado extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (

      <Header androidStatusBarColor={'#24598b'} style={styles.header}>
        <Left style={styles.left}>
          <TouchableOpacity
            style={styles.backArrow}
            onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
            <Ionicons
              name={'ios-menu'}
              size={30}
              style={{ color: 'white' }}
            />
          </TouchableOpacity>
        </Left>
        <Body style={styles.body}>
          <Text style={styles.textTitle}>{this.props.cabecalho}</Text>
        </Body>
        <Right style={styles.left}>

        </Right>
      </Header>


    )
  }
}