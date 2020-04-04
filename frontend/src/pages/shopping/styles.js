import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {Button as BTN, Text as Txt} from 'native-base';

export const SafeAreaView = styled.SafeAreaView`
  background: #ff1a43;
  height: 100%;
  flex: 1;
`;
export const Title = styled(Txt)`
  font-size: 30px;
  margin-bottom: 10px;
  color: #4f4f4f;
`;
export const Text = styled(Txt)`
  text-align: center;
`;

export const Image = styled.Image`
  max-width: 100%;
  height: auto;
`;
export const Button = styled(BTN)`
  background: #92bf25;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  color: #fff;
`;
export const Card = styled.View`
  background: #ffffff;
  border-width: 1px;
  border-color: #e8e8e8;
  border-radius: 3px;
  padding: 10px;
  padding-bottom: 30px;
  margin-top: 10px;
`;
export default StyleSheet.create({
  img: {
    aspectRatio: 3 / 1,
  },
});
