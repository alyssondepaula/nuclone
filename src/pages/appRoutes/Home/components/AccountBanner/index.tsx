import React, { useContext } from 'react';
import { FlatList, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import { Balance, Box, BoxCategories, Button, ButtonMyCards, CategoriesText, CategorieView, Container, Heading, HorizontalView, IconInternalBox, IconInternalBoxText, Invoice, SubHeading, Text } from './styles';
import { ThemeContext } from 'styled-components/native';
import { IBoxCategories } from '../..';

interface IPromoteBannerProps {
    categoriesData: IBoxCategories[]
    bottomBannerData: any
    categorieIcon: any
    categorieText: string
    heading: string
    subHeading: string
}

const AccountBanner: React.FC<IPromoteBannerProps> = ({heading,categoriesData, bottomBannerData, categorieIcon, categorieText}) => {


  const theme = useContext(ThemeContext);  


  return( 
  
       <Container>
       <HorizontalView>
       <Heading>{heading}</Heading>
       <MaterialCommunityIcons name="chevron-right" size={24} color={theme.colors.primary} />
       </HorizontalView>
       <Balance>R$ 17,74</Balance>
       <FlatList
          
          data={categoriesData}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index)=> item.IconName+index}
          renderItem={({item})=>{

            return <BoxCategories>
              <CategorieView>
              <MaterialCommunityIcons name={item.IconName} size={24} color='black' />
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
          <Text>Meus Cartões</Text>
       </ButtonMyCards>
       <FlatList
          
          data={bottomBannerData}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index)=> item.heading+index}
          renderItem={({item})=>{

            return <Box>
              <Text>{item.buttonText}</Text>
            </Box>

          }}
        
        />
       </Container>
  
  );
}

export default AccountBanner;