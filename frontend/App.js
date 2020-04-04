/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/pages/home';
import Shopping from './src/pages/shopping';
import EnderecosD from './src/pages/shopping/pages/enderecos';
import ConfirmStock from './src/pages/stock/pages/confirmationStock';
import ShowQr from './src/pages/shopping/pages/qrcode';
import Stock from './src/pages/stock';
import ReadQr from './src/pages/readQr';
import Recive from './src/pages/recive';
import RotaRecive from './src/pages/recive/pages/rota';
import ConfirmacaoRecive from './src/pages/recive/pages/confirmationRecive';
import AsyncStorage from '@react-native-community/async-storage';
import Reactotron from 'reactotron-react-native';
import {Root} from 'native-base';
Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!

console.tron = Reactotron;

enableScreens();
const App: () => React$Node = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Root>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerBackTitleVisible: false}}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'Home'}}
          />
          <Stack.Screen
            name="Shopping"
            component={Shopping}
            options={{title: 'Compras', headerTintColor: '#ff1a43'}}
          />
          <Stack.Screen
            name="EnderecoD"
            component={EnderecosD}
            options={{
              title: 'Endereços Disponiveis',
              headerTintColor: '#ff1a43',
            }}
          />
          <Stack.Screen
            name="ShowQr"
            component={ShowQr}
            options={{title: 'QR CODE', headerTintColor: '#ff1a43'}}
          />
          <Stack.Screen
            name="Stock"
            component={Stock}
            options={{title: 'Estoque', headerTintColor: '#0077e2'}}
          />
          <Stack.Screen
            name="ConfirmStock"
            component={ConfirmStock}
            options={{
              title: 'Confirmação',
              headerTintColor: '#0077e2',
            }}
          />
          <Stack.Screen
            name="ReadQr"
            component={ReadQr}
            options={{title: 'Ler QR Code', headerTintColor: '#000000'}}
          />
          <Stack.Screen
            name="RotaRecive"
            component={RotaRecive}
            options={{title: 'Endereço', headerTintColor: '#ffc000'}}
          />
          <Stack.Screen
            name="ConfirmacaoRecive"
            component={ConfirmacaoRecive}
            options={{title: 'Confirmação', headerTintColor: '#ffc000'}}
          />
          <Stack.Screen
            name="Recive"
            component={Recive}
            options={{title: 'Retirada', headerTintColor: '#ffc000'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Root>
  );
};

export default App;
