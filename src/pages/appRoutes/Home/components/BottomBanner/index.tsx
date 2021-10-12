import React, { useContext } from 'react';
import { FlatList, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import { Box, Button, Container, Heading, HorizontalView, SubHeading, Text } from './styles';
import { ThemeContext } from 'styled-components/native';
import { IBoxBottomBanner } from '../..';

interface IPromoteBannerProps {
    heading: string
    bottomBannerData: IBoxBottomBanner[]

}



const BottomBanner: React.FC<IPromoteBannerProps> = ({heading,bottomBannerData}) => {


  const theme = useContext(ThemeContext);  


  return( 
  
       <Container>
       <HorizontalView>
       <Heading>{heading}</Heading>
       </HorizontalView>
       <FlatList
          
          data={bottomBannerData}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index)=> item.heading+index}
          renderItem={({item})=>{

            return <Box>
              <View>
              <Heading>{item.heading}</Heading>
              <SubHeading>{item.subheading}</SubHeading>
              </View>
              <Button><Text>{item.buttonText}</Text></Button>
            </Box>

          }}
        
        />
       </Container>
  
  );
}

export default BottomBanner;