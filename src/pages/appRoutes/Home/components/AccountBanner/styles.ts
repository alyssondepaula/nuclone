import { BlurView } from 'expo-blur';
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
  color: ${({theme})=> theme.colors.textNegative};
  font-family:  ${({theme})=> theme.fonts.regular};
  font-size: ${RFValue(16)}px;
`;

export const SubHeading = styled.Text`
  color: ${({theme})=> theme.colors.textNegative};
  font-family:  ${({theme})=> theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  font-weight: 100;
`;

export const Invoice = styled.Text`
  color: ${({theme})=> theme.colors.textNegative};
  font-family:  ${({theme})=> theme.fonts.medium};
  font-size: ${RFValue(12)}px;
  font-weight: 100;
`;

export const Balance = styled.Text`
  color: ${({theme})=> theme.colors.textNegative};
  font-family:  ${({theme})=> theme.fonts.bold};
  font-size: ${RFValue(24)}px;
  font-weight: 100;
`;
export const ButtonMyCards = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(55)}px;
  flex-direction: row;
  background-color: ${({theme})=> theme.colors.box};
  padding: ${RFValue(16)}px ${RFValue(18)}px;
  margin-top: ${RFValue(18)}px;
  margin-bottom: ${RFValue(18)}px;
  border-radius: ${RFValue(10)}px;
  align-items: center;
`;

export const Box = styled.TouchableOpacity`
  width: ${RFValue(220)}px;
  height: ${RFValue(65)}px;
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

export const Text = styled.Text`
  color: ${({theme})=> theme.colors.textNegative};
  font-family:  ${({theme})=> theme.fonts.regular};
  font-size: ${RFValue(10)}px;
`;


export const BoxCategories = styled.TouchableOpacity`
  width: ${RFValue(70)}px;
  height: ${RFValue(100)}px;
  align-items: center;
  justify-content: space-around;
  margin-top: ${RFValue(14)}px;
  margin-bottom: ${RFValue(14)}px;
  margin-right: ${RFValue(20)}px;
  border-radius: ${RFValue(10)}px;
`;

export const CategorieView = styled.View`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
  background-color: ${({theme})=> theme.colors.box};
  justify-content: space-between;
  border-radius: ${RFValue(35)}px;
  align-items: center;
  justify-content: center;
`;

export const CategoriesText = styled.Text`
  color: ${({theme})=> theme.colors.textNegative};
  font-family:  ${({theme})=> theme.fonts.medium};
  font-size: ${RFValue(11)}px;
  text-align: center;
`;

export const IconInternalBox = styled.View`
  position: absolute;
  bottom: 0px;
  width: ${RFValue(35)}px;
  height: ${RFValue(25)}px;
  background-color: ${({theme})=> theme.colors.primary};
  border-radius: ${RFValue(4)}px;
  align-items: center;
  justify-content: center;
`;

export const IconInternalBoxText = styled.Text`
  color: #FFFFFF;
  font-family:  ${({theme})=> theme.fonts.bold};
  font-size: ${RFValue(11)}px;
  text-align: center;
`;

export const AppBlurView = styled(BlurView)`
    flex: 1;
`;