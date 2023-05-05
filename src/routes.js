import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Services, Cart } from './screens';
import { cores } from './styles/global'

const Tab = createBottomTabNavigator();

export default function Routes () {
    return <NavigationContainer>
        <Tab.Navigator
            screenOptions={{
                tabBarActiveBackgroundColor: cores.roxo,
                tabBarInactiveTintColor: cores.claro,
                tabBarActiveBackgroundColor: cores.roxo,
                tabBarInactiveBackgroundColor: cores.laranja,
                tabBarStyle:{
                    height: 70
                },
                tabBarLabelStyle:{
                    width: '100%',
                    flex: 1,
                    fontSize: 16,
                    fontWeight: 'bold',
                    lineHeight: 10, 
                    paddingTop: 21,
                    backgroundColor: cores.laranja
                },
                tabBarHideOnKeyboard: true
            }}
            >
            <Tab.Screen name='Serviços' component={Services}/>
            <Tab.Screen name='Carrinho' component={Cart}/>
        </Tab.Navigator>
    </NavigationContainer>
}