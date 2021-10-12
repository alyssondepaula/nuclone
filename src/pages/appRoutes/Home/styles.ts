import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const StatusBar = styled.StatusBar.attrs(props=>({
    barStyle: props.theme.isDark ? 'dark-content' : 'light-content',
    backgroundColor: props.theme.colors.primary
 }))`
 `;

export const Container = styled.View`
   flex: 1;
   background-color: ${({theme})=> theme.colors.gray};
`;

export const Box = styled.View`
   margin-top: ${RFValue(4)}px;
   background-color: ${({theme})=> theme.colors.white};
   padding: ${RFValue(16)}px ${RFValue(18)}px;
`;


