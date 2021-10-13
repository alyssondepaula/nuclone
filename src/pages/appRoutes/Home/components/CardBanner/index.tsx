import React, { useContext } from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import { AppBlurView, Balance, Container, Heading, HorizontalView, Invoice, SubHeading } from './styles';
import { ThemeContext } from 'styled-components/native';
import { BlurView } from 'expo-blur';

interface IPromoteBannerProps {
    iconName: any
    heading: string
    invoice: string
    subHeading: string
    isBlur: boolean

}

const CardBanner: React.FC<IPromoteBannerProps> = ({iconName,heading,invoice,subHeading, isBlur}) => {


  const theme = useContext(ThemeContext);  


  return( 
  
       <Container>
       <MaterialCommunityIcons name={iconName} size={24} color={theme.colors.textNegative} />
       <HorizontalView>
       <Heading>{heading}</Heading>
       <MaterialCommunityIcons name="chevron-right" size={24} color={theme.colors.textNegative} />
       </HorizontalView>
       <Invoice>Fatura Atual</Invoice>
       <AppBlurView intensity={!isBlur ? 0 : 15} tint="dark">
       <Balance>{!isBlur && `R$ ${invoice}`}</Balance>
       </AppBlurView>
       <SubHeading>{subHeading}</SubHeading>
       </Container>
  
  );
}

export default CardBanner;