import React from 'react';
import {ScrollView, StatusBar} from 'react-native';
import styles, {SafeAreaView, Card, Image, Title, Button, Text} from './styles';
import {useNavigation} from '@react-navigation/native';
const Tv = require('../../imgs/tv.jpg');

export default () => {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Card>
            <Title>Monitor OLED HDR 22" 144hz freesync ultawide</Title>
            <Image source={Tv} style={[styles.img]} />
            <Button block onPress={()=>navigation.navigate('EnderecoD')}>
              <Text>Comprar</Text>
            </Button>
          </Card>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
