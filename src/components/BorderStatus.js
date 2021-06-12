import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components'
import greenLed from '../assets/images/greenLed.png'
import redLed from '../assets/images/redLed.png'

const BorderStatus = ({status}) => {
    return (
        <ArduinoStatusContainer>
            <ArduinoTitleContainer>
                <ArduinoTitle>
                    Arduino
                </ArduinoTitle>
            </ArduinoTitleContainer>
            
            <ArduinoStatus>
                <StatusText>
                    {status?'Connected':'Disconnected'}
                </StatusText>
                {status?<ImageContainer source={greenLed} />:<ImageContainer source={redLed} />}
                
            </ArduinoStatus>
        </ArduinoStatusContainer>
    )
}

export default BorderStatus

const ArduinoStatusContainer = styled.View`
    width:100%;
    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;
    justify-content: space-between;
    background: #05183f;
    `
const ArduinoTitleContainer = styled.View`
    display:flex;
    align-items:center;
    `
const ArduinoTitle = styled.Text`
    font-size:20px;
    font-weight:700;
    color: white;
    padding: 10px 7px
    ` 
const ArduinoStatus = styled.View`
    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;
    justify-content: space-between;
    align-items:center;
    margin:10px 5px;
    `
const StatusText = styled.Text`
    color: #ffffff; 
    margin:0px 5px;
    `
const ImageContainer = styled.Image`
    width:30px;
    height:30px
    `