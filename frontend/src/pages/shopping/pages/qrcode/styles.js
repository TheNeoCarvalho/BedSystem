import styled from 'styled-components/native';
import QrC from 'react-native-qrcode-svg';
export const QRCode = styled(QrC)``;
export const Content = styled.View`
  align-self: center;
  height: 180px;
  width: 180px;
  margin: 80px;
`;
export const SafeAreaView = styled.SafeAreaView`
  background: #ff1a43;
  height: 100%;
  flex: 1;
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
  min-height: 80px;
  margin: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 15px;
  border-radius: 10px;
`;
