import React from 'react';
import {FlatList, StatusBar} from 'react-native';
import {SafeAreaView, Item, Title, TitleButton, ButtonConfirm, Text, Content} from './styles';

export default ({navigation, route}) => {
  const item = route.params?.item ?? null;
  const callback = route.params?.callback ?? null;

  const DATA = [
    {
      type: 'Rua',
      name: 'x',
    },
    {
      type: 'Locker',
      name: 'A',
    },
    {
      type: 'Gaveta',
      name: '003',
    },
  ];
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <SafeAreaView>
        <Content>
          <FlatList
            data={DATA}
            renderItem={({item: data}) => (
              <Item>
                <Title>{data.type}</Title>
                <Text>{data.name}</Text>
              </Item>
            )}
            keyExtractor={item => item.id}
          />
          <ButtonConfirm onPress={()=>navigation.navigate('ConfirmacaoRecive',{callback})}>
            <TitleButton>Retirar</TitleButton>
          </ButtonConfirm>
        </Content>
      </SafeAreaView>
    </>
  );
};
