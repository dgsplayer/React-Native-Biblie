import React, { useState, useEffect, useRef } from 'react';

import { Container, View, Text } from 'native-base';
import Home from './Home'; 
import Biblia from './Biblia'; 
import More from './More'; 
import HeaderLogado from './HeaderLogado'; 
import HeaderLogadoBack from './HeaderLogadoBack'; 
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AsyncStorage } from 'react-native';
 
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

console.disableYellowBox = true;

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {

  return (
    <DrawerContentScrollView {...props} style={{ backgroundColor: '#000000' }}>
      <View style={{ padding: 30 }}>

        <Text style={{ color: '#FFFFFF', fontSize: 18, marginTop: 5 }}>Biblia Sagrada</Text>
        <Text style={{ color: '#999999' }}>Bem-vindo(a)</Text>
      </View>
      {/* <DrawerItem
        label="Buscar"
        icon={({ focused, color, size }) => (<Ionicons style={{ marginRight: -15 }} name='ios-search' size={24} color='white' />)}
        labelStyle={{ color: '#ffffff', fontSize: 18 }}
        onPress={() => props.navigation.navigate("busca")}
      />
      <DrawerItem
        label="Histórico"
        icon={({ focused, color, size }) => (<Ionicons style={{ marginRight: -15 }} name='ios-menu' size={24} color='white' />)}
        labelStyle={{ color: '#ffffff', fontSize: 18 }}
        onPress={() => props.navigation.navigate("Historico")}
      /> */}
     
      <DrawerItem
        label="Leia a Bíblia"
        icon={({ focused, color, size }) => (<Ionicons style={{marginRight: -15}} name='ios-bookmarks' size={24} color='white' /> )}
        onPress={() => props.navigation.navigate("Biblia")}
        style={{fontSize: 14}}
        labelStyle={{color: '#ffffff', fontSize: 18}}
      />
 <DrawerItem
        label="Mais Apps"
        icon={({ focused, color, size }) => (<Ionicons style={{ marginRight: -15 }} name='ios-globe' size={24} color='white' />)}
        onPress={() => props.navigation.navigate("More")}
        style={{ fontSize: 14 }}
        labelStyle={{ color: '#ffffff', fontSize: 18 }}
      />

    </DrawerContentScrollView>
  );
}
const showDrawer = false;

const sidebar = () => {


  return (

    <Container>
      <NavigationContainer independent={true}>
        <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />} drawerStyle={{ width: !showDrawer ? null : 380 }}>
          
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Biblia" component={Biblia} />
          <Drawer.Screen name="HeaderLogado" component={HeaderLogado} />
          <Drawer.Screen name="HeaderLogadoBack" component={HeaderLogadoBack} />
          <Drawer.Screen name="More" component={More} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Container>
  );
};

export default sidebar;