import React from 'react';
import {Button, Text} from 'native-base';
import {LayoutQr} from './styles';
import {useNavigation} from '@react-navigation/native';

const ReadQRCode = ({navigation, route}) => {
  const headerTintColor = route.params?.tintColor ?? '#000000';
  const height = route.params?.barHeight ?? 180;
  const width = route.params?.barWidth ?? 180;
  const title = route.params?.headerTitle ?? 'Leitor QR Code';
  navigation.setOptions({headerTintColor, title});
  const callback = route.params?.callback ?? (() => {});
  const setBarcodes = res => {
    if (res.barcodes.length > 0) {
      callback(res);
      navigation.goBack();
    }
  };
  return (
    <LayoutQr
      setBarcodes={setBarcodes}
      edgeColor={headerTintColor}
      width={width}
      height={height}
    />
  );
};
export const ButtonQRCode = ({
  tintColor,
  barHeight,
  barWidth,
  callback,
  title,
  ...props
}) => {
  const navigation = useNavigation();
  return (
    <Button
      {...props}
      onPress={() =>
        navigation.navigate('ReadQr', {
          tintColor,
          barHeight,
          barWidth,
          callback,
        })
      }
    >
      <Text>{title}</Text>
    </Button>
  );
};
export default ReadQRCode;
