import React from 'react';
import ConfirmWithQR from '../../../confirmWithQr';
import { StackActions } from '@react-navigation/native';
import {Toast} from 'native-base';
export default ({navigation, route}) => {
  const callback = route.params?.callback ?? null;

  const data = {
    item: '7c42a4ef-57be-46b1-a7fc-54d3063bc3bf',
    address: '9d08f2f1-987a-419b-9324-700c517bb426',
  };
  const goBack = res => {
    callback();
    navigation.dispatch(StackActions.pop(2));
    Toast.show({
      text: 'Item retirado com sucesso!',
      buttonText: 'ok',
      duration: 35000,
      type: 'success',
    });
  };
  return (
    <ConfirmWithQR secundary={'#0077e2'} headerTintColor={'#ffc000'} data={data} callback={goBack} />
  );
};
