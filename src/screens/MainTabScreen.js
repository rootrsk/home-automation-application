import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

import HomeScreen from '../screens/HomeScreen';
import RealTimeProgress from '../screens/RealTimeProgress';
import { HomeStackScreen,GraphStackScreen,GraphsStackScreen, SwitchStackScreen } from './StackScreens'
const Tab = createMaterialBottomTabNavigator();
function MyTabs() {
    return (
            <Tab.Navigator
                initialRouteName="Feed"
                activeColor = "#ffffff"
                barStyle={{ backgroundColor: '#8e20ce' }}
                tabBarOptions={{
                    activeTintColor: 'red',
                }}
            >
                <Tab.Screen
                name="Home"
                component={HomeStackScreen}
                tabBarColor='red'
                options={{
                    tabBarLabel: 'Home',
                    tabBarColor: '#19ff79',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="dashboard" color={color} size={24} />
                    ),
                }}
            />
            <Tab.Screen
                name="Switch"
                component={SwitchStackScreen}
                tabBarColor='red'
                options={{
                    tabBarLabel: 'Switch',
                    tabBarColor: '#0e32ff',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="gesture-tap-button" color={color} size={24} />
                    ),
                }}
            />
            <Tab.Screen
                name="Progress"
                component={GraphStackScreen}
                options={{
                    tabBarLabel: 'Progress',
                    tabBarColor: '#e30eff',
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="circular-graph" color={color} size={24} />
                    )
                }}
            />
            <Tab.Screen
                name="Graphs"
                component={GraphsStackScreen}
                options={{
                    tabBarLabel: 'Graph',
                    tabBarColor: '#ff0e56',
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="line-graph" color={color} size={24} />
                    )
                }}
            />
        
        </Tab.Navigator>
    );
}

export default MyTabs