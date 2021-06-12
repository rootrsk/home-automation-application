import React from 'react'
import { View, Text, StyleSheet,Button,TouchableOpacity,Image,ScrollView } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import styled from 'styled-components'
import greenLed from '../assets/images/greenLed.png'
import redLed from '../assets/images/redLed.png'
const SwitchScreen = (props) => {
    const switchHandler = (switch_no,status,user) =>{
        if(props.socket){
            props.socket.emit('switch-trigger',{switch_no,status})
        }
        props.dispatch({
            type: 'SET_SWITCH_STATUS',
            buttonStatus:{switch_no,status,user}
        })
    }
    const turnEverything = () =>{
        if(!props.socket) return
        Object.entries(props.buttons).map((button,index)=>{
            setTimeout(() => {
                props.socket.emit('switch-trigger',{switch_no:index+1,status:false})
                props.dispatch({
                    type: 'SET_SWITCH_STATUS',
                    buttonStatus:{switch_no:index+1,status:false,user:'rootrsk'}
                })
                console.log('hhehehe')
            }, (index)*1000);
            
        })
    }
    return (
        <MainContainer>
            <ButtonContainerWrappwer>
                <Switch buttonName='Button1' buttonStatus={props.buttons.switch_1} buttonNumber={1} buttonHandler={switchHandler} /> 
                <Switch buttonName='Button2' buttonStatus={props.buttons.switch_2} buttonNumber={2} buttonHandler={switchHandler} />
                <Switch buttonName='Button3' buttonStatus={props.buttons.switch_3} buttonNumber={3} buttonHandler={switchHandler} />
                <Switch buttonName='Button4' buttonStatus={props.buttons.switch_4} buttonNumber={4} buttonHandler={switchHandler} />
                <Switch buttonName='Button5' buttonStatus={props.buttons.switch_5} buttonNumber={5} buttonHandler={switchHandler} />
                <Switch buttonName='Button6' buttonStatus={props.buttons.switch_6} buttonNumber={6} buttonHandler={switchHandler} />
                <Switch buttonName='Button7' buttonStatus={props.buttons.switch_7} buttonNumber={7} buttonHandler={switchHandler} />
                <Switch buttonName='Button8' buttonStatus={props.buttons.switch_8} buttonNumber={8} buttonHandler={switchHandler} />
                {/* <Switch buttonName='Turn off Everything' buttonStatus={false} buttonNumber={9} buttonHandler={turnEverything} /> */}
            </ButtonContainerWrappwer>
            
        </MainContainer>
    )
}
const mapStateToProps = (state) =>state

export default connect(mapStateToProps) (SwitchScreen)

const MainContainer = styled.View`
    display:flex;
    justify-content:center;
    align-items:center;
    height:100%;
    background: #0d2457;
    `
const ButtonContainerWrappwer = styled.View`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-evenly;
    `
const ButtonContainer = styled.TouchableOpacity`
    display:flex;
    justify-content:center;
    align-items:center;
    width:50%;
    margin:10px 0px    
`
const ButtonTitle = styled.Text`
    color:#fff;
    `
const LedImage = styled.Image`
    width:30px;
    height:30px
    `

const Switch = ({buttonStatus,buttonHandler,buttonNumber,buttonName}) =>{
    return(
        <ButtonContainer onPress={()=>buttonHandler(buttonNumber,!buttonStatus)}>
            <LedImage source={buttonStatus?greenLed:redLed} />
            <MaterialCommunityIcons name='power' color={buttonStatus?'#fff':'#a0a0a0'} size={55} style={styles.icon} />
            <ButtonTitle style={{color:buttonStatus?'#fff':'#a0a0a0'}}>
               {buttonName}
            </ButtonTitle>
        </ButtonContainer> 
    )
}

const styles = StyleSheet.create({
    icon:{
        elevation:5,
        shadowColor:'red',
        shadowRadius:20
    }
})