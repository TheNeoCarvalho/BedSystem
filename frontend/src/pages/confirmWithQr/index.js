import React, {useState} from 'react';
import {SafeAreaView, ButtonQr, ButtonConfirm, Title, H1} from './styles';

export default ({headerTintColor, secundary, data, callback}) => {
  const [item, setItem] = useState();
  const [address, setAddres] = useState();
  const resItem = prod => setItem(prod.barcodes[0].data);
  const resEnd = end => setAddres(end.barcodes[0].data);
  const returnType = (it1, it2) => {
    if (!it1) {
      return 'Não Definido!';
    } else if (it1 && it1 === it2) {
      return 'Confere com o esperado!';
    }
    return 'Inválido!';
  };
  const returnStatus = (it1, it2) => {
    if (!it1) {
      return '#f4f4f4';
    } else if (it1 && it1 === it2) {
      return secundary || '#92bf25';
    }
    return '#ff3c56';
  };
  return (
    <SafeAreaView color={headerTintColor}>
      <H1>
        Item:{' '}
        <H1 color={returnStatus(item, data.item)}>
          {returnType(item, data.item)}
        </H1>
      </H1>
      <ButtonQr
        title="LER COD ITEM"
        color={headerTintColor}
        tintColor={headerTintColor}
        callback={resItem}
      />
      <H1>
        Endereco:{' '}
        <H1 color={returnStatus(address, data.address)}>
          {returnType(address, data.address)}
        </H1>
      </H1>
      <ButtonQr
        title="LER COD ENDEREÇO"
        color={headerTintColor}
        tintColor={headerTintColor}
        callback={resEnd}
      />
      {item === data.item && address === data.address && (
        <ButtonConfirm color={secundary} onPress={() => callback({item, address})}>
          <Title>Confirmar</Title>
        </ButtonConfirm>
      )}
    </SafeAreaView>
  );
};
