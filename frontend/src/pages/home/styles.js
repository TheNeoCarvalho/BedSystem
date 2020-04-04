import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const Title = styled.Text`
  color: #fff;
  font-size: 30px;
`;

const ButtonAndroid = styled.TouchableNativeFeedback``;

const ButtonIos = styled.TouchableHighlight`
  min-height: 200px;
  height: 31%;
  margin-bottom: 5px;
`;

export const Button = Platform.OS === 'android' ? ButtonAndroid : ButtonIos;
const MoldIos = styled.View`
  min-height: 200px;
  height: 100%;
  border-left-color: ${props => props.color || '#ff1a43'};
  border-left-width: 10px;
  flex: 1;
`;
const MoldAndroid = styled.View`
  min-height: 200px;
  height: 31%;
  border-left-color: ${props => props.color || '#ff1a43'};
  border-left-width: 10px;
  margin-bottom: 5px;
`;
export const Mold = Platform.OS === 'android' ? MoldAndroid : MoldIos;

export const BkImg = styled.ImageBackground`
  flex: 1;
`;
export const Body = styled.View`
  flex: 1;
  background: ${props => props.color || 'rgba(47,5,12,0.7)'};
  justify-content: center;
  align-items: center;
`;
