import React, { useState, useEffect, useRef } from 'react';
import {Container} from 'native-base';
import { AdMobBanner } from 'react-native-admob';
import { createStackNavigator } from '@react-navigation/stack';

import Tabss from './src/Tabss';
import { NavigationContainer } from '@react-navigation/native';

console.disableYellowBox = true;

const Stack = createStackNavigator();
const App = () => {

  return (
  <Container>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabss" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabss" component={Tabss} />
      </Stack.Navigator>
    </NavigationContainer>
     <AdMobBanner
     adSize="fullBanner"
    //  adUnitID="ca-app-pub-3940256099942544/6300978111" //TESTE
     adUnitID="ca-app-pub-9534097551670907/8264379815" //PROD
     testDevices={[AdMobBanner.simulatorId]}
     onAdFailedToLoad={error => console.error(error)}
   />
   </Container>
  );
};

export default App;