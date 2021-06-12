import React from 'react'
import { View, Text, Image, TouchableOpacity,Switch, StyleSheet } from 'react-native'
import styled from 'styled-components'
import greenLed from '../assets/images/greenLed.png'
import redLed from '../assets/images/redLed.png'

const SwitchButton = ({buttonHandler,buttonStatus,buttonNumber,title}) => {
    return (
        <ButtonContainer>
            <LedContainer>
                <LedImage source={buttonStatus?greenLed:redLed} />
            </LedContainer>
            <IconContainer >
                <StyledSwitch
                    trackColor={{ false: "#767577", true: "#2dfff4" }}
                    thumbColor={buttonStatus ? "#00fdfd" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={()=>buttonHandler(buttonNumber,!buttonStatus)}
                    value={buttonStatus}
                />
            </IconContainer>
            <ButtonName>
                {title}
            </ButtonName>
        </ButtonContainer>
    )
}

export default SwitchButton


const ButtonContainer = styled.View`
    width:70px;
    display:flex;
    align-items:center;
    
    `
const LedContainer = styled.View`

    `
const IconContainer = styled.TouchableOpacity `

    `
const ButtonName = styled.Text `
    color:#ffffff;
    `
const StyledSwitch = styled.Switch`
    transform: rotate(-90deg);
    padding: 7px 0px;
    `
const LedImage = styled.Image`
    width:30px;
    height:30px
    `
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        width: 90,
        height: 40,
        transform: [{
            rotate: '-90deg'
        }]
    }
});