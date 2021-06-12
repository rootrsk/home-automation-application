import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { connect } from 'react-redux'
import LoginScreen from './screens/LoginScreen';
import {GraphStackScreen,ProfileStackScreen,GraphsStackScreen,SwitchStackScreen,WeatherStackScreen} from './screens/StackScreens'
import HomeTabScreen from './screens/MainTabScreen'
import io from "socket.io-client";
import DrawerContent from './components/DrawerContent'

const END_POINT = 'https://rootrsk-home-automation-api.herokuapp.com'
const Drawer = createDrawerNavigator();
const socket = io(END_POINT)
function NaviGator(props) {
    const [socketConnection,setSocketConnection] = useState(false)
    const [loginError,setLoginError] = useState('')
    const [loading,setLoading] = useState(false)

    const switchHandler = ({switch_no,status,user}) =>{
        props.dispatch({
            type: 'SET_SWITCH_STATUS',
            buttonStatus:{switch_no,status,user}
        })
    }

    useEffect(()=>{

        socket.on('connect',()=>{
            console.log('Logging in')
            setSocketConnection(true)
            props.dispatch({
                type: 'SET_SOCKET_STATUS',
                socket
            })
        })
        socket.on('disconnect',(reason)=>{
            
        })
        socket.on('login',({error,status,user})=>{
            setLoginError('')
            setLoading(false)
            console.log(error,status,user)
            if(status===200){
                props.dispatch({
                    type:'SET_USER',
                    user
                })

            } else{
                setLoginError(error)
            }
        })
        socket.on('arduino-data',(status)=>{
            status.forEach((status,index)=>{
                switchHandler({switch_no:index+1, status, user:'rootrsk'})
                return
            })
        })
        socket.on('sensor-sent',({temp,humidity,co,ch,time})=>{
            props.dispatch({
                type: 'SET_SENSORS_DATA',
                sensorsData:{temp,humidity,co,ch,time}
            })
        })
        
        socket.on('switch-triggered',({switch_no,status,username})=>{
            console.log('Triggered',switch_no,status,username)
            switchHandler({switch_no,status,user:'rootrsk'})
        })
        socket.on('arduino-connection-status',({status})=>{
            props.dispatch({
                type:'SET_ARDUINO_STATUS',
                status
            })
        })

    },[])
    if(!props.user.user)
    return(
        <LoginScreen error={loginError} loading={loading} setLoading={setLoading} setError={setLoginError}/>
    )
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home" drawerContent={props=><DrawerContent {...props} />}>
                <Drawer.Screen name="Home" component={HomeTabScreen} />
                {/* <Drawer.Screen name="Login" component={LoginScreen} /> */}
                <Drawer.Screen name="Graph" component={GraphsStackScreen} />
                <Drawer.Screen name="Profile" component={ProfileStackScreen} />
                <Drawer.Screen name="Progress" component={GraphStackScreen} />
                <Drawer.Screen name='Switch' component={SwitchStackScreen} />
                <Drawer.Screen name="Weather" component={WeatherStackScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

const mapStateToProps = (state)=>{
    return state
}
export default connect(mapStateToProps) (NaviGator)