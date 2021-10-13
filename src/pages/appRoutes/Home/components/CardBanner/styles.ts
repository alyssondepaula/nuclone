import { BlurView } from 'expo-blur';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
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
  color: ${({theme})=> theme.colors.textNegative};
  font-family:  ${({theme})=> theme.fonts.medium};
  font-size: ${RFValue(16)}px;
  font-weight: 100;
`;

export const SubHeading = styled.Text`
  color: ${({theme})=> theme.colors.textAlternative};
  font-family:  ${({theme})=> theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  font-weight: 100;
`;

export const Invoice = styled.Text`
  color: ${({theme})=> theme.colors.textAlternative};
  font-family:  ${({theme})=> theme.fonts.medium};
  font-size: ${RFValue(12)}px;
  font-weight: 100;
`;

export const Balance = styled.Text`
  color: ${({theme})=> theme.colors.textNegative};
  font-family:  ${({theme})=> theme.fonts.bold};
  font-size: ${RFValue(24)}px;
`;

export const AppBlurView = styled(BlurView)`
    flex: 1;
`;