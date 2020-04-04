import styled from 'styled-components/native';
import LQr from './qrcodeLayout';

export const LayoutQr = styled(LQr)`
  flex: 1;
  width: 100%;
  height: 100%;
`;
export const SafeAreaView = styled.SafeAreaView`
  background: ${props => props.bg || '#ff1a43'};
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
  min-height: 80px;
  margin: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 15px;
  border-radius: 10px;
`;
