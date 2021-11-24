import * as React from 'react';
import { Text, View, Image, StyleSheet, NativeModules } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



import Gifs from './Gifs'
import Stickers from './Stickers'
import Keyboard from './Letters'

const {MessagesManager} = NativeModules;

const Tab = createMaterialTopTabNavigator();

export default function NavigationMenu() {
    
  return (

    <NavigationContainer >
      <Tab.Navigator tabBarOptions={{
          showLabel: false, 
          activeBackgroundColor: '#ffffff',
          inactiveBackgroundColor: '#789g76',
          tabStyle:{ //Add this 
              borderTopRightRadius:20,//add border top right radius
              borderTopLeftRadius:20,//add border top left radius
              paddingVertical:3
          },
        //   style:{
        //       position:'absolute',
        //       bottom:0,
        //       right:0,
        //       left:0,
        //       elevation:0,
        //       height:60,

        //   },
        style: {
            // position: 'absolute',
            // bottom: 25,
            // left: 20,
            // right: 20,
            elevation: 0,
            backgroundColor: '#007DFF',
            // borderRadius: 15,
            height: 50,
            borderBottomColor: 'white',
            borderBottomWidth: 3,
            // borderTopRightRadius:20,//add border top right radius
            // borderTopLeftRadius:20,//add border top left radius
            // paddingVertical:3
    }
      }}>
        <Tab.Screen name="Gifs" component={Gifs} options={{
            tabBarIcon: ({focused}) => (
                <View >
                    <Image
                    source={require('./icons/GIF.png')} style={{
                        width:25,
                        height: 25,
                        tintColor: focused ? '#ffffff' : '#ddd',
                        // borderTopWidth: focused ? 2 : 0,
                        borderColor: '#ffffff',
                  
                    }}></Image>
                </View>
            )
        }}/>
        <Tab.Screen name="Stickers" component={Stickers} options={{
            tabBarIcon: ({focused}) => (
                <View >
                    <Image
                    source={require('./icons/sticker.png')} style={{
                        width:25,
                        height: 25,
                        tintColor: focused ? '#ffffff' : '#ddd',
                    }}></Image>
                </View>
            )
        }}/>
        <Tab.Screen name="Ojiis" component={Keyboard} options={{
            tabBarIcon: ({focused}) => (
                <View >
                    <Image
                    source={require('./icons/Ojiis.png')} style={{
                        width:25,
                        height: 25,
                        tintColor: focused ? '#ffffff' : '#ddd',
                    }}></Image>
                </View>
            )
        }}/>
                <Tab.Screen name="Create" component={Keyboard} options={{
            tabBarIcon: ({focused}) => (
                <View >
                    <Image
                    source={require('./icons/Create.png')} style={{
                        width:25,
                        height: 25,
                        tintColor: focused ? '#ffffff' : '#ddd',
                    }}></Image>
                </View>
            )
        }}/>
      </Tab.Navigator>
    </NavigationContainer>

  );
}
