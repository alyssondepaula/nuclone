import React, { useState } from 'react';
import { Alert, View } from 'react-native';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { IUser } from '../../../store/reducers/user';
import Header from './components/Header';
import PromoteBanner from './components/PromoteBanner';

import { Box, Container, StatusBar } from './styles';

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
     
    </Box>
   

    </Container>
    </>
  
  );
}

export default Home;