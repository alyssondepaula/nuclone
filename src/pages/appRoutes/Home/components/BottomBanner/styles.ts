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
  color: #000000;
  font-size: ${RFValue(16)}px;

  font-weight: bold;
`;

export const SubHeading = styled.Text`
  color: #000000;
  font-size: ${RFValue(12)}px;
  font-weight: 100;
`;

export const Text = styled.Text`
  color: #FFFFFF;
  font-size: ${RFValue(11)}px;
  font-weight: bold;
`;

export const Box = styled.TouchableOpacity`
  width: ${RFValue(220)}px;
  height: ${RFValue(160)}px;
  background-color: ${({theme})=> theme.colors.gray};
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