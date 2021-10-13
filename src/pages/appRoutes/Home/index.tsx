import React, { useState } from 'react';
import { Alert, ScrollView, View } from 'react-native';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
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
    IconText: 'Área Pix',
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

export interface IAccountBottomBanner {

  text: string;
  textHigh: string;


}

const AccountBottomBanner: IAccountBottomBanner[] = [

  {
    text: 'Vamos Reiventar o jeito de investir.',
    textHigh: 'Cadastre-se e não fique...',
  },
  {
    text: 'Salve seus amigos da burocracia.',
    textHigh: 'Faça um convite...',
  }
]


const Home: React.FC = () => {


  const user: IUser = useAppSelector(state=> state.user)
  const isBlur = user.isBlur


  const dispatch = useAppDispatch();

  const handleBlur = () => {
    dispatch({type:'TOGGLE_BLUR'});
  }


  return ( 
    
    <>
    <StatusBar/>
    <ScrollView>
    <Container>
    <Header name={user.data.userName} isBlur={isBlur} setBlur={()=>handleBlur()}/>

    <Box>
      <AccountBanner

      heading={'Conta'} 
      invoice={`${user.data.invoice}`}
      AccountBottomBannerData={AccountBottomBanner}
      isBlur={isBlur}
      categoriesData={CategoriesData}
      
      />
    </Box>

    <Box>
      <CardBanner
      iconName={'credit-card-outline'}
      heading={'Cartão de Crédito'} 
      invoice={`${user.data.invoice}`}
      isBlur={isBlur}
      subHeading={`Limite disponivel de R$ ${user.data.cardLimit}`}/>
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