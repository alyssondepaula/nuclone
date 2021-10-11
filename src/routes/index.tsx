import React from 'react';
import { View } from 'react-native';
import AppRoutes from './appRoutes';
import AuthRoutes from './authRoutes';


const Routes: React.FC = () => {


  const siggned = true;


  return siggned ? <AppRoutes/> : <AuthRoutes/>;
}

export default Routes;