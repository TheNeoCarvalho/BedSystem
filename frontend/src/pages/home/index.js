import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BkImg, Body, Title, Button, Mold} from './styles';

const compra = require('../../imgs/compra.jpg');
const estoque = require('../../imgs/estoque.jpg');
const retirada = require('../../imgs/retirada.jpg');

export default () => {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <SafeAreaView>
        <Button onPress={() => navigation.navigate('Shopping')}>
          <Mold>
            <BkImg source={compra}>
              <Body>
                <Title>Comprar</Title>
              </Body>
            </BkImg>
          </Mold>
        </Button>
        <Button onPress={() => navigation.navigate('Stock')}>
          <Mold color={'#0077e2'}>
            <BkImg source={estoque}>
              <Body color={'rgba(2,25,54,0.7)'}>
                <Title>Estoque</Title>
              </Body>
            </BkImg>
          </Mold>
        </Button>

        <Button onPress={() => navigation.navigate('Recive')}>
          <Mold color={'#ffc000'}>
            <BkImg source={retirada}>
              <Body color={'rgba(45,34,0,0.7)'}>
                <Title>Retirada</Title>
              </Body>
            </BkImg>
          </Mold>
        </Button>
      </SafeAreaView>
    </>
  );
};
