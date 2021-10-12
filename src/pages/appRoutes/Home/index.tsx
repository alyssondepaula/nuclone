import React, { useState } from 'react';
import { Alert, View } from 'react-native';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { IUser } from '../../../store/reducers/user';
import Header from './components/Header';

import { Container, StatusBar } from './styles';

const Home: React.FC = () => {


  const [blur,setBlur] = useState<boolean>(false)

  const user: IUser = useAppSelector(state=> state.user)


  return ( 
    
    <>
    <StatusBar/>
    <Container>
    <Header name={user.data.email} isBlur={blur} setBlur={()=>setBlur(!blur)}/>
   

    </Container>
    </>
  
  );
}

export default Home;