import React, { useContext } from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import { Balance, Container, Heading, HorizontalView, Invoice, SubHeading } from './styles';
import { ThemeContext } from 'styled-components/native';

interface IPromoteBannerProps {
    iconName: any
    heading: string
    subHeading: string

}

const CardBanner: React.FC<IPromoteBannerProps> = ({iconName,heading,subHeading}) => {


  const theme = useContext(ThemeContext);  


  return( 
  
       <Container>
       <MaterialCommunityIcons name={iconName} size={24} color="black" />
       <HorizontalView>
       <Heading>{heading}</Heading>
       <MaterialCommunityIcons name="chevron-right" size={24} color={theme.colors.textNegative} />
       </HorizontalView>
       <Invoice>Fatura Atual</Invoice>
       <Balance>R$ 17,74</Balance>
       <SubHeading>{subHeading}</SubHeading>
       </Container>
  
  );
}

export default CardBanner;