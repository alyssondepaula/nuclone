import React, { useState } from 'react';
import { Alert, ScrollView, View } from 'react-native';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { IUser } from '../../../store/reducers/user';
import AccountBanner from './components/AccountBanner';
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


export interface IBoxCategories {

    IconName: any
    IconInternalBox?: string 
    IconText: string


}

const CategoriesData: IBoxCategories[] = [

  {
    IconName: 'bank-transfer-in',
    IconText: 'Pix',
  },
  {
    IconName: 'barcode',
    IconText: 'Pagar',
  },
  {
    IconName: 'cash-refund',
    IconText: 'Transferir',
  },
  {
    IconName: 'cash-plus',
    IconText: 'Depositar',
  },
  {
    IconName: 'cellphone-iphone',
    IconText: 'Recarga de celular',
  },
  {
    IconName: 'cash-usd',
    IconText: 'Cobrar',
  },
  {
    IconName: 'heart-outline',
    IconText: 'Doação',
  },
  {
    IconName: 'web',
    IconText: 'Trasferir Internac.',
  },
  {
    IconName: 'help-circle-outline',
    IconInternalBox: 'Dica',
    IconText: 'Encontrar atalhos',
  },
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
      <AccountBanner

      heading={'Conta'} 
      subHeading={'Limite disponivel de R$ 1000,00'}
      bottomBannerData={DATA}
      categorieIcon={'credit-card-outline'}
      categorieText={'rgrho'}
      categoriesData={CategoriesData}
      
      />
    </Box>

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