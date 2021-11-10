import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



import Gifs from './Gifs'
import Stickers from './Stickers'
import Letters from './Letters'


const Tab = createMaterialTopTabNavigator();

export default function NavigationMenu() {
  return (

    <NavigationContainer >
      <Tab.Navigator>
        <Tab.Screen name="Gifs" component={Gifs} />
        <Tab.Screen name="Stickers" component={Stickers} />
        <Tab.Screen name="Letters" component={Letters} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}
