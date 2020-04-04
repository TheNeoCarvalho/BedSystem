import React from 'react';
import {ScrollView, StatusBar} from 'react-native';
import {SafeAreaView, Item, Title, Text} from './styles';
import {ButtonQRCode} from '../../../readQr';
import ConfirmWithQR from '../../../confirmWithQr';
import {Toast} from 'native-base';
export default ({navigation}) => {
  const data = {
    item: '7c42a4ef-57be-46b1-a7fc-54d3063bc3bf',
    address: '9d08f2f1-987a-419b-9324-700c517bb426',
  };
  const goBack = res => {
    navigation.goBack();
    Toast.show({
      text: 'Item endereçado com sucesso!',
      buttonText: 'ok',
      duration: 35000,
      type: 'success',
    });
  };
  return (
    <ConfirmWithQR headerTintColor={'#0077e2'} data={data} callback={goBack} />
  );
};
