import React, { useRef, useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import RealTimeProgress from "./RealTimeProgress";
import GraphScreen from './GraphScreen'
import SwitchScreen from './SwitchScreen'
import ProfileScreen from "./ProfileScreen";
import WeatherScreen from "./WeatherScreen";
import Entypo from 'react-native-vector-icons/Entypo';

const Stack = createStackNavigator();

const HomeStackScreen = ({navigation})=>(
    <Stack.Navigator screenOptions={{...screenOptions,headerStyle:{backgroundColor:'#19ff79'}}}>
        <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
                headerTitleAlign:'center',
                headerLeft:()=>(
                    <Entypo 
                        name="menu" 
                        color="#ffffff" 
                        size={30} 
                        onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer())} 
                    />
                ) 
            }}
        />
    </Stack.Navigator>
)

const GraphStackScreen = ({navigation})=>(
    <Stack.Navigator screenOptions={{...screenOptions,headerStyle:{backgroundColor:'#e30eff'}}}>
        <Stack.Screen 
            name="Progress" 
            component={RealTimeProgress} 
            options={{
                headerTitleAlign:'center',
                headerLeft:()=>(
                    <Entypo 
                        name="menu" 
                        color="#ffffff" 
                        size={30} 
                        onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer())} 
                    />
                ) 
            }}
        />
    </Stack.Navigator>
)
const GraphsStackScreen = ({navigation})=>(
    <Stack.Navigator screenOptions={{...screenOptions,headerStyle:{backgroundColor:'#ff0e56'}}}>
        <Stack.Screen 
            name="Graph" 
            component={GraphScreen} 
            options={{
                headerTitleAlign:'center',
                headerLeft:()=>(
                    <Entypo 
                        name="menu" 
                        color="#ffffff" 
                        size={30} 
                        onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer())} 
                    />
                ) 
            }}
        />
    </Stack.Navigator>
)
const SwitchStackScreen = ({navigation})=>(
    <Stack.Navigator  screenOptions={{...screenOptions,headerStyle:{backgroundColor:'#0e32ff'}}}>
        <Stack.Screen 
            name="Switches" 
            component={SwitchScreen} 
            options={{
                headerTitleAlign:'center',
                headerLeft:()=>(
                    <Entypo 
                        name="menu" 
                        color="#ffffff" 
                        size={30} 
                        onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer())} 
                    />
                ) 
            }}
        />
    </Stack.Navigator>
)

const ProfileStackScreen = ({navigation}) =>(
    <Stack.Navigator screenOptions={{...screenOptions,headerStyle:{backgroundColor:'#0b3f3f'}}} >
        <Stack.Screen 
            name="Profile" 
            component={ProfileScreen} 
            options={{
                headerTitleAlign:'center',
                headerLeft:()=>(
                    <Entypo 
                        name="menu" 
                        color="#ffffff" 
                        size={30} 
                        onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer())} 
                    />
                ) 
            }} 
        />
    </Stack.Navigator>
)
const WeatherStackScreen = ({navigation}) =>(
    <Stack.Navigator screenOptions={{...screenOptions,headerStyle:{backgroundColor:'#034266'}}} >
        <Stack.Screen 
            name="Weather" 
            component={WeatherScreen} 
            options={{
                headerTitleAlign:'center',
                headerLeft:()=>(
                    <Entypo 
                        name="menu" 
                        color="#ffffff" 
                        size={30} 
                        onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer())} 
                    />
                ) 
            }} 
        />
    </Stack.Navigator>
)


const screenOptions ={
    headerStyle:{
        backgroundColor: '#8e20ce',
        color:'white'
    },
    headerTitleStyle:{
        color:'white'
    }
}
const options = {
    headerTitleAlign:'center',
    headerLeft:()=>(
        <Entypo 
            name="menu" 
            color="#ffffff" 
            size={30} 
            onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer())} 
        />
    
    ) 
}
module.exports = {
    HomeStackScreen,
    GraphStackScreen,
    GraphsStackScreen,
    SwitchStackScreen,
    ProfileStackScreen,
    WeatherStackScreen
}