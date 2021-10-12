import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';


export const Container = styled.View`
  width: 100%;
  height: ${RFValue(120)}px;
  background-color: ${({theme})=> theme.colors.primary};
  padding: ${RFValue(16)}px ${RFValue(18)}px;
  justify-content: space-between;
`;


export const HorizontalView = styled.View`
  
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const VerticalView = styled.View`
  flex-direction: column;
`;

export const AvatarView = styled.TouchableOpacity`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
  border-radius: ${RFValue(25)}px;
  background-color: ${({theme})=> theme.colors.primaryPastel};
  overflow: hidden;
`;

export const Avatar = styled.Image.attrs(props=>({
  source: props.source,
  resizeMode: 'contain'
}))`
 width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
`;


export const Text = styled.Text`
  color: #ffff;
  font-family:  ${({theme})=> theme.fonts.regular};
  font-size: ${RFValue(16)}px;
`;