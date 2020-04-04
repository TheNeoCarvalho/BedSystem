import React from 'react';
import {ScrollView, StatusBar} from 'react-native';
import {SafeAreaView, Item, Title, Text, QRCode, Content} from './styles';

export default () => {
  const data = {
    item: '7c42a4ef-57be-46b1-a7fc-54d3063bc3bf',
    address: '9d08f2f1-987a-419b-9324-700c517bb426',
  };
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Content>
            <QRCode
              value={JSON.stringify(data)}
              size={180}
              backgroundColor={'#ff1a43'}
              color={'#ffffff'}
            />
          </Content>
          <Item>
            <Title>ENDEREÇO:</Title>
            <Text>Rua x, Locker A, Gaveta 003</Text>
            <Title>COD PRODUTO:</Title>
            <Text>{data.item}</Text>
          </Item>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
