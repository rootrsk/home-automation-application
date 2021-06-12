import React, {useEffect, useState} from 'react'
import { View,Text, Button, StyleSheet,Image ,ScrollView} from 'react-native'
import styled from 'styled-components'
import BorderStatus from '../components/BorderStatus';
import SwitchButton from '../components/SwitchButton';
import YAxisExample from '../components/charts/LineChart';
import ProgressCircleExample from '../components/charts/ProgressCircleChart';
import { connect } from 'react-redux';
const END_POINT = 'https://rootrsk-home-automation-api.herokuapp.com'
let stateHandler;
let loginHandler;
function HomeScreen(props) {

    const switchHandler = (switch_no,status,user) =>{
        if(props.socket){
            props.socket.emit('switch-trigger',{switch_no,status})
        }
        props.dispatch({
            type: 'SET_SWITCH_STATUS',
            buttonStatus:{switch_no,status,user}
        })

        // if(!user){
        //     stateHandler({switch_no,status})
        // }
    }
    useEffect(()=>{
       
    },[])
    return (
        <HomeView>
            <BorderStatus status={props.arduino} />
            {/* <Divider /> */}
            <ButtonsContainer horizontal={true}>
                <SwitchButton buttonHandler={switchHandler} buttonStatus={props.buttons.switch_1} buttonNumber={1} title='Button 1'/>
                <SwitchButton buttonHandler={switchHandler} buttonStatus={props.buttons.switch_2} buttonNumber={2} title='Button 2'/>
                <SwitchButton buttonHandler={switchHandler} buttonStatus={props.buttons.switch_3} buttonNumber={3} title='Button 3'/>
                <SwitchButton buttonHandler={switchHandler} buttonStatus={props.buttons.switch_4} buttonNumber={4} title='Button 4'/>
                <SwitchButton buttonHandler={switchHandler} buttonStatus={props.buttons.switch_5} buttonNumber={5} title='Button 5'/>
                <SwitchButton buttonHandler={switchHandler} buttonStatus={props.buttons.switch_6} buttonNumber={6} title='Button 6'/>
                <SwitchButton buttonHandler={switchHandler} buttonStatus={props.buttons.switch_7} buttonNumber={7} title='Button 7'/>
                <SwitchButton buttonHandler={switchHandler} buttonStatus={props.buttons.switch_8} buttonNumber={8} title='Button 8'/>
            </ButtonsContainer>
           
            <YAxisExample data={props.sensors.temp} title='Temperature' unit='ºC'/>
            <ProgressCircleExample data={props.sensors.temp} title='Temp'/>
            <ProgressCircleExample data={props.sensors.humidity} title='Humid.'  />
            <ProgressCircleExample data={props.sensors.ch} title='CH4' unit="ppm"/>
            <ProgressCircleExample data={props.sensors.co} title='CO' unit="ppm"/>
        </HomeView>
    )
}

const mapStateToProps = (state) =>{
    return state;
}

export default connect(mapStateToProps) (HomeScreen)
const styles = StyleSheet.create({
    con: {
        width: '100%',
        height: '200px',
        backgroundColor: 'green'
    }
})

const Title = styled.Text `
    font-size:20px;
    text-align:center;
    `
const ArduinoContainer = styled.View `
    background-color: red;
    width:100%;
    height: 100px;
    `
const ImageContainer = styled.Image `
    width:200px;
    height:200px
    `
const ButtonsContainer = styled.ScrollView`
    background: #05183f;
    display:flex;
    flex-direction:row;
    padding:10px 0px;
    margin:10px 0px;
    `
const Divider = styled.View`
    background: #ffffff;
    display:flex;
    width:100%;
    height:1px;
    `
const HomeView = styled.ScrollView`
    background: #0d2457;
    `