import React, {useState, useEffect} from 'react';
import {SafeAreaView, ButtonQr, ButtonConfirm, Title, H1} from './styles';
export default ({navigation}) => {
  const [item, setItem] = useState();
  const resItem = prod => setItem(prod.barcodes[0].data);
  const returnType = (it1, it2) => {
    if (!it1) {
      return 'Não Definido!';
    } else {
      return 'Dados em Memória!';
    }
  };
  const returnStatus = it1 => {
    if (!it1) {
      return '#f4f4f4';
    } else {
      return '#0077e2';
    }
  };
  const headerTintColor = '#ffc000';
  const callback = () => setItem(null);
  return (
    <SafeAreaView color={headerTintColor}>
      <H1>
        Status: <H1 color={returnStatus(item)}>{returnType(item)}</H1>
      </H1>
      <ButtonQr
        title="LER QR CODE"
        color={headerTintColor}
        tintColor={headerTintColor}
        callback={resItem}
      />
      {item && (
        <ButtonConfirm
          onPress={() => navigation.navigate('RotaRecive', {callback})}>
          <Title>Ver Endereço</Title>
        </ButtonConfirm>
      )}
    </SafeAreaView>
  );
};
