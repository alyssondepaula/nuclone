import React, { useState } from 'react';
import { Alert, View } from 'react-native';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { IUser } from '../../../store/reducers/user';
import BottomBanner from './components/BottomBanner';
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
    <Container>
    <Header name={user.data.email} isBlur={blur} setBlur={()=>setBlur(!blur)}/>

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
    </>
  
  );
}

export default Home;