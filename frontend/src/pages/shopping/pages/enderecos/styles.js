import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const SafeAreaView = styled.SafeAreaView`
  background: #ff1a43;
  flex: 1;
`;
export const Content = styled.View`
  background: #ff1a43;
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
const ButtonAndroid = styled.TouchableNativeFeedback``;
const ButtonIos = styled.TouchableOpacity`
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
export const Button = Platform.OS === 'android' ? ButtonAndroid : ButtonIos;
const ItemAndroid = styled.View`
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
const ItemIos = styled.View`
  justify-content: center;
  flex: 1;
`;
export const Item = Platform.OS === 'android' ? ItemAndroid : ItemIos;
