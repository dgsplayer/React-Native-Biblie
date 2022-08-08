/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */ 

import React, {Component} from 'react'; 
import {Content} from 'native-base'; 
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import colors from "./styles/GlobalColors"; 

import Ionicons from 'react-native-vector-icons/Ionicons';
import More from './More';
import HeaderLogadoBack from './HeaderLogadoBack';
import HeaderLogado from './HeaderLogado';
import Sidebar from './Sidebar';
import Biblia from './Biblia';
import BibliaCapitulos from './BibliaCapitulos';
import BibliaVersiculo from './BibliaVersiculo';
 
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
        tabContent
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Início') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home';
            } else if (route.name === 'Ler') {
              iconName = focused ? 'ios-bookmarks' : 'ios-bookmarks';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: colors.light_blue,
          inactiveTintColor: 'gray',
        }}
      >
        
          <Tab.Screen name="Início" component={Sidebar} /> 
          <Tab.Screen name="Ler" component={Biblia} /> 
        </Tab.Navigator>
  );
}

export default class Tabss extends Component<Props> {

  
  render() {
     console.disableYellowBox = true;  
    return (
          <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="Home"  screenOptions={{ headerShown: false}}>
              <Stack.Screen name="Home" component={HomeTabs} />
              <Stack.Screen name="Tabss" component={Tabss} />
              <Stack.Screen name="Biblia" component={Biblia} />
              <Stack.Screen name="BibliaCapitulos" component={BibliaCapitulos} />
              <Stack.Screen name="BibliaVersiculo" component={BibliaVersiculo} />
              <Stack.Screen name="HeaderLogadoBack" component={HeaderLogadoBack} />
              <Stack.Screen name="HeaderLogado" component={HeaderLogado} />
              <Stack.Screen name="Sidebar" component={Sidebar} />
              <Stack.Screen name="More" component={More} />
             
            </Stack.Navigator>
            
        </NavigationContainer>
    );
  }
}
