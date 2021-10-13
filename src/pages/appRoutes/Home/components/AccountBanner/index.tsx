import React, { useContext } from 'react';
import { Alert, FlatList, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import { AppBlurView, Balance, Box, BoxCategories, Button, ButtonMyCards, CategoriesText, CategorieView, Container, Heading, HorizontalView, IconInternalBox, IconInternalBoxText, Invoice, SubHeading, Text } from './styles';
import { ThemeContext } from 'styled-components/native';
import { IAccountBottomBanner, IBoxCategories } from '../..';
import { RFValue } from 'react-native-responsive-fontsize';

interface IPromoteBannerProps {
    categoriesData: IBoxCategories[]
    AccountBottomBannerData: IAccountBottomBanner[]
    heading: string
    invoice: string
    isBlur: boolean
}

const AccountBanner: React.FC<IPromoteBannerProps> = ({heading,categoriesData, AccountBottomBannerData, invoice, isBlur}) => {


  const theme = useContext(ThemeContext);  


  return( 
  
       <Container>
       <TouchableOpacity>
       <HorizontalView>
       <Heading>{heading}</Heading>
       <MaterialCommunityIcons 
       name="chevron-right" 
       size={24} 
       color={theme.colors.textNegative}
       />
       </HorizontalView>
       <AppBlurView intensity={!isBlur ? 0 : 15} tint={theme.isDark ? "light" :"dark"}>
       <Balance>{!isBlur && `R$ ${invoice}`}</Balance>
       </AppBlurView>
       </TouchableOpacity>
       <FlatList
          
          data={categoriesData}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index)=> item.IconName+index}
          renderItem={({item})=>{

            return <BoxCategories>
              <CategorieView>
              <MaterialCommunityIcons name={item.IconName} size={24} color={theme.colors.textNegative} />
              {item.IconInternalBox && <IconInternalBox>
                <IconInternalBoxText>{item.IconInternalBox}</IconInternalBoxText>
                </IconInternalBox>
              }
              </CategorieView>
              <CategoriesText>{item.IconText}</CategoriesText>
            </BoxCategories>

          }}
        
        />
       <ButtonMyCards>
          <MaterialCommunityIcons name="cellphone-iphone" size={24} color={theme.colors.textNegative}s />
          <Text
          style={{marginLeft: RFValue(6)}}
          >Meus Cartões</Text>
       </ButtonMyCards>
       <FlatList
          
          data={AccountBottomBannerData}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index)=> item.text+index}
          renderItem={({item})=>{

            return <Box>
              <Text>{item.text}  <Text style={{color: theme.colors.primary}}>{item.textHigh}</Text></Text>
            </Box>

          }}
        
        />
       </Container>
  
  );
}

export default AccountBanner;