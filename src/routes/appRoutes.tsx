import React, { useContext } from 'react';
import { Alert, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/appRoutes/Home';
import { NativeStackScreenProps } from '@react-navigation/native-stack';



export type RootStackParamList = {
    Home: undefined;
  };

const Stack = createNativeStackNavigator<RootStackParamList>();

type Props = NativeStackScreenProps<RootStackParamList>;

export type AppStackNavigationNavigationProp = Props['navigation'];

export type AppStackNavigationRouteProp = Props['route'];



const AppRoutes: React.FC = () => {
  return <Stack.Navigator initialRouteName='Home'>
  <Stack.Screen 
  name='Home' 
  component={Home} 
  options={{
    headerShown: false
  }}
  />
</Stack.Navigator>
}

export default AppRoutes;