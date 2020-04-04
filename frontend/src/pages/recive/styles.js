import styled from 'styled-components/native';
import {ButtonQRCode} from '../readQr';
import {Button as Btn, Text} from 'native-base';
import Color from 'color';

export const ButtonConfirm = styled(Btn)`
  background: #0077e2;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;
export const ButtonQr = styled(ButtonQRCode)`
  background: ${props =>
    Color(props.color)
      .darken(0.2)
      .hex() || '#92bf25'};
  justify-content: center;
  align-items: center;
  margin: 10px;
`;
export const SafeAreaView = styled.View`
  background: ${props => props.color || '#ff1a43'};
  flex: 1;
  padding-top: 15px;
`;
export const Title = styled(Text)``;

export const H1 = styled(Text)`
  padding: 10px;
  padding-bottom: 0;
  color: ${props => (props.color ? props.color : '#fff')};
  font-weight: bold;
`;

export const Item = styled.View`
  background: rgba(255, 255, 255, 0.6);
  flex: 1;
  justify-content: center;
  min-height: 80px;
  margin: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 15px;
  border-radius: 10px;
`;
