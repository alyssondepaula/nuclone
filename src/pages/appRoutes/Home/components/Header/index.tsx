import React, { useContext } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Avatar, AvatarView, Container, HorizontalView, Text } from './styles';
import { ThemeContext } from 'styled-components/native';
import { useAppDispatch } from '../../../../../hooks/useAppDispatch';


interface IHeaderProps {
    name: string
    isBlur: boolean,
    setBlur(): void,
}


const Header: React.FC<IHeaderProps> = ({name,isBlur, setBlur}) => {

  const theme = useContext(ThemeContext);

  const dispatch = useAppDispatch();

  const toggleTheme = () => {
    dispatch({type:'TOGGLE_THEME'});
  }


  return( 
  
   <Container>
     <HorizontalView>
      <AvatarView onPress={()=>toggleTheme()}>
        <Avatar source={{
          uri: 'https://github.com/alyssondepaula.png',
        }}/>
      </AvatarView>
      <HorizontalView style={{width: '32%'}}>
       <MaterialCommunityIcons name={ isBlur ? "eye-off-outline" : "eye-outline"} size={24} color="white" onPress={()=>setBlur()}/>
      <MaterialCommunityIcons name="help-circle-outline" size={24} color="white" />
      <MaterialCommunityIcons name="email-plus-outline" size={24} color="white" />
      </HorizontalView>
     </HorizontalView>
     <Text>Olá, {name}</Text>
   </Container>
  
  );
}

export default Header;