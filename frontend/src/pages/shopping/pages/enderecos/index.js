import React from 'react';
import {FlatList, StatusBar} from 'react-native';
import {SafeAreaView, Item, Title, Button, Text, Content} from './styles';

export default ({navigation, route}) => {
  const item = route.params?.item ?? null;

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      address: 'Rua x, Locker A, Gaveta 001',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      address: 'Rua x, Locker A, Gaveta 002',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      address: 'Rua x, Locker A, Gaveta 003',
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
              <Button
                onPress={() =>
                  navigation.navigate('ShowQr', {data: {...data, item}})
                }>
                <Item>
                  <Title>ENDEREÇO:</Title>
                  <Text>{data.address}</Text>
                </Item>
              </Button>
            )}
            keyExtractor={item => item.id}
          />
        </Content>
      </SafeAreaView>
    </>
  );
};
