import React from 'react';
import {StatusBar, FlatList} from 'react-native';
import {SafeAreaView, Item, Title, Text, Button, Content} from './styles';

export default ({navigation}) => {
  const data = {
    item: '7c42a4ef-57be-46b1-a7fc-54d3063bc3bf',
    address: '9d08f2f1-987a-419b-9324-700c517bb426',
  };

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      address: 'Rua x, Locker A, Gaveta 001',
      item: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      address: 'Rua x, Locker A, Gaveta 002',
      item: '3ac68afc-c1b1-46c2-aed5-fbd91aa97f63',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      address: 'Rua x, Locker A, Gaveta 003',
      item: '58694a0f-c1b1-46c2-aed5-145571e29d72',
    },
  ];
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <SafeAreaView>
        <Content>
          <FlatList
            data={DATA}
            renderItem={({item: {item, address}}) => (
              <Button onPress={() => navigation.navigate('ConfirmStock')}>
                <Item>
                  <Title>ENDEREÇO:</Title>
                  <Text>{address}</Text>
                  <Title>COD PRODUTO:</Title>
                  <Text>{item}</Text>
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
