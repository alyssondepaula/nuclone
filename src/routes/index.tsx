import React from 'react';
import { View } from 'react-native';
import { useAppSelector } from '../hooks/useAppSelector';
import { IUser } from '../store/reducers/user';
import AppRoutes from './appRoutes';
import AuthRoutes from './authRoutes';


const Routes: React.FC = () => {

 
  const user: IUser = useAppSelector(state=> state.user)

  const siggned = !!user.data;


  return siggned ? <AppRoutes/> : <AuthRoutes/>;
}

export default Routes;