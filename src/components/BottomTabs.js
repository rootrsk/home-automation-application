import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

import HomeScreen from '../screens/HomeScreen';
import RealTimeProgress from '../screens/RealTimeProgress';

import { HomeStackScreen,GraphStackScreen } from '../screens/StackScreens'
const Tab = createMaterialBottomTabNavigator();
function MyTabs() {
    return (
            <Tab.Navigator
                initialRouteName="Feed"
                activeColor="#ffffff"
                // barStyle={{ backgroundColor: '#8e20ce' }}
                // tabBarOptions={{
                //     activeTintColor: 'red',
                // }}
            >
                <Tab.Screen
                        name="Home"
                        component={HomeStackScreen}
                        options={{
                            tabBarLabel: 'Home',
                            tabBarColor:'#ffffff',
                            tabBarIcon: ({ color, size }) => (
                                <AntDesign name="dashboard" color={color} size={24} />
                            ),
                        }}
                />
            <Tab.Screen
                    name="Notifications"
                    component={RealTimeProgress}
                    options={{
                        tabBarLabel: 'Graph',
                        tabBarIcon: ({ color, size }) => (
                            <Entypo name="line-graph" color={'blue'} size={24} />
                        )
                    }}
            />
        
        </Tab.Navigator>
    );
}

export default MyTabs