import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: column;
`;

export const HorizontalView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${RFValue(4)}px;
  margin-bottom: ${RFValue(12)}px;
`;

export const Heading = styled.Text`
  color: ${({theme})=> theme.colors.textNegative};
  font-family:  ${({theme})=> theme.fonts.medium};
  font-size: ${RFValue(16)}px;

`;

export const SubHeading = styled.Text`
  color: ${({theme})=> theme.colors.textNegative};
  font-family:  ${({theme})=> theme.fonts.regular};
  font-size: ${RFValue(12)}px;
`;

export const Text = styled.Text`
  color: #FFFFFF;
  font-family:  ${({theme})=> theme.fonts.bold};
  font-size: ${RFValue(11)}px;
  font-weight: bold;
`;

export const Box = styled.TouchableOpacity`
  width: ${RFValue(220)}px;
  height: ${RFValue(160)}px;
  background-color: ${({theme})=> theme.colors.box};
  justify-content: space-between;
  padding: ${RFValue(16)}px ${RFValue(18)}px;
  margin-right: ${RFValue(20)}px;
  border-radius: ${RFValue(10)}px;
`;

export const Button = styled.View`
  width: ${RFValue(120)}px;
  height: ${RFValue(40)}px;
  background-color: ${({theme})=> theme.colors.primary};
  margin-right: ${RFValue(20)}px;
  border-radius: ${RFValue(20)}px;
  align-items: center;
  justify-content: center;
`;