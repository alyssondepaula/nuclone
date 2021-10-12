import React, { useState } from 'react';
import { Alert, ScrollView, View } from 'react-native';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { IUser } from '../../../store/reducers/user';
import BottomBanner from './components/BottomBanner';
import CardBanner from './components/CardBanner';
import Header from './components/Header';
import PromoteBanner from './components/PromoteBanner';

import { Box, Container, StatusBar } from './styles';


export interface IBoxBottomBanner {

  heading: string;
  subheading: string;
  buttonText: string;


}

const DATA: IBoxBottomBanner[] = [

  {
    heading: 'Indique seus Amigos',
    subheading: 'Mostre aos seus amigos como é fácil ter uma vida sem burocracia.',
    buttonText: 'Indicar Amigos'
  },
  {
    heading: 'Whatsapp',
    subheading: 'Pagamentos seguros, rápidos e sem tarifa. A experiência Nubank sem nem sair da ...',
    buttonText: 'Quero Conhecer'
  }
]

const Home: React.FC = () => {


  const [blur,setBlur] = useState<boolean>(false)

  const user: IUser = useAppSelector(state=> state.user)


  return ( 
    
    <>
    <StatusBar/>
    <ScrollView>
    <Container>
    <Header name={user.data.email} isBlur={blur} setBlur={()=>setBlur(!blur)}/>

    <Box>
      <CardBanner
      iconName={'credit-card-outline'}
      heading={'Cartão Bloqueado'} 
      subHeading={'Limite disponivel de R$ 1000,00'}/>
    </Box>

    <Box>
      <PromoteBanner 
      iconName={'chart-bar'}
      heading={'Investimentos'} 
      subHeading={'O Jeito Nu de investir: sem asteriscos, linguagem fácil e a partir de R$1. Saiba Mais.'}/>
    </Box>

    <Box>
      <PromoteBanner 
      iconName={'heart-outline'}
      heading={'Seguro de Vida'} 
      subHeading={'Conheça Nubank Vida: um seguro simples e que cabe no bolso.'}/>
    </Box>

    <Box>

    <BottomBanner
      
      heading={'Descubra Mais'} 
      bottomBannerData={DATA} />
     
    </Box>

    </Container>
    </ScrollView>
    </>
  
  );
}

export default Home;