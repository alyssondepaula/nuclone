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
  margin-top: ${RFValue(12)}px;
  margin-bottom: ${RFValue(12)}px;
`;

export const Heading = styled.Text`
  color: #000000;
  font-size: ${RFValue(16)}px;
  font-weight: 100;
`;

export const SubHeading = styled.Text`
  color: #000000;
  font-size: ${RFValue(12)}px;
  font-weight: 100;
`;