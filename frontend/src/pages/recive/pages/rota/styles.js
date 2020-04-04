import styled from 'styled-components/native';
import {Button as Btn, Text as Txt} from 'native-base';

export const ButtonConfirm = styled(Btn)`
  background: #0077e2;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;
export const TitleButton = styled(Txt)``;
export const SafeAreaView = styled.SafeAreaView`
  background: #ffc000;
  flex: 1;
`;
export const Content = styled.View`
  background: #ffc000;
  flex: 1;
  padding-top: 15px;
`;
export const Title = styled.Text`
  color: #1b1b1b;
  font-size: 12px;
  font-weight: bold;
`;

export const Text = styled.Text`
  color: #525252;
  font-size: 16px;
  margin-bottom: 5px;
`;

export const Item = styled.View`
  background: rgba(255, 255, 255, 0.6);
  flex: 1;
  justify-content: center;
  margin: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 15px;
  border-radius: 10px;
`;
